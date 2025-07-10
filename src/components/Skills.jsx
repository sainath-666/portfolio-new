import { useState, Suspense, lazy } from "react";
import skills from "../data/skills";

const SkillModal = lazy(() => import("./SkillModal"));

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-10"
    >
      <div className="max-w-6xl mx-auto" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          My Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, groupIndex) => (
            <div
              key={group.title}
              data-aos={groupIndex % 2 === 0 ? "fade-up" : "zoom-in-up"}
              data-aos-delay={200 + groupIndex * 150}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4 border-b border-gray-600 pb-1">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.stack.map((skill) => {
                  return (
                    <div
                      key={skill.id || skill.name}
                      className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-500 ease-in-out"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 transition-transform duration-300 hover:scale-125"
                        loading="lazy"
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
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading skill...</div>}>
          <SkillModal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Skills;
