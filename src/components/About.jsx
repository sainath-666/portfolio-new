const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 text-gray-200">
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-up"
      >
        {/* Left Side - Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m <span className="text-blue-400 font-medium">Sainathreddy</span>,
            a passionate <strong>Web & App Developer</strong> driven by
            curiosity and a deep love for clean, scalable solutions. I specialize in modern full-stack technologies including{" "}
            <span className="text-blue-400 font-semibold">React.js</span>,{" "}
            <span className="text-green-400 font-semibold">Node.js</span>, and{" "}
            <span className="text-emerald-400 font-semibold">MongoDB</span>.
          </p>
          <p className="text-gray-400">
            With a solid understanding of front-end and back-end development, I
            build intuitive UIs and scalable APIs that bring ideas to life. My
            approach is always user-centered, aiming to craft experiences that
            are both functional and beautiful.
          </p>
          <p className="italic text-blue-300">
            "Code isn't just about logic — it's about creating meaningful
            impact."
          </p>
        </div>

        {/* Right Side - Info Box */}
        <div
          className="flex-1 w-full md:w-auto"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 text-sm text-gray-300">
            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2 mb-4">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 break-words">
                <div>
                  <strong className="text-white">Full Name:</strong>
                  <br />
                  Sainathreddy Nerusupalli
                </div>
                <div>
                  <strong className="text-white">Roles:</strong>
                  <br />
                  Web Developer, App Developer, Video Editor
                </div>
                <div>
                  <strong className="text-white">Location:</strong>
                  <br />
                  Hyderabad, Telangana
                </div>
                <div>
                  <strong className="text-white">Education:</strong>
                  <br />
                  B.Tech, CSE (IoT, Cybersecurity & Blockchain)
                </div>
                <div>
                  <strong className="text-white">GitHub:</strong>
                  <br />
                  <a
                    href="https://github.com/sainath-666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    github.com/sainath-666
                  </a>
                </div>
                <div>
                  <strong className="text-white">LinkedIn:</strong>
                  <br />
                  <a
                    href="https://linkedin.com/in/sainath666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    linkedin.com/in/sainath666
                  </a>
                </div>
                <div>
                  <strong className="text-white">Email:</strong>
                  <br />
                  <a
                    href="mailto:sai65265@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    sai65265@gmail.com
                  </a>
                </div>
                <div>
                  <strong className="text-white">Freelancing:</strong>
                  <br />
                  <span className="text-green-500 font-semibold">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="pt-2 border-t border-gray-700 text-gray-400 text-sm">
              Passionate about building user-focused products, scalable
              architectures, and real-time experiences. Always eager to
              collaborate, grow, and build elegant, performant solutions in fast-paced environments.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
