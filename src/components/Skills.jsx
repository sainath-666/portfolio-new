import { useState, Suspense, lazy } from "react";
import skills from "../data/skills";

const SkillModal = lazy(() => import("./SkillModal"));

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-4">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`relative group ${
                group.title === "Tools & Platforms"
                  ? "md:col-span-2 lg:col-span-3"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100}
            >
              {/* Skill Group Card */}
              <div className="relative h-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

                <div className="relative z-10">
                  {/* Group Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-white">
                      {group.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                  </div>

                  {/* Skills Grid/Row */}
                  <div
                    className={
                      group.title === "Tools & Platforms"
                        ? "flex flex-nowrap gap-4 overflow-x-auto pb-2 pt-1 pr-1 custom-scrollbar"
                        : "grid grid-cols-3 sm:grid-cols-4 gap-4"
                    }
                  >
                    {group.stack.map((skill) => {
                      return (
                        <div
                          key={skill.id || skill.name}
                          className={`group/skill relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:scale-110 ${
                            group.title === "Tools & Platforms"
                              ? "flex-shrink-0"
                              : ""
                          }`}
                          onClick={() => setSelectedSkill(skill)}
                        >
                          {/* Skill Icon Container */}
                          <div className="relative w-12 h-12 rounded-lg bg-white/5 p-2 group-hover/skill:bg-white/10 transition-all duration-300 flex items-center justify-center">
                            <img
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              className="w-full h-full object-contain opacity-100 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300"
                              loading="lazy"
                            />
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 opacity-0 group-hover/skill:opacity-100 rounded-lg transition-opacity duration-300"></div>
                          </div>

                          {/* Skill Name */}
                          <p className="text-xs text-gray-300 group-hover/skill:text-white font-medium text-center transition-colors duration-300">
                            {skill.name}
                          </p>

                          {/* Hover Indicator */}
                          <div
                            className={`absolute w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 animate-pulse ${
                              group.title === "Tools & Platforms"
                                ? "top-0 right-0"
                                : "-top-1 -right-1"
                            }`}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSkill && (
        <Suspense
          fallback={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              Loading skill...
            </div>
          }
        >
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
