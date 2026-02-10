import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/resume.pdf";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiMysql } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden z-10 pt-14 sm:pt-16 md:pt-20 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
          {/* Left Content Section */}
          <div
            className="flex-1 text-center md:text-left space-y-6 sm:space-y-7 md:space-y-8 max-w-3xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient">
                  Digital
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                    Experiences
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-600/20 -skew-x-12 blur-sm"></div>
                </span>{" "}
                That Matter.
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Hi, I'm{" "}
                <strong className="text-white font-semibold">
                  Sainathreddy
                </strong>
                . A passionate Full Stack Developer crafting robust and scalable
                web applications with modern technologies.
              </p>
            </div>

            {/* Tech Stack Pills - Modern Minimal */}
            <div
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {["React.js", "Angular", "Node.js", ".NET Core", "MySQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-blue-100/80 hover:bg-white/10 hover:border-blue-500/30 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#projects"
                className="group relative px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-2">
                  View My Work
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Download CV
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>

            {/* Social Proof / Stats */}
            <div
              className="flex items-center justify-center md:justify-start gap-8 pt-8 border-t border-white/5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div>
                <h4 className="text-2xl font-bold text-white">2+</h4>
                <p className="text-sm text-blue-200/60">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <h4 className="text-2xl font-bold text-white">10+</h4>
                <p className="text-sm text-blue-200/60">Projects Built</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <h4 className="text-2xl font-bold text-white">100%</h4>
                <p className="text-sm text-blue-200/60">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image Section - Refined Glass Container */}
          <div
            className="flex-1 flex justify-center md:justify-end w-full md:w-auto relative"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Abstract Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <img
                  src={profileImg}
                  alt="Sainathreddy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-lg">
                    Sainathreddy
                  </p>
                  <p className="text-blue-200/80 text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Float Icons: React */}
              <div className="absolute -top-4 -right-4 p-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float3d">
                <FaReact className="text-3xl text-cyan-400 animate-spin-slow" />
              </div>

              {/* Float Icons: Angular */}
              <div className="absolute top-1/2 -right-8 p-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float3d animation-delay-2000">
                <FaAngular className="text-3xl text-red-500" />
              </div>

              {/* Float Icons: .NET */}
              <div className="absolute top-1/2 -left-8 p-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float3d animation-delay-4000">
                <SiDotnet className="text-3xl text-purple-500" />
              </div>

              {/* Float Icons: Node.js */}
              <div className="absolute top-0 -left-6 p-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float3d animation-delay-1000">
                <FaNodeJs className="text-3xl text-green-500" />
              </div>

              {/* Float Icons: MySQL */}
              <div className="absolute -bottom-4 -right-4 p-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float3d animation-delay-3000">
                <SiMysql className="text-3xl text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors duration-300 group touch-manipulation"
        >
          <span className="text-xs sm:text-sm font-medium hidden sm:block">
            Scroll Down
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center p-1.5 sm:p-2 group-hover:border-white/80 transition-colors">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
