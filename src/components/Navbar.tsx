import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  HiHome,
  HiUser,
  HiCode,
  HiFolder,
  HiDocumentText,
  HiMail,
} from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active link on scroll
      const sections = document.querySelectorAll("section");
      let current = "#hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
          current = "#" + section.getAttribute("id");
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero", icon: HiHome },
    { label: "About", href: "#about", icon: HiUser },
    { label: "Skills", href: "#skills", icon: HiCode },
    { label: "Projects", href: "#projects", icon: HiFolder },
    { label: "Resume", href: "#resume", icon: HiDocumentText },
    { label: "Contact", href: "#contact", icon: HiMail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-cyan-500/10"
          : "bg-slate-950/60 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <a
            href="#"
            className="group relative flex items-center gap-2 touch-manipulation"
          >
            {/* Logo Container */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 overflow-hidden shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg sm:text-xl relative z-10">
                S
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-teal-400 transition-all duration-300">
              Sainath
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg"></div>
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon
                      className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? "text-cyan-400" : "group-hover:text-cyan-400"
                      }`}
                    />
                    {link.label}
                  </span>

                  {/* Bottom Glow Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-gray-300 hover:text-white transition-colors touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Enhanced Animation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white border border-white/10 shadow-lg shadow-cyan-500/10"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isActive ? "bg-cyan-500/20" : "bg-white/5"
                  }`}
                >
                  <Icon
                    className={`text-xl ${
                      isActive ? "text-cyan-400" : "text-gray-400"
                    }`}
                  />
                </div>
                <span className="font-medium">{link.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
                )}
              </a>
            );
          })}
        </div>
        {/* Mobile Menu Footer Decoration */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;
