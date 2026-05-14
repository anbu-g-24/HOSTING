import React from "react"
function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur-md z-50">

        <h1 className="text-2xl font-bold text-yellow-400">
          ANBARASU G
        </h1>

        <ul className="flex gap-6 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-yellow-400 duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-yellow-400 duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-yellow-400 duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>


      {/* HERO SECTION */}
      <section
        id="home"
        className="scroll-mt-20 flex flex-col items-center justify-center text-center h-screen px-5"
      >

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-400">ANBARASU G</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Python Full Stack Developer
        </h2>

        <p className="max-w-2xl text-gray-300 text-lg leading-8 mb-8">
          Passionate about building responsive and scalable web
          applications using React, Django, and MySQL.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          <a
            href="https://github.com/anbu-g-24"
            target="_blank"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anbarasu-g-ak"
            target="_blank"
            className="border border-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black duration-300"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-20 min-h-screen flex items-center px-8"
      >

        <div className="max-w-5xl mx-auto w-full">

          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-400 text-center">
            About Me
          </h2>

          <div className="bg-gray-950 p-10 rounded-3xl border border-gray-800 hover:border-yellow-400 duration-300">

            <p className="text-lg md:text-xl text-gray-300 leading-10 text-center">

              Passionate and detail-oriented Full Stack Developer with hands-on
              experience in building responsive and scalable web applications
              using React.js, Python, Django, and MySQL.

              <br /><br />

              Strong understanding of frontend and backend development,
              REST APIs, and database management. Skilled in creating
              user-friendly interfaces and developing efficient solutions
              through real-world projects.

              <br /><br />

              Eager to begin a professional career in software development
              and contribute to innovative development teams while
              continuously learning new technologies.

            </p>

          </div>

        </div>

      </section>


      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-15 min-h-screen flex items-center bg-gray-950 px-8"
      >

        <div className="max-w-6xl mx-auto w-full">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "Tailwind CSS",
              "JavaScript",
              "React JS",
              "Python",
              "Django",
              "REST APIs",
              "MySQL",
              "GitHub",
              "Postman",
            ].map((skill, index) => (

              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-8 text-center hover:border-yellow-400 hover:-translate-y-2 duration-300"
              >

                <h3 className="text-xl font-semibold">
                  {skill}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="scroll-mt-20 min-h-screen flex items-center px-8"
      >

        <div className="max-w-6xl mx-auto w-full">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* PROJECT 1 */}
            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-yellow-400 hover:-translate-y-2 duration-300">

              <h3 className="text-2xl font-bold mb-4">
                Online Food Ordering System
              </h3>

              <p className="text-gray-300 mb-6 leading-8">
                Developed a full-stack food ordering application using
                Django, MySQL, Bootstrap, and REST APIs with authentication,
                CRUD operations, and responsive UI.
              </p>

              <a
                href="https://github.com/anbu-g-24"
                target="_blank"
                className="text-yellow-400 font-semibold"
              >
                View Project →
              </a>

            </div>


            {/* PROJECT 2 */}
            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-yellow-400 hover:-translate-y-2 duration-300">

              <h3 className="text-2xl font-bold mb-4">
                Image Steganography
              </h3>

              <p className="text-gray-300 mb-6 leading-8">
                Built a secure communication system using Python
                to hide text and audio files inside images using
                steganography techniques.
              </p>

              <a
                href="https://github.com/anbu-g-24"
                target="_blank"
                className="text-yellow-400 font-semibold"
              >
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-20 min-h-screen flex items-center bg-gray-950 px-8"
      >

        <div className="max-w-3xl mx-auto text-center w-full">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">
            Contact
          </h2>

          <p className="text-lg text-gray-300 leading-8 mb-10">
            I'm currently looking for Full Stack Developer opportunities.
            Feel free to contact me anytime.
          </p>

          <div className="space-y-5 text-lg">

            <p>📧 anbarasuanbu364@gmail.com</p>

            <p>📍 Chennai, Tamil Nadu</p>

          </div>


          {/* RESUME BUTTON */}
          <div className="mt-12">

            <a
              href="/resume.pdf"
              download
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 duration-300 inline-block"
            >
              Download Resume
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-400">

        <p>
          © 2026 Anbarasu G. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default App

