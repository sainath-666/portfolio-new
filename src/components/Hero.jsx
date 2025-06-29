import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 text-center md:text-left bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Profile Image */}
      <div
        className="relative w-40 h-40 md:w-60 md:h-60 group transition duration-500 transform hover:scale-105"
        data-aos="fade-right"
      >
        <div className="absolute inset-0 rounded-full blur-2xl bg-blue-500 opacity-30 group-hover:opacity-50 z-0 transition duration-500"></div>

        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl z-10">
          <img
            src={profileImg}
            alt="Sai Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="space-y-4" data-aos="fade-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition duration-500 hover:tracking-wide hover:text-blue-400">
          Hi, I'm <span className="text-blue-400">Sainathreddy</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 transition-opacity duration-700 hover:opacity-100 opacity-90">
          A Web & App Developer focused on building high-impact, job-ready
          projects...
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-md font-medium transition duration-300"
          >
            View Projects
          </a>
        </div>

        <div className="flex gap-6 justify-center md:justify-start pt-4 text-2xl text-gray-400">
          <a
            href="https://github.com/sainath-666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sainath666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
