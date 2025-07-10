import React, { useEffect, Suspense, lazy } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <Resume />
      </Suspense>
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
