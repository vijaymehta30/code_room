
export default function ApplicationServices() {
  const services = [
    {
      title: "Realtime Collaboration",
      description:
        "Collaborate with developers in realtime inside shared coding rooms where every code change is instantly synchronized across all connected users.",
      icon: "💻",
    },
    {
      title: "Online Code Execution",
      description:
        "Run code instantly in multiple programming languages using integrated execution APIs and view outputs directly inside the workspace.",
      icon: "🚀",
    },
    {
      title: "Group Chat System",
      description:
        "Communicate with teammates while coding using the built-in realtime room chat system designed for collaborative development.",
      icon: "💬",
    },
    {
      title: "Shared Whiteboard",
      description:
        "Explain ideas, algorithms, workflows, and system designs visually using the collaborative drawing board feature.",
      icon: "🎨",
    },
    {
      title: "Live Cursor Tracking",
      description:
        "Track collaborators’ cursor movements and typing activities live to improve team coordination and editing awareness.",
      icon: "🖱️",
    },
    {
      title: "Room Based Access",
      description:
        "Create private coding rooms with unique room IDs and invite teammates securely for project collaboration.",
      icon: "🔐",
    },
    {
      title: "File Synchronization",
      description:
        "Automatically synchronize files, folders, and project structures across all users connected to the workspace.",
      icon: "📂",
    },
    {
      title: "Responsive Workspace",
      description:
        "Enjoy a seamless coding experience across desktop, laptop, and mobile devices with a responsive interface.",
      icon: "📱",
    },
  ];

  const features = [
    "Live Cursor Tracking",
    "Room Based Collaboration",
    "Responsive Workspace",
    "File Synchronization",
    "Multiple Language Support",
    "Modern IDE Interface",
  ];

  return (
    <>
    <div className="bg-[#0b0b0b] text-white overflow-hidden">

       {/* SERVICES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-5">
              Platform Services
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
              Explore the advanced collaborative features, development tools,
              and realtime services integrated into the platform to simplify
              online software development and teamwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#171717] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


    </div>
    </>
   
  )
}
