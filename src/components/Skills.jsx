import { useState } from "react";
import skills from "../data/skills";
import SkillModal from "./SkillModal";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          My Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, groupIndex) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4 border-b border-gray-600 pb-1">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.stack.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 transition-transform duration-300 hover:scale-125"
                      />
                      <p className="text-sm text-gray-300">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </section>
  );
};

export default Skills;
