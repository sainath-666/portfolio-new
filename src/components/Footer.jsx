import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sainath Reddy. All rights reserved.
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-6 text-xl">
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
          <a
            href="mailto:sai65265@gmail.com"
            className="hover:text-white transition"
          >
            📧
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
