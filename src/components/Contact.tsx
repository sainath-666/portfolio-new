import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setShowToast(false);

    try {
      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/xzzgopny", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setLoading(false);

      if (response.ok) {
        form.reset();
        setToastMsg("Message sent successfully!");
        setIsError(false);
      } else {
        const data = await response.json();
        setToastMsg(data.error || "Failed to send message. Please try again.");
        setIsError(true);
      }

      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch (error) {
      setLoading(false);
      setToastMsg("Network error. Please try again later.");
      setIsError(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      console.error("Form submission error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          data-aos="fade-down"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-3 sm:mb-4">
            Contact Me
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Let's connect! Send me a message or reach out through social
            platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="relative group" data-aos="fade-right">
            <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="group/input">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      autoComplete="off"
                      className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <div className="group/input">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      autoComplete="off"
                      className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <div className="group/input">
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Your Message"
                      className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm sm:text-base text-white placeholder-gray-400 resize-none focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group/btn relative w-full px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div
            className="space-y-4 sm:space-y-6 md:space-y-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Contact Info Card */}
            <div className="relative group">
              <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      Get in Touch
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href="mailto:sai65265@gmail.com"
                      className="group/item flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 rounded-lg bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center group-hover/item:bg-cyan-400/30 transition-all duration-300">
                        <MdEmail className="text-cyan-400 text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 mb-1">Email</p>
                        <p className="text-white font-medium">
                          sai65265@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.link/oeaxld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 rounded-lg bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center group-hover/item:bg-indigo-400/30 transition-all duration-300">
                        <IoLogoWhatsapp className="text-indigo-400 text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 mb-1">WhatsApp</p>
                        <p className="text-white font-medium">Let's chat!</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="relative group">
              <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-indigo-400/50 transition-all duration-300 overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      Social Links
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <a
                      href="https://github.com/sainath-666"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="group/social relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover/social:bg-cyan-400/20 transition-all duration-300">
                        <FaGithub className="text-gray-300 group-hover/social:text-cyan-400 text-2xl transition-colors duration-300" />
                      </div>
                      <span className="text-xs text-gray-300 group-hover/social:text-white font-medium transition-colors duration-300">
                        GitHub
                      </span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/sainath666"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="group/social relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover/social:bg-blue-400/20 transition-all duration-300">
                        <FaLinkedin className="text-gray-300 group-hover/social:text-blue-400 text-2xl transition-colors duration-300" />
                      </div>
                      <span className="text-xs text-gray-300 group-hover/social:text-white font-medium transition-colors duration-300">
                        LinkedIn
                      </span>
                    </a>

                    <a
                      href="https://www.instagram.com/sainath_666/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="group/social relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover/social:bg-indigo-400/20 transition-all duration-300">
                        <FaInstagram className="text-gray-300 group-hover/social:text-indigo-400 text-2xl transition-colors duration-300" />
                      </div>
                      <span className="text-xs text-gray-300 group-hover/social:text-white font-medium transition-colors duration-300">
                        Instagram
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">Sainath Reddy</span>. All
              rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with <span className="text-cyan-400">React.js</span> &{" "}
              <span className="text-cyan-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-[90vw] sm:max-w-md ${
            isError
              ? "bg-red-500/90 backdrop-blur-md border border-red-400/50"
              : "bg-cyan-500/90 backdrop-blur-md border border-cyan-400/50"
          } text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-2xl animate-fade-in mx-4`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            {isError ? (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="font-medium text-sm sm:text-base">{toastMsg}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;




