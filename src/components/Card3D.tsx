import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export default function Card3D({
  children,
  className = "",
  delay = 0,
  glowColor = "cyan",
}: Card3DProps) {
  const glowColors = {
    cyan: "rgba(6,182,212,0.3)",
    purple: "rgba(139,92,246,0.3)",
    pink: "rgba(236,72,153,0.3)",
    blue: "rgba(59,130,246,0.3)",
    green: "rgba(34,197,94,0.3)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
        gyroscope={true}
      >
        <motion.div
          className={`relative group ${className}`}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${glowColors[glowColor as keyof typeof glowColors]}, transparent)`,
            }}
          />

          {/* Card content */}
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
            {children}
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
}
