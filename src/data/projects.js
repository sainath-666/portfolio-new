import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si";
import chatImg from "../assets/profile.jpg";

const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "A full-stack chat application with real-time messaging, authentication, and cloud image support.",
    stack: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
    image: chatImg, // optional thumbnail
    github: "https://github.com/sainath-666/chat-app",
    live: "#",
  },
  {
    title: "Hotel Booking Website",
    description:
      "Responsive hotel booking frontend with modern UI, location-based search, and form validations.",
    stack: [FaReact, SiTailwindcss],
    image: chatImg, // optional thumbnail
    github: "https://github.com/sainath-666/Hotel-Website",
    live: "https://sainath-666.github.io/Hotel-Website/",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio, built to showcase skills, projects, education, and job-readiness.",
    stack: [FaReact, SiTailwindcss, SiPostgresql],
    image: chatImg, // optional thumbnail
    github: "https://github.com/sainath-666/Portfolio",
    live: "https://sainath-666.github.io/Portfolio/",
  },
];
export default projects;
