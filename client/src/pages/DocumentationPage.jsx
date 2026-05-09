export default function DocumentationPage() {
  const sections = [
    "Introduction",
    "Getting Started",
    "Core Features",
    "Code Execution",
    "Realtime Collaboration",
    "Chat System",
    "Whiteboard",
    "Room Management",
    "Supported Languages",
    "Keyboard Shortcuts",
    "FAQ",
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex">

      {/* SIDEBAR */}
      <aside className="hidden lg:block w-[280px] border-r border-gray-800 bg-[#111111] sticky top-0 h-screen overflow-y-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-10 text-blue-500">
            Docs
          </h1>

          <div className="flex flex-col gap-4">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </aside>


      {/* MAIN CONTENT */}
      <main className="flex-1 px-6 lg:px-16 py-14 overflow-y-auto">

        {/* HERO */}
        <section className="mb-24">
          <p className="text-blue-400 font-semibold mb-4">
            Code Room Documentation
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-8 max-w-5xl">
            Everything You Need To Use
            <span className="text-blue-500"> Code Room</span>
          </h1>

          <p className="text-gray-400 text-lg leading-9 max-w-4xl">
            Welcome to the official documentation for Code Room — a modern realtime collaborative coding platform.
            This documentation will guide you through the platform features, workflows,
            room management system, collaborative tools, and code execution environment.
          </p>
        </section>


        {/* INTRODUCTION */}
        <section
          id="introduction"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Introduction
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-9">
            <p>
              Code Room is a collaborative development platform that allows multiple users
              to work together in shared coding environments in realtime.
            </p>

            <p>
              The platform combines live code synchronization, integrated code execution,
              realtime chat systems, shared whiteboards, and collaborative editing features
              into one modern workspace.
            </p>

            <p>
              It is designed for developers, students, coding teams, hackathons,
              pair programming sessions, remote project collaboration, and educational coding environments.
            </p>
          </div>
        </section>


        {/* GETTING STARTED */}
        <section
          id="getting-started"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Getting Started
          </h2>

          <div className="space-y-8">

            <div className="bg-[#151515] border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Step 1 — Create or Join a Room
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                Users can create private collaborative rooms or join existing rooms using unique room IDs.
                Every room acts as an isolated collaborative workspace.
              </p>
            </div>

            <div className="bg-[#151515] border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Step 2 — Open the Workspace
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                Inside the workspace users can create files, edit code,
                communicate through chat, and collaborate using shared tools.
              </p>
            </div>

            <div className="bg-[#151515] border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Step 3 — Run Code
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                Select a supported programming language and execute code directly inside the platform.
                Outputs are displayed instantly inside the execution panel.
              </p>
            </div>

          </div>
        </section>


        {/* FEATURES */}
        <section
          id="core-features"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12">
            Core Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Realtime Editing",
                description:
                  "Every file update is synchronized instantly across all connected users.",
              },
              {
                title: "Live Cursor Tracking",
                description:
                  "Track collaborator cursor movements and selections while coding together.",
              },
              {
                title: "Integrated Chat",
                description:
                  "Discuss ideas and communicate directly within collaborative rooms.",
              },
              {
                title: "Code Execution",
                description:
                  "Run code in multiple programming languages using integrated execution APIs.",
              },
              {
                title: "Whiteboard Support",
                description:
                  "Visualize workflows, algorithms, and system designs collaboratively.",
              },
              {
                title: "File Synchronization",
                description:
                  "Automatically sync files, folders, and project structures across all users.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#151515] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-5">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-8 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* CODE EXECUTION */}
        <section
          id="code-execution"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Code Execution System
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-9">
            <p>
              Code Room integrates online code execution using external runtime APIs.
              Users can execute supported programming languages directly inside the platform.
            </p>

            <p>
              The execution environment handles:
            </p>

            <ul className="list-disc ml-8 space-y-3">
              <li>Runtime selection</li>
              <li>Source code execution</li>
              <li>Standard input support</li>
              <li>Output rendering</li>
              <li>Error handling</li>
            </ul>

            <div className="bg-[#151515] rounded-3xl p-8 border border-gray-800 overflow-x-auto">
              <pre className="text-green-400 text-sm leading-7">
{`console.log("Welcome to Code Room")`}
              </pre>
            </div>
          </div>
        </section>


        {/* REALTIME COLLABORATION */}
        <section
          id="realtime-collaboration"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Realtime Collaboration
          </h2>

          <p className="text-gray-400 text-lg leading-9 mb-6">
            The collaborative synchronization system allows multiple developers to work together simultaneously.
            Every typing action, file update, and cursor movement is synchronized instantly.
          </p>

          <div className="bg-[#151515] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-blue-400 mb-5">
              Collaboration Features
            </h3>

            <ul className="space-y-4 text-gray-400 text-lg">
              <li>• Realtime code synchronization</li>
              <li>• Multi-user workspace support</li>
              <li>• Live typing indicators</li>
              <li>• Shared file system</li>
              <li>• Realtime cursor tracking</li>
              <li>• Instant event broadcasting</li>
            </ul>
          </div>
        </section>


        {/* CHAT SYSTEM */}
        <section
          id="chat-system"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Chat System
          </h2>

          <p className="text-gray-400 text-lg leading-9">
            The integrated chat system allows room participants to communicate without leaving the workspace.
            Messages are synchronized instantly across all connected users using socket-based communication.
          </p>
        </section>


        {/* WHITEBOARD */}
        <section
          id="whiteboard"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Shared Whiteboard
          </h2>

          <p className="text-gray-400 text-lg leading-9">
            The shared whiteboard allows users to brainstorm ideas,
            draw diagrams, explain workflows, and collaborate visually in realtime.
          </p>
        </section>


        {/* ROOM MANAGEMENT */}
        <section
          id="room-management"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Room Management
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-9">
            <p>
              Rooms are isolated collaborative environments identified using unique room IDs.
            </p>

            <p>
              Each room maintains:
            </p>

            <ul className="list-disc ml-8 space-y-3">
              <li>Connected users</li>
              <li>Shared file structures</li>
              <li>Realtime synchronization events</li>
              <li>Chat communication</li>
              <li>Drawing sessions</li>
            </ul>
          </div>
        </section>


        {/* SUPPORTED LANGUAGES */}
        <section
          id="supported-languages"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Supported Languages
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "JavaScript",
              "TypeScript",
              "Python",
              "C++",
              "Java",
              "C",
              "Go",
              "Rust",
            ].map((lang, index) => (
              <div
                key={index}
                className="bg-[#151515] border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  {lang}
                </h3>
              </div>
            ))}
          </div>
        </section>


        {/* SHORTCUTS */}
        <section
          id="keyboard-shortcuts"
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">
            Keyboard Shortcuts
          </h2>

          <div className="overflow-x-auto rounded-3xl border border-gray-800">
            <table className="w-full">
              <thead className="bg-[#151515]">
                <tr>
                  <th className="text-left p-5">Shortcut</th>
                  <th className="text-left p-5">Action</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Ctrl + S", "Save File"],
                  ["Ctrl + Enter", "Run Code"],
                  ["Ctrl + /", "Toggle Sidebar"],
                  ["Ctrl + Shift + P", "Command Palette"],
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-800"
                  >
                    <td className="p-5 text-blue-400">
                      {item[0]}
                    </td>

                    <td className="p-5 text-gray-400">
                      {item[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


        {/* FAQ */}
        <section
          id="faq"
          className="mb-10"
        >
          <h2 className="text-4xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            {[
              {
                question: "How do I join a room?",
                answer:
                  "Use the room ID shared by the room creator to join the collaborative workspace.",
              },
              {
                question: "Can multiple users edit files simultaneously?",
                answer:
                  "Yes. File changes are synchronized instantly across all connected users.",
              },
              {
                question: "Does the platform support code execution?",
                answer:
                  "Yes. Multiple programming languages are supported through integrated runtime APIs.",
              },
              {
                question: "Is the workspace responsive?",
                answer:
                  "Yes. The interface is optimized for desktop and mobile devices.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#151515] border border-gray-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  {faq.question}
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {faq.answer}
                </p>
              </div>
            ))}

          </div>
        </section>

      </main>
    </div>
  )
}
