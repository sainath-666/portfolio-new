import { useEffect } from "react";
import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";


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
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      {/* <Chatbot /> */}
      <Footer />
    </div>
  );
}
export default App;
