import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

import chatImg from "../assets/projectsIMG/real-time-chat-application/thumbnail.png";
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
    stack: [
      { icon: FaReact, name: "React.js", color: "#61DBFB" },
      { icon: FaNode, name: "Node.js", color: "#68A063" },
      { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
    ],
    github: "https://github.com/sainath-666/CHATTY_REALTIME_CHATTING",
    live: "https://chatty-realtime-chatting.onrender.com",
    screenshot: [ss1, ss2, ss3, ss4, ss5],
    highlights: [
      "Socket.io for real-time communication",
      "JWT-based authentication",
      "Cloudinary image upload integration",
    ],
  },
];

export default projects;
