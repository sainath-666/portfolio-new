import { useEffect, useState, useRef, useCallback } from "react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [show, setShow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const totalSlides = project?.screenshot?.length || 0;

  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  // Trap focus and close on Esc
  useEffect(() => {
    if (!show || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    first?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [show, handleClose]);

  // Autoplay effect
  useEffect(() => {
    setShow(true);

    const interval = setInterval(() => {
      if (!isHovered && totalSlides > 0) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center px-4 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white/10 backdrop-blur-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl overflow-hidden text-white shadow-2xl transform transition-all duration-500 ease-in-out ${
          show ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-4 text-white text-2xl hover:text-red-500 z-10"
        >
          ×
        </button>

        {/* Upper Section: Slideshow */}
        <div
          ref={slideshowRef}
          className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {project.screenshot?.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot of ${project.title} - Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              loading="lazy"
            />
          ))}

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent p-3 sm:p-4 flex flex-col justify-start z-20">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Slide Controls */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl text-white hover:text-blue-400 z-30 p-2 rounded-full hover:bg-white/10 touch-manipulation active:scale-90"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl text-white hover:text-blue-400 z-30 p-2 rounded-full hover:bg-white/10 touch-manipulation active:scale-90"
                aria-label="Next slide"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Lower Section */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
          {/* Left: Highlights */}
          <div className="md:w-1/2">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
              Highlights
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm space-y-1 pl-2">
              {project.highlights?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Right: Stack + Buttons */}
          <div className="md:w-1/2">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
              {project.stack?.map(({ icon: Icon, name }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm bg-gray-700/60 px-2 sm:px-3 py-1 rounded"
                >
                  {Icon && <Icon className="text-base sm:text-lg" />}
                  {name}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium text-center touch-manipulation active:scale-95"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-400 hover:bg-blue-500 hover:text-white px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium text-center touch-manipulation active:scale-95"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
