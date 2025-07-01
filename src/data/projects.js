import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

import chatImg from "../assets/projectsIMG/real-time-chat-application/thumbnail.png"; // Import your project image
import ss1 from "../assets/projectsIMG/real-time-chat-application/screenshot-1.png";
import ss2 from "../assets/projectsIMG/real-time-chat-application/screenshot-2.png";
import ss3 from "../assets/projectsIMG/real-time-chat-application/screenshot-3.png";
import ss4 from "../assets/projectsIMG/real-time-chat-application/screenshot-4.png";
import ss5 from "../assets/projectsIMG/real-time-chat-application/screenshot-5.png";

const projects = [
  {
    image: chatImg,
    title: "Real-Time Chat Application",
    description:
      "A full-stack chat application with real-time messaging, authentication, and cloud image support.",
    stack: [FaReact, FaNode, SiMongodb, SiTailwindcss, SiVite],
    github: "https://github.com/sainath-666/CHATTY_REALTIME_CHATTING",
    live: "https://chatty-realtime-chatting.onrender.com",
    screenshot: [ss1, ss2, ss3, ss4, ss5], // Add your screenshot images here
    about: "### Real-Time Chat Application",
  },
  
];
export default projects;
