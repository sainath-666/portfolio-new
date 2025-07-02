import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiReact, SiReactbootstrap, SiSass, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

import chatImg from "../assets/projectsIMG/real-time-chat-application/thumbnail.png";
import chat1 from "../assets/projectsIMG/real-time-chat-application/ss-1.png";
import chat2 from "../assets/projectsIMG/real-time-chat-application/ss-2.png";
import chat3 from "../assets/projectsIMG/real-time-chat-application/ss-3.png";
import chat4 from "../assets/projectsIMG/real-time-chat-application/ss-4.png";
import chat5 from "../assets/projectsIMG/real-time-chat-application/ss-5.png";

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
    screenshot: [chat1, chat2, chat3, chat4, chat5],
    highlights: [
      "Socket.io for real-time communication",
      "JWT-based authentication",
      "Cloudinary image upload integration",
    ],
  },

  {
  image: chatImg,
  title: "Melodify - Spotify Clone",
  description:
    "A modern music streaming platform inspired by Spotify, built with React, TypeScript, and SCSS, offering a responsive UI, dynamic theming, and persistent user preferences.",
  stack: [
    { icon: FaReact, name: "React.js", color: "#61DBFB" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiSass, name: "SCSS", color: "#CD6799" },
    { icon: SiReactbootstrap, name: "React Bootstrap", color: "#563d7c" },
    { icon: SiReact, name: "React Icons", color: "#E91E63" }
  ],
  github: "https://github.com/sainath-666/spotify_clone_1",
  live: "https://spotify-clone-1-sai.vercel.app/",
  screenshot: [chat1, chat2, chat3, chat4, chat5],
  highlights: [
    "Dynamic theming based on album artwork using a custom useBackgroundColor hook",
    "Real-time playback with progress tracking and intelligent animations",
    "Persistent favorites and listening history using localStorage and sessionStorage",
    "Advanced search functionality for tracks, artists, and playlists",
    "Responsive layout optimized for mobile, tablet, and desktop"
  ],
}

  
];

export default projects;
