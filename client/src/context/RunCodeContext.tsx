import axiosInstance from "@/api/pistonApi"
import { Language, RunContext as RunContextType } from "@/types/run"
import langMap from "lang-map"
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"
import toast from "react-hot-toast"
import { useFileSystem } from "./FileContext"

const RunCodeContext = createContext<RunContextType | null>(null)

export const useRunCode = () => {
    const context = useContext(RunCodeContext)

    if (context === null) {
        throw new Error(
            "useRunCode must be used within a RunCodeContextProvider",
        )
    }

    return context
}

const RunCodeContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const { activeFile } = useFileSystem()

    const [input, setInput] = useState<string>("")
    const [output, setOutput] = useState<string>("")
    const [isRunning, setIsRunning] = useState<boolean>(false)

    const [supportedLanguages, setSupportedLanguages] = useState<
        Language[]
    >([])

    const [selectedLanguage, setSelectedLanguage] =
        useState<Language | null>(null)

    // FETCH LANGUAGES
    useEffect(() => {
        const fetchSupportedLanguages = async () => {
            try {
                console.log("FETCHING LANGUAGES")

                const response =
                    await axiosInstance.get("/runtimes")

                console.log("LANGUAGES:", response.data)

                setSupportedLanguages(response.data)
            } catch (error: any) {
                console.error(error)

                toast.error(
                    "Failed to fetch supported languages",
                )
            }
        }

        fetchSupportedLanguages()
    }, [])

    // AUTO DETECT LANGUAGE
    useEffect(() => {
        if (
            supportedLanguages.length === 0 ||
            !activeFile?.name
        )
            return

        const extension =
            activeFile.name.split(".").pop()

        if (!extension) return

        const languageName =
            langMap.languages(extension) || []

        const language = supportedLanguages.find(
            (lang) =>
                lang.aliases.includes(extension) ||
                languageName.includes(
                    lang.language.toLowerCase(),
                ),
        )

        if (language) {
            console.log("AUTO LANGUAGE:", language)

            setSelectedLanguage(language)
        }
    }, [activeFile?.name, supportedLanguages])

    // RUN CODE
    const runCode = async () => {
        try {
            console.log("RUN BUTTON CLICKED")

            if (!selectedLanguage) {
                return toast.error(
                    "Please select a language",
                )
            }

            if (!activeFile) {
                return toast.error(
                    "Please open a file",
                )
            }

            setIsRunning(true)

            toast.loading("Running code...")

            console.log("LANGUAGE:", selectedLanguage)
            console.log("FILE:", activeFile)

            const language =
                selectedLanguage.language

            const version =
                selectedLanguage.version

            const response = await axiosInstance.post(
                "/execute",
                {
                    language,
                    version,
                    files: [
                        {
                            name: activeFile.name,
                            content: activeFile.content,
                        },
                    ],
                    stdin: input,
                },
            )

            console.log(
                "EXECUTION RESPONSE:",
                response.data,
            )

            if (response.data.run.stderr) {
                setOutput(response.data.run.stderr)
            } else {
                setOutput(response.data.run.stdout)
            }

            toast.dismiss()

            setIsRunning(false)
        } catch (error: any) {
            console.error("RUN ERROR:", error)

            console.error(
                "ERROR RESPONSE:",
                error?.response,
            )

            console.error(
                "ERROR DATA:",
                error?.response?.data,
            )

            toast.dismiss()

            setIsRunning(false)

            toast.error("Failed to run code")
        }
    }

    return (
        <RunCodeContext.Provider
            value={{
                setInput,
                output,
                isRunning,
                supportedLanguages,
                selectedLanguage,
                setSelectedLanguage,
                runCode,
            }}
        >
            {children}
        </RunCodeContext.Provider>
    )
}

export { RunCodeContextProvider }

export default RunCodeContext