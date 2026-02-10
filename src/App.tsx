import { useEffect, Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./components/Contact";
import Hero3D from "./components/Hero3D";
import Navbar from "./components/Navbar";
import Scene3D from "./components/3D/Scene3D";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PageTransition from "./components/PageTransition";
import AnimatedBackground from "./components/AnimatedBackground";
import { motion } from "framer-motion";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Skills3D = lazy(() => import("./components/Skills3D"));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
    // Inject Chatbase chatbot script (updated script id)
    const script = document.createElement("script");
    script.innerHTML = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="2VqFdMh6B85BwAUbamypB";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950 text-white font-sans relative overflow-x-hidden w-full max-w-full">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Animated Gradient Background */}
      <AnimatedBackground />

      {/* Gradient Overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/60 pointer-events-none z-1" />

      <div className="relative z-10">
        <Navbar />

        <PageTransition>
          <Hero3D />
        </PageTransition>

        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center py-20"
            >
              <div className="relative">
                <motion.div
                  className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          }
        >
          <About />
          <Skills3D />
          <Projects />
          <Resume />
        </Suspense>

        <Contact />
        <ScrollToTopButton />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
