import { useEffect, useState, useRef } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [show, setShow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideshowRef = useRef(null);

  const totalSlides = project.screenshot?.length || 0;

  // Autoplay effect
  useEffect(() => {
    setShow(true);

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center px-4 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white/10 backdrop-blur-lg max-w-4xl w-full rounded-xl overflow-hidden text-white shadow-2xl transform transition-all duration-300 ${
          show ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
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
          className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {project.screenshot?.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-start z-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Slide Controls */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-blue-400 z-30"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-blue-400 z-30"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Lower Section */}
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Left: Highlights */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Highlights
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              {project.highlights?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Right: Stack + Buttons */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.stack?.map(({ icon: Icon, name }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm bg-gray-700/60 px-2 py-1 rounded"
                >
                  <Icon className="text-lg" />
                  {name}
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md font-medium"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md font-medium"
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
