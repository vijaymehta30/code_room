
import { useNavigate } from "react-router";

import Navbar from "./components/Navbar";
import TeamContacts from "./pages/contacts";
import ApplicationServices from "./pages/ApplicationServices";


function Landing(){
    const navigate =useNavigate();
      const avatars = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3",
    "https://i.pravatar.cc/100?img=4",
    "https://i.pravatar.cc/100?img=5",
  ];


  /*About <section></section> */
  const features = [
    {
      title: "Online IDE",
      desc: "Write, run, and test code instantly in a powerful browser-based IDE with real-time execution.",
      icon: "💻",
    },
    {
      title: "Group Coding Rooms",
      desc: "Create private coding rooms, invite teammates with a Room ID, and collaborate together live.",
      icon: "👥",
    },
    {
      title: "Realtime Chat",
      desc: "Discuss ideas, share bugs, and communicate with your team directly inside coding rooms.",
      icon: "💬",
    },
    {
      title: "Collaborative Drawing",
      desc: "Use the built-in whiteboard to explain algorithms, architecture, and coding logic visually.",
      icon: "✏️",
    },
    {
      title: "AI Copilot",
      desc: "Boost productivity with AI-powered coding assistance, suggestions, and debugging support.",
      icon: "🤖",
    },
    {
      title: "Instant Collaboration",
      desc: "See live code updates from teammates in real time without refreshing the page.",
      icon: "⚡",
    },
  ];



    return (
        <>
            <Navbar/>
            <section className="relative overflow-hidden bg-[#f7f8fc] py-24">
            
             {/* Grid Background */}
                <div
                    className="absolute  inset-0 z-10 h-full w-full"
                    style={{
                    backgroundImage: `
                        linear-gradient(to right, #dbe3f1 1px, transparent 1px),
                        linear-gradient(to bottom, #dbe3f1 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    }}
                />

                    {/* Content */}
                 <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

                {/* Avatars */}
                <div className="mb-6 flex items-center">
                {avatars.map((avatar, index) => (
                    <img
                    key={index}
                    src={avatar}
                    alt="user"
                    className={`h-12 w-12 rounded-full border-4 border-white object-cover shadow-md ${
                        index !== 0 ? "-ml-3" : ""
                    }`}
                    />
                ))}
                </div>

                {/* Trusted Text */}
                <p className="mb-8 rounded-full border border-orange-300 bg-white px-4 py-2 text-sm font-medium text-[#2d3250] shadow-sm">
                <span className="text-orange-400">{`{ `}</span>
                Trusted by 5M+ developers
                <span className="text-orange-400">{` }`}</span>
                </p>

                {/* Heading */}
                <h2 className="mb-6 text-4xl font-bold text-[#2d3250] md:text-6xl">
                CodeRoom
                </h2>

                <h1 className="mb-10 text-5xl font-extrabold leading-tight text-[#3d6edb] md:text-8xl">
                Build and Develop Together
                </h1>

                {/* Description */}
                <p className="mb-3 max-w-4xl text-lg text-[#4f5d7a] md:text-2xl">
                Join CodeRoom platform for building projects, Explaing Code,
                and learning.
                </p>

                <p className="mb-12 text-base text-[#4f5d7a] md:text-xl">
                Kickstart Your Coding Journey – No Heavey Hardware,
                Just Real Ide!
                </p>

                {/* Buttons */}
                
                </div>
            </section>

                {/*About section*/ }

            <section id="about" className="relative overflow-hidden bg-white py-24">
            
                {/* Background Glow */}
                <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
                <div className="absolute bottom-0 right-[-120px] h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl px-6">
                    
                    {/* Heading */}
                    <div className="mx-auto mb-20 max-w-4xl text-center">
                    
                    <p className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
                        🚀 About CodeRoom
                    </p>

                    <h2 className="mb-6 text-5xl font-extrabold leading-tight text-[#1f2940] md:text-6xl">
                        Code Together. Build Faster.
                    </h2>

                    <p className="text-lg leading-relaxed text-[#5c6784] md:text-xl">
                        CodeRoom is a collaborative online coding platform where developers
                        can create shared coding rooms, join instantly using Room IDs,
                        communicate in realtime, and build projects together — all inside
                        one powerful workspace.
                    </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left Side */}
                    <div>

                        <div className="mb-8">
                        <h3 className="mb-4 text-3xl font-bold text-[#1f2940]">
                            Why Developers Love CodeRoom
                        </h3>

                        <p className="text-lg leading-relaxed text-[#5c6784]">
                            Whether you're preparing for interviews, building projects with
                            friends, teaching students, or participating in hackathons,
                            CodeRoom gives you everything needed for seamless collaborative
                            development.
                        </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">

                        <div className="rounded-3xl border border-[#e8ecf5] bg-[#f8fbff] p-6 shadow-sm">
                            <h4 className="mb-2 text-4xl font-extrabold text-blue-600">
                            Live
                            </h4>
                            <p className="text-[#5c6784]">
                            Realtime code synchronization
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#e8ecf5] bg-[#f8fbff] p-6 shadow-sm">
                            <h4 className="mb-2 text-4xl font-extrabold text-blue-600">
                            AI
                            </h4>
                            <p className="text-[#5c6784]">
                            Smart coding assistance
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#e8ecf5] bg-[#f8fbff] p-6 shadow-sm">
                            <h4 className="mb-2 text-4xl font-extrabold text-blue-600">
                            Rooms
                            </h4>
                            <p className="text-[#5c6784]">
                            Join teams instantly with Room IDs
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#e8ecf5] bg-[#f8fbff] p-6 shadow-sm">
                            <h4 className="mb-2 text-4xl font-extrabold text-blue-600">
                            Cloud
                            </h4>
                            <p className="text-[#5c6784]">
                            Browser-based development workspace
                            </p>
                        </div>

                        </div>
                    </div>

                    {/* Right Side Features */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        
                        {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-3xl border border-[#e8ecf5] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition group-hover:bg-blue-600 group-hover:text-white">
                            {feature.icon}
                            </div>

                            <h3 className="mb-3 text-2xl font-bold text-[#1f2940]">
                            {feature.title}
                            </h3>

                            <p className="leading-relaxed text-[#5c6784]">
                            {feature.desc}
                            </p>
                        </div>
                        ))}

                    </div>
                    </div>
                </div>
            </section>

            {/*test 1 back */}

           <section id="services"><ApplicationServices/></section>
    <section id="contacts">
      <TeamContacts/>
    </section>
    <section>
      
    </section>



        </>
    )
}

export default Landing