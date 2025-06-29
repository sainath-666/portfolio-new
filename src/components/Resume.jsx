import React from "react";
import { education, internships } from "../data/education";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Resume & Timeline
      </h2>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Central vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-blue-500 rounded-full transform -translate-x-1/2"></div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
            🎓 Education
          </h3>
          {education.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              className="mb-10 relative border-l-2 border-blue-400 pl-6"
            >
              <div className="absolute -left-4 top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
              <h4 className="text-lg font-bold text-blue-200">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 italic">
                {item.institution} — {item.location}
              </p>
              <p className="text-sm">{item.duration}</p>
              <p className="text-sm font-medium text-gray-300 mb-2">
                {item.score}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Internships */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
            ✍️ Internships
          </h3>
          {internships.map((item, index) => (
            <div
              key={index}
              data-aos="fade-left"
              className="mb-10 relative border-r-2 border-blue-400 pr-6 text-right"
            >
              <div className="absolute -right-4 top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
              <h4 className="text-lg font-bold text-blue-200">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 italic">
                {item.institution} — {item.location}
              </p>
              <p className="text-sm">{item.duration}</p>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                {item.highlights.map((point, i) => (
                  <li key={i} className="ml-auto w-fit">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Resume + LinkedIn */}
      <div className="text-center mt-12">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 inline-block"
        >
          📄 Download Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/sainath666"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
        >
          🔗 View LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Resume;
