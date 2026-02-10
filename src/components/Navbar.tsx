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
  const [activeLink, setActiveLink] = useState("#hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Contact for Freelance Pill */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/20 group relative overflow-hidden ring-1 ring-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="group-hover:text-white transition-colors relative z-10">
              Contact for Freelance
            </span>
          </a>

          {/* Desktop Navigation - Pill Shaped Translucent Container */}
          <div className="hidden md:flex items-center p-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl shadow-black/20 ring-1 ring-white/5">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon
                    className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "text-white" : "group-hover:text-cyan-400"
                    }`}
                  />
                  {link.label}
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
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out origin-top ${
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
                    ? "bg-blue-600/10 text-white border border-blue-500/20 shadow-lg shadow-blue-500/10"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isActive ? "bg-blue-500/20" : "bg-white/5"
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
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;
