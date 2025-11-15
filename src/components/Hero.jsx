import { MdEmail } from "react-icons/md";
import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-12"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
          {/* Left Content Section */}
          <div
            className="flex-1 text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 w-full order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Greeting Badge */}
            <div
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-white/90 font-medium hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 overflow-hidden"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:animate-ping shadow-lg shadow-green-400/50"></span>
              <span className="relative z-10">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-3" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight">
                <span className="block text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  Hi, I'm
                </span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Sainathreddy
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent opacity-30 blur-xl animate-gradient bg-[length:200%_auto]">
                    Sainathreddy
                  </span>
                </span>
              </h1>
            </div>

            {/* Role/Title */}
            <div className="space-y-3 sm:space-y-4" data-aos="fade-up" data-aos-delay="300">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white/90 drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                Full Stack Developer
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 md:gap-3 text-xs sm:text-sm md:text-base text-white/70 px-2 sm:px-4 md:px-0">
                <span className="group/tech relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default overflow-hidden text-xs sm:text-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">React.js</span>
                </span>
                <span className="group/tech relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-default overflow-hidden text-xs sm:text-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">Angular</span>
                </span>
                <span className="group/tech relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default overflow-hidden text-xs sm:text-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">.NET Core</span>
                </span>
                <span className="group/tech relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default overflow-hidden text-xs sm:text-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">Node.js</span>
                </span>
                <span className="group/tech relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 cursor-default overflow-hidden text-xs sm:text-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">MongoDB</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-6 md:px-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Transforming ideas into impactful digital experiences using modern
              tech stacks. Ready to contribute to teams and deliver high-quality
              software solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6 px-4 sm:px-6 md:px-0"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 touch-manipulation active:scale-95 w-full sm:w-auto"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#projects"
                className="group relative px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 overflow-hidden touch-manipulation active:scale-95 w-full sm:w-auto"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>

                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 px-4 sm:px-6 md:px-0">
              <span className="text-white/60 text-xs sm:text-sm font-medium whitespace-nowrap">
                Connect with me:
              </span>
              <div className="flex gap-3 sm:gap-3.5 md:gap-4">
                <a
                  href="https://github.com/sainath-666"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group relative p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 overflow-hidden touch-manipulation active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:rotate-12" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sainath666"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group relative p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 overflow-hidden touch-manipulation active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:rotate-12" />
                </a>
                <a
                  href="mailto:sai65265@gmail.com"
                  aria-label="Email"
                  className="group relative p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 overflow-hidden touch-manipulation active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <MdEmail className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:rotate-12" />
                </a>
                <a
                  href="https://wa.link/oeaxld"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group relative p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 overflow-hidden touch-manipulation active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <IoLogoWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:rotate-12" />
                </a>
                <a
                  href="https://www.instagram.com/sainath_666/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group relative p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 overflow-hidden touch-manipulation active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:rotate-12" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem]">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-500 opacity-25 blur-3xl animate-pulse"></div>

              {/* Animated Border Ring */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-500 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-950"></div>
              </div>

              {/* Profile Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-white/5 group hover:scale-105 transition-all duration-500 z-10 hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-indigo-500/30 to-teal-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={profileImg}
                  alt="Portrait of Sainathreddy - Full Stack Developer"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl sm:text-2xl animate-bounce-slow">
                ⚛️
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl sm:text-2xl animate-bounce-slow animation-delay-1000">
                💻
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 block z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors duration-300 group touch-manipulation"
        >
          <span className="text-xs sm:text-sm font-medium hidden sm:block">Scroll Down</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center p-1.5 sm:p-2 group-hover:border-white/80 transition-colors">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
