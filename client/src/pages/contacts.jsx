export default function Teamcontacts() {
  const team = [
    {
      name: "Vijay Mehta",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/300?img=11",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Aarav Sharma",
      role: "Backend Developer",
      image: "https://i.pravatar.cc/300?img=12",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Priya Verma",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/300?img=13",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Rohan Gupta",
      role: "Project Manager",
      image: "https://i.pravatar.cc/300?img=14",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="bg-[#0b0b0b] text-white overflow-hidden">




     
      {/* TEAM SECTION */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-5">
              Meet Our Team
            </h2>

            <p className="text-gray-400 text-lg">
              The people building the future of collaborative coding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {member.name}
                  </h3>

                  <p className="text-blue-400 mb-5">
                    {member.role}
                  </p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CONTACT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Have questions, suggestions, or collaboration ideas?
            Reach out to us anytime.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#1a1a1a] border border-gray-800 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#1a1a1a] border border-gray-800 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="sm:col-span-2 bg-[#1a1a1a] border border-gray-800 rounded-2xl px-5 py-4 outline-none resize-none"
            />

          </div>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-semibold transition-all duration-300">
            Send Message
          </button>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Code Room. All Rights Reserved.
      </footer>

    </div>
  )
}
