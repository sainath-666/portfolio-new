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
            I’m <span className="text-blue-400 font-medium">Sainath Reddy</span>
            , a self-driven Web & App Developer with a strong foundation in
            modern full-stack technologies. I specialize in building responsive,
            scalable, and user-focused applications using tools like React,
            Node.js, MongoDB, and Tailwind CSS.
          </p>
          <p className="text-gray-400">
            My journey began with curiosity and turned into a passion for
            building things that solve real problems. Whether it's designing
            intuitive UIs or architecting robust backends, I aim to deliver
            clean, practical code.
          </p>
          <p className="italic text-blue-300">
            "Code isn't just about logic — it's about impact."
          </p>
        </div>

        {/* Right Side - Optional Image or Info Box */}
        {/* Right Side - Expanded Info Box */}
        <div
          className="flex-1 w-full md:w-auto"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 text-sm text-gray-300">
            {/* Personal Info Header */}
            <div>
              <div className="text-xl font-semibold text-white border-b border-gray-600 pb-2 mb-4">
                Personal Info
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-white">Full Name:</span>
                  <br /> Sainath Reddy
                </div>
                <div>
                  <span className="font-semibold text-white">Role:</span>
                  <br /> Web & App Developer
                </div>
                <div>
                  <span className="font-semibold text-white">DOB:</span>
                  <br /> July 18, 2003
                </div>
                <div>
                  <span className="font-semibold text-white">Location:</span>
                  <br /> Rayachoty, Andhra Pradesh, India
                </div>
                <div>
                  <span className="font-semibold text-white">Email:</span>
                  <br />
                  <a
                    href="mailto:sai65265@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    sai65265@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white">GitHub:</span>
                  <br />
                  <a
                    href="https://github.com/sainath-666"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    github.com/sainath-666
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white">LinkedIn:</span>
                  <br />
                  <a
                    href="https://linkedin.com/in/sainath666"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    linkedin.com/in/sainath666
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white">Freelancing:</span>
                  <br /> Available
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="text-xl font-semibold text-white border-b border-gray-600 pb-2 mb-4">
                Education
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-white">
                    B.Tech - CSE (IoT, Cybersecurity & Blockchain)
                  </span>
                  <br />
                  Siddharth Institute of Engineering and Technology, Puttur
                  <br />
                  2020 – 2024 | 6.8 CGPA
                </div>
                <div>
                  <span className="font-semibold text-white">
                    Intermediate (MPC)
                  </span>
                  <br />
                  Sri Chaitanya Junior College, Vijayawada
                  <br />
                  2018 – 2020 | 64.6%
                </div>
                <div>
                  <span className="font-semibold text-white">
                    Class X (CBSE)
                  </span>
                  <br />
                  Penchalreddy High School, Rayachoty
                  <br />
                  2017 – 2018 | 88.6%
                </div>
              </div>
            </div>

            {/* Optional Summary Note */}
            <div className="pt-2 border-t border-gray-700 text-gray-400 text-sm">
              Passionate about scalable UI/UX, full-stack product development,
              and solving real-world problems with code.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
