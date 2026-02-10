import { useState, Suspense, lazy } from "react";
import skills from "../data/skills";
import { SkillItem } from "../types";
import Card3D from "./Card3D";
import { StaggerContainer, StaggerItem } from "./PageTransition";
import { motion } from "framer-motion";

const SkillModal = lazy(() => import("./SkillModal"));

const Skills3D = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const glowColors = ["cyan", "purple", "pink", "blue", "green", "cyan"];

  return (
    <section
      id="skills"
      className="relative min-h-screen text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4"
            style={{
              textShadow: "0 0 30px rgba(6,182,212,0.4)",
            }}
          >
            My Tech Stack
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Technologies and tools I use to build amazing digital experiences
          </motion.p>
        </motion.div>

        <StaggerContainer>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
            {skills.map((group, groupIndex) => (
              <StaggerItem key={group.title}>
                <Card3D
                  className={`w-full ${
                    group.title === "Tools & Platforms"
                      ? "md:col-span-2 lg:col-span-3"
                      : ""
                  }`}
                  delay={groupIndex * 0.1}
                  glowColor={glowColors[groupIndex % glowColors.length]}
                >
                  {/* Group Header */}
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
                    <motion.div
                      className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white truncate">
                      {group.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent min-w-[20px]"></div>
                  </div>

                  {/* Skills Grid/Row */}
                  <div
                    className={
                      group.title === "Tools & Platforms"
                        ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-nowrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 w-full lg:overflow-x-auto lg:custom-scrollbar lg:pb-2 lg:pt-1 lg:pr-1"
                        : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 w-full"
                    }
                  >
                    {group.stack.map((skill, skillIndex) => {
                      return (
                        <motion.div
                          key={skill.name}
                          className={`group/skill relative flex flex-col items-center justify-center gap-1 sm:gap-2 p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg md:rounded-xl bg-white/5 border border-white/10 transition-all duration-300 cursor-pointer touch-manipulation w-full max-w-full ${
                            group.title === "Tools & Platforms"
                              ? "lg:flex-shrink-0 lg:w-auto lg:min-w-[100px]"
                              : ""
                          }`}
                          onClick={() => setSelectedSkill(skill)}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderColor: "rgba(6,182,212,0.5)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Skill Icon Container */}
                          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-white/5 p-1 sm:p-1.5 md:p-2 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                            <motion.img
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                            {/* Hover Glow */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 rounded-lg"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>

                          {/* Skill Name */}
                          <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-300 group-hover/skill:text-white font-medium text-center transition-colors duration-300 leading-tight px-0.5 break-words max-w-full">
                            {skill.name}
                          </p>

                          {/* Hover Indicator */}
                          <motion.div
                            className={`absolute w-3 h-3 bg-cyan-400 rounded-full ${
                              group.title === "Tools & Platforms"
                                ? "top-0 right-0"
                                : "-top-1 -right-1"
                            }`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </Card3D>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Modal */}
      {selectedSkill && (
        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center p-8"
            >
              <div className="relative">
                <motion.div
                  className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear" as const,
                  }}
                />
              </div>
            </motion.div>
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

export default Skills3D;
