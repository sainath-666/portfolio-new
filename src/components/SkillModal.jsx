const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      onClick={onClose} // this handles outside clicks
    >
      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl w-11/12 max-w-md text-gray-200 relative transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // prevent modal clicks from bubbling
      >
        <div className="text-3xl mb-4 flex items-center gap-3">
          <span className={`${skill.color} text-4xl`}>{<skill.icon />}</span>
          {skill.name}
        </div>

        <p className="mb-3">{skill.description}</p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Experience:</strong> {skill.experience}
        </p>

        <div className="mb-2">
          <strong>Tools & Libraries:</strong>
          <ul className="list-disc list-inside ml-2">
            {skill.libraries?.map((lib, index) => (
              <li key={index}>{lib}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Projects:</strong>
          <ul className="list-disc list-inside ml-2">
            {skill.projects?.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
