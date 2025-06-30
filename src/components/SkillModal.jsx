const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl w-11/12 max-w-md text-gray-200 relative transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white hover:text-red-500 text-2xl"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Title */}
        <div className="text-3xl mb-4 flex items-center gap-3 font-semibold border-b pb-2 border-gray-600">
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-10 h-10"
          />{" "}
          {skill.name}
        </div>

        {/* Description */}
        <p className="mb-3">{skill.description}</p>

        {/* Experience */}
        <p className="text-sm text-gray-400 mb-2">
          <strong>Experience:</strong> {skill.experience}
        </p>

        {/* Libraries */}
        <div className="mb-2">
          <strong>Tools & Libraries:</strong>
          <ul className="list-disc list-inside ml-2">
            {skill.libraries?.map((lib, index) => (
              <li key={index}>{lib}</li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-4">
          <strong>Projects:</strong>
          <ul className="list-disc list-inside ml-2">
            {skill.projects?.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        {skill.quote && (
          <blockquote className="text-sm italic text-blue-300 border-l-4 border-blue-500 pl-4">
            “{skill.quote}”
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default SkillModal;
