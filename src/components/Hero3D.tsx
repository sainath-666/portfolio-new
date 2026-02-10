import { MdEmail } from "react-icons/md";
import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Hero3D = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-20 pb-12"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl h-full flex items-center">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content Section */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6 w-full order-2 md:order-1"
            variants={itemVariants}
          >
            {/* Greeting Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/90 font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(6,182,212,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Available for Freelancing</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  className="block text-white"
                  style={{
                    textShadow: "0 0 30px rgba(6,182,212,0.4)",
                  }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-cyan-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Sainathreddy
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Role/Title */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90"
                style={{
                  textShadow: "0 0 20px rgba(99,102,241,0.4)",
                }}
              >
                Full Stack Developer
              </motion.p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                {["React.js", "Angular", ".NET Core", "Node.js", "MongoDB"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255,255,255,0.15)",
                        borderColor: "rgba(255,255,255,0.3)",
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto md:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Transforming ideas into impactful digital experiences using modern
              tech stacks. Ready to contribute to teams and deliver high-quality
              software solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-xl font-semibold text-white overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
              variants={itemVariants}
            >
              <span className="text-white/60 text-sm font-medium">
                Connect with me:
              </span>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/sainath-666",
                    label: "GitHub",
                    color: "blue",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/sainath666",
                    label: "LinkedIn",
                    color: "cyan",
                  },
                  {
                    icon: MdEmail,
                    href: "mailto:sai65265@gmail.com",
                    label: "Email",
                    color: "red",
                  },
                  {
                    icon: IoLogoWhatsapp,
                    href: "https://wa.link/oeaxld",
                    label: "WhatsApp",
                    color: "green",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/sainath_666/",
                    label: "Instagram",
                    color: "pink",
                  },
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80"
                    whileHover={{
                      scale: 1.2,
                      rotate: 12,
                      backgroundColor: "rgba(255,255,255,0.2)",
                      boxShadow: `0 0 20px rgba(${color === "blue" ? "59,130,246" : color === "cyan" ? "6,182,212" : color === "red" ? "239,68,68" : color === "green" ? "34,197,94" : "236,72,153"},0.5)`,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section with 3D Tilt */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end items-center w-full md:w-auto order-1 md:order-2"
            variants={itemVariants}
            animate={floatAnimation}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
              gyroscope={true}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
            >
              <div className="relative w-full h-full">
                {/* Glowing Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-500 opacity-25 blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.25, 0.35, 0.25],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Animated Border Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-slate-950"></div>
                </motion.div>

                {/* Profile Image Container */}
                <motion.div
                  className="absolute inset-3 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-white/5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={profileImg}
                    alt="Portrait of Sainathreddy - Full Stack Developer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚛️
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  💻
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2"
            whileHover={{ borderColor: "rgba(255,255,255,0.8)" }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero3D;
