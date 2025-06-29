import { MdEmail } from "react-icons/md";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-10 md:pt-0 flex flex-col md:flex-row items-center justify-center gap-10 px-4 text-center md:text-left bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative"
    >
      {/* Profile Image */}
      <div
        className="relative w-50 h-50 md:w-80 md:h-80 group transition duration-500 transform hover:scale-105"
        data-aos="fade-right"
      >
        <div className="absolute inset-0 rounded-full blur-2xl bg-blue-500 opacity-30 group-hover:opacity-50 z-0 transition duration-500"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl z-10 group-hover:shadow-blue-500 group-hover:shadow-md transition-shadow duration-500">
          <img
            src={profileImg}
            alt="Portrait of Sainathreddy - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="space-y-4" data-aos="fade-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Hi, I'm{" "}
          <span className="transition duration-500 hover:text-blue-400">
            Sainathreddy
          </span>
        </h1>

        <p className="text-sm md:text-lg text-gray-400 font-mono uppercase tracking-wider">
          Full Stack Developer | React.js | Node.js | MongoDB
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 transition-opacity duration-700 hover:opacity-100 opacity-90">
          Transforming ideas into impactful digital experiences using modern
          tech stacks. Ready to contribute to teams and deliver high-quality
          software solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500/40 hover:shadow-lg text-white px-6 py-2 rounded-md font-medium transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-blue-400/40 hover:shadow-lg px-6 py-2 rounded-md font-medium transition duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center md:justify-start pt-4 text-4xl text-gray-400">
          <a
            href="https://github.com/sainath-666"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sainath666"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sai65265@gmail.com"
            aria-label="Email"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://wa.link/oeaxld"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a
          href="#about"
          className="text-gray-400 hover:text-white animate-bounce text-2xl transition-transform duration-300 hover:scale-125"
        >
          ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;
