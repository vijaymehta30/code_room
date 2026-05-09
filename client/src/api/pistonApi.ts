import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance