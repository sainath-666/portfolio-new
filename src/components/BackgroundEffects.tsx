import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Enhanced Cursor Tracking Effects */}
      {/* Main Cursor Glow */}
      <div
        className="fixed pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(99, 102, 241, 0.15) 30%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      {/* Secondary Cursor Glow */}
      <div
        className="fixed pointer-events-none z-0 transition-all duration-500 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, transparent 60%)`,
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />

      {/* Cursor Spot Light */}
      <div
        className="fixed pointer-events-none z-0 transition-all duration-200 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
          borderRadius: "50%",
        }}
      />

      {/* Animated Background Gradient */}
      <div
        className="fixed inset-0 opacity-40 transition-all duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.4), rgba(99, 102, 241, 0.25) 40%, transparent 70%)`,
        }}
      />

      {/* Additional Gradient Layer */}
      <div
        className="fixed inset-0 opacity-30 transition-all duration-700 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(20, 184, 166, 0.35), transparent 50%)`,
        }}
      />

      {/* Floating Orbs with Enhanced Effects */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none z-0"></div>
      <div className="fixed top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none z-0"></div>
      <div className="fixed -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none z-0"></div>
      <div className="fixed top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000 pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-5000 pointer-events-none z-0"></div>

      {/* Animated Grid Pattern Overlay */}
      <div
        className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 pointer-events-none z-0"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>

      {/* Animated Lines Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent"
          style={{
            top: `${mousePosition.y}%`,
            transform: `translateY(-50%)`,
            transition: "top 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500/25 to-transparent"
          style={{
            left: `${mousePosition.x}%`,
            transform: `translateX(-50%)`,
            transition: "left 0.3s ease-out",
          }}
        ></div>
      </div>
    </>
  );
};

export default BackgroundEffects;




