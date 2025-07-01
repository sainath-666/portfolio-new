import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {project.image && (
  <img
    src={project.image}
    alt={project.title}
    className="rounded-lg mb-4 w-full h-60 object-cover"
  />
)}
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Stack Icons */}
            <div className="flex gap-3 text-2xl text-gray-200 mb-4">
              {project.stack.map((Icon, i) => (
                <Icon key={i} />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500/40 hover:shadow-lg text-white px-6 py-2 rounded-md font-medium transition duration-300"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
            className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-blue-400/40 hover:shadow-lg px-6 py-2 rounded-md font-medium transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
