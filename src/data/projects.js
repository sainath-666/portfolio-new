import {
  SiCloudinary,
  SiCss3,
  SiDaisyui,
  SiExpress,
  SiFontawesome,
  SiGooglefonts,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactbootstrap,
  SiReactrouter,
  SiRender,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import chatImg from "../assets/projectsIMG/real-time-chat-application/thumbnail.png";
import chat1 from "../assets/projectsIMG/real-time-chat-application/ss-1.png";
import chat2 from "../assets/projectsIMG/real-time-chat-application/ss-2.png";
import chat3 from "../assets/projectsIMG/real-time-chat-application/ss-3.png";
import chat4 from "../assets/projectsIMG/real-time-chat-application/ss-4.png";
import chat5 from "../assets/projectsIMG/real-time-chat-application/ss-5.png";

import geminiImg from "../assets/projectsIMG/gemini/thumbnail.png";
import gemini1 from "../assets/projectsIMG/gemini/ss-1.png";
import gemini2 from "../assets/projectsIMG/gemini/ss-2.png";
import gemini3 from "../assets/projectsIMG/gemini/ss-3.png";

import spotifyImg from "../assets/projectsIMG/melodify/thumbnail.png";
import spotify1 from "../assets/projectsIMG/melodify/ss-1.png";
import spotify2 from "../assets/projectsIMG/melodify/ss-2.png";
import spotify3 from "../assets/projectsIMG/melodify/ss-3.png";
import spotify4 from "../assets/projectsIMG/melodify/ss-4.png";
import spotify5 from "../assets/projectsIMG/melodify/ss-5.png";

import tempImg from "../assets/projectsIMG/temperature/thumbnail.png";
import temp1 from "../assets/projectsIMG/temperature/ss-1.png";
import temp2 from "../assets/projectsIMG/temperature/ss-2.png";
import temp3 from "../assets/projectsIMG/temperature/ss-3.png";
import temp4 from "../assets/projectsIMG/temperature/ss-4.png";

import calculatorImg from "../assets/projectsIMG/calculator/thumbnail.png";
import calculator1 from "../assets/projectsIMG/calculator/ss-1.png";

import weatherImg from "../assets/projectsIMG/weather/thumbnail.png";
import weather1 from "../assets/projectsIMG/weather/ss-1.png";
import weather2 from "../assets/projectsIMG/weather/ss-2.png";
import weather3 from "../assets/projectsIMG/weather/ss-3.png";
import weather4 from "../assets/projectsIMG/weather/ss-4.png";
import weather5 from "../assets/projectsIMG/weather/ss-5.png";

import textUtilsImg from "../assets/projectsIMG/textutils/thumbnail.png";
import text1 from "../assets/projectsIMG/textutils/ss-1.png";
import text2 from "../assets/projectsIMG/textutils/ss-2.png";
import text3 from "../assets/projectsIMG/textutils/ss-3.png";

import gamesImg from "../assets/projectsIMG/games/thumbnail.png";
import game1 from "../assets/projectsIMG/games/ss-1.png";
import game2 from "../assets/projectsIMG/games/ss-2.png";
import game3 from "../assets/projectsIMG/games/ss-3.png";
import game4 from "../assets/projectsIMG/games/ss-4.png";
import game5 from "../assets/projectsIMG/games/ss-5.png";
import game6 from "../assets/projectsIMG/games/ss-6.png";
import game7 from "../assets/projectsIMG/games/ss-7.png";
import game8 from "../assets/projectsIMG/games/ss-8.png";
import game9 from "../assets/projectsIMG/games/ss-9.png";
import game10 from "../assets/projectsIMG/games/ss-10.png";

import carRentalImg from "../assets/projectsIMG/car-rental/thumbnail.png";
import car1 from "../assets/projectsIMG/car-rental/ss-1.png";
import car2 from "../assets/projectsIMG/car-rental/ss-2.png";
import car3 from "../assets/projectsIMG/car-rental/ss-3.png";
import car4 from "../assets/projectsIMG/car-rental/ss-4.png";
import car5 from "../assets/projectsIMG/car-rental/ss-5.png";
import car6 from "../assets/projectsIMG/car-rental/ss-6.png";

const projects = [
  {
    image: chatImg,
    title: "Chatty - Real-time Chat Application",
    description:
      "A modern full-stack real-time chat application built with the MERN stack and Socket.io, featuring live messaging, authentication, image sharing, and responsive UI with dark mode support.",
    stack: [
      { icon: SiReact, name: "React.js", color: "#61DBFB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#52a144" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#00bcff" },
      { icon: SiMongodb, name: "MongoDB", color: "#00ed64" },
      { icon: SiExpress, name: "Express.js", color: "#ffffff" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
      { icon: SiDaisyui, name: "Daisy UI", color: "#ffcc2f" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#d53afe" },
      { icon: SiSocketdotio, name: "Socket.io (Client)", color: "#ffffff" },
      { icon: SiCloudinary, name: "Cloudinary", color: "#3448c5 " },
      { icon: SiRender, name: "Render", color: "#ffffff" },
    ],
    github: "https://github.com/sainath-666/CHATTY_REALTIME_CHATTING",
    live: "https://chatty-realtime-chatting.onrender.com",
    screenshot: [chat1, chat2, chat3, chat4, chat5],
    highlights: [
      "Real-time messaging system powered by Socket.io with online user indicators",
      "JWT-based authentication for secure login and registration",
      "Image upload and sharing functionality via Cloudinary",
      "Light/Dark theme toggle and fully responsive layout",
      "Built with Vite, Zustand, TailwindCSS, and a clean modern UI using Daisy UI",
      "Scalable backend with MongoDB, Express, and modular code architecture",
    ],
  },

  {
    image: geminiImg,
    title: "Gemini Clone - Google AI Chat Interface",
    description:
      "A modern, responsive AI-powered chat application that replicates the Google Gemini interface, built with React, Vite, and integrated with the Gemini 2.5 Pro model for intelligent conversations.",
    stack: [
      { icon: SiReact, name: "React.js", color: "#61DBFB" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#00bcff" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiGooglegemini, name: "JavaScript", color: "#4b98fd" },
      { icon: SiVercel, name: "Vercel", color: "#ffffff" },
    ],
    github: "https://github.com/sainath-666/Gemini_Clone",
    live: "https://gemini-clone-sainath.vercel.app/",
    screenshot: [gemini1, gemini2, gemini3],
    highlights: [
      "Google Gemini 2.5 Pro model integrated for intelligent AI responses",
      "Modern Google-inspired chat interface with sleek UI/UX",
      "Real-time messaging experience with loading states and error handling",
      "Persistent chat history stored in state with easy navigation",
      "Responsive design for desktop and mobile with accessibility features",
      "Built-in safety settings and content moderation",
      "Optimized for performance using Vite and lazy-loaded components",
      "API key protected using environment variables for security",
      "Ready for deployment on Netlify, Vercel, or any static host",
    ],
  },
  {
    image: carRentalImg,
    title: "Car Rental Web App",
    description:
      "A modern and responsive car rental application built with Next.js, TypeScript, and Tailwind CSS, allowing users to browse, filter, and book cars seamlessly with an elegant user experience.",
    stack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
      { icon: SiReact, name: "React.js", color: "#61DBFB" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#00bcff" },
      { icon: TbApi, name: "Context API", color: "#008cba" },
      { icon: SiVercel, name: "Vercel", color: "#ffffff" },
    ],
    github: "https://github.com/sainath-666/car-rental",
    live: "https://car-rental-sai.vercel.app/",
    screenshot: [car1, car2, car3, car4, car5, car6],
    highlights: [
      "Browse a variety of cars with images and specifications",
      "Filter by brand, category, and price for personalized results",
      "Interactive booking modal with toast notifications for confirmation",
      "View and manage booking history",
      "Responsive layout designed for both desktop and mobile",
      "Built with modern technologies including Next.js App Router and Tailwind CSS",
    ],
  },

  {
    image: spotifyImg,
    title: "Melodify - Spotify Clone",
    description:
      "A modern music streaming platform inspired by Spotify, built with React, TypeScript, and SCSS, offering a responsive UI, dynamic theming, and persistent user preferences.",
    stack: [
      { icon: SiReact, name: "React.js", color: "#61DBFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
      { icon: SiSass, name: "SCSS", color: "#cf649a" },
      { icon: SiReactbootstrap, name: "React Bootstrap", color: "#41e0fd" },
      { icon: SiReact, name: "React Icons", color: "#e91e63" },
      { icon: SiVercel, name: "Vercel", color: "#ffffff" },
    ],
    github: "https://github.com/sainath-666/Spotify_Clone_1",
    live: "https://spotify-clone-1-sai.vercel.app/",
    screenshot: [spotify1, spotify2, spotify3, spotify4, spotify5],
    highlights: [
      "Dynamic theming based on album artwork using a custom useBackgroundColor hook",
      "Real-time playback with progress tracking and intelligent animations",
      "Persistent favorites and listening history using localStorage and sessionStorage",
      "Advanced search functionality for tracks, artists, and playlists",
      "Responsive layout optimized for mobile, tablet, and desktop",
    ],
  },

  {
    image: weatherImg,
    title: "Weather Forecast Applications",
    description:
      "A collection of beautifully designed and responsive weather applications providing real-time weather information, built using vanilla JavaScript and modern React technologies.",
    stack: [
      { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { icon: SiReact, name: "React.js", color: "#61dbfb" },
      { icon: SiHtml5, name: "HTML5", color: "#f16524" },
      { icon: SiCss3, name: "CSS3", color: "#35a8db" },
      { icon: SiVite, name: "Vite", color: "#646cff" },
      { icon: TbApi, name: "OpenWeatherMap API", color: "#008cba" },
      { icon: SiFontawesome, name: "Font Awesome", color: "#538dd7" },
    ],
    github: "https://github.com/sainath-666/Weather_Application_2",
    live: "https://sainath-666.github.io/Weather_Application_2/",
    screenshot: [weather1, weather2, weather3, weather4, weather5],
    highlights: [
      "Real-time weather data using OpenWeatherMap and WeatherAPI integrations",
      "Geolocation support to fetch weather for the user's current location",
      "Dynamic backgrounds and icons based on live weather conditions",
      "Fully responsive UIs with support for mobile, tablet, and desktop",
      "Built using both vanilla JS and modern React + Vite setup for flexibility",
    ],
  },

  {
    image: gamesImg,
    title: "Interactive Puzzle & Logic Games",
    description:
      "A collection of four interactive and responsive games—2048, Snake, Memory Match, and Find My Number—crafted using HTML, CSS, and JavaScript. Each game features modern UI, smooth animations, and engaging gameplay experiences for both desktop and mobile users.",
    stack: [
      { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { icon: SiHtml5, name: "HTML5", color: "#f16524" },
      { icon: SiCss3, name: "CSS3", color: "#35a8db" },
      { icon: SiFontawesome, name: "Font Awesome", color: "#538dd7" },
      { icon: SiGooglefonts, name: "Google Fonts", color: "#fbbc04" },
    ],
    github: "https://sainath-666.github.io/Games/",
    live: "https://sainath-666.github.io/Games/",
    screenshot: [
      game1,
      game2,
      game3,
      game4,
      game5,
      game6,
      game7,
      game8,
      game9,
      game10,
    ],
    highlights: [
      "🎮 **2048 Game**: Addictive tile-merging puzzle with touch and keyboard support, sleek animations, and score tracking.",
      "🐍 **Snake Game**: Classic arcade snake with keyboard and mobile touch controls, high score tracking, and dynamic difficulty.",
      "🧠 **Memory Game**: Match emoji card pairs with a timer and move counter, responsive UI, and celebratory animations.",
      "🔍 **Find My Number**: Binary logic-based number guessing game with a step-by-step table interaction and intuitive results display.",
      "All games are **mobile-friendly**, include modern UI design, and offer **responsive performance across all screen sizes**.",
    ],
  },

  {
    image: textUtilsImg,
    title: "TextUtils Application",
    description:
      "A modern React-based text manipulation tool that allows users to transform, analyze, and clean up their text with real-time alerts and a responsive UI.",
    stack: [
      { icon: SiReact, name: "React.js", color: "#61dbfb" },
      { icon: SiReactrouter, name: "React Router", color: "#f44250" },
      { icon: SiCss3, name: "CSS3", color: "#35a8db" },
    ],
    github: "https://github.com/sainath-666/Textutils",
    live: "https://textutils-sainathreddy666.vercel.app/",
    screenshot: [text1, text2, text3],
    highlights: [
      "Convert text to uppercase and lowercase with one click",
      "Remove extra spaces and copy cleaned text to clipboard",
      "Real-time word and character count analytics",
      "Toggle between light and dark mode for better accessibility",
      "Responsive design compatible with all device sizes",
    ],
  },

  {
    image: tempImg,
    title: "Temperature Converter",
    description:
      "A simple, responsive web application that converts temperatures between Celsius, Fahrenheit, and Kelvin with real-time feedback and a clean user interface.",
    stack: [
      { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { icon: SiHtml5, name: "HTML5", color: "#f16524" },
      { icon: SiCss3, name: "CSS3", color: "#35a8db" },
      { icon: SiFontawesome, name: "Font Awesome", color: "#538dd7" },
      { icon: SiGooglefonts, name: "Google Fonts", color: "#fbbc04" },
    ],
    github: "https://github.com/sainath-666/Temperature_Converter",
    live: "https://sainath-666.github.io/Temperature_Converter/",
    screenshot: [temp1, temp2, temp3, temp4],
    highlights: [
      "Converts between Celsius, Fahrenheit, and Kelvin units",
      "Fully responsive design across all devices",
      "Real-time conversion updates with user-friendly feedback",
      "Minimalist and clean UI for ease of use",
      "Uses Font Awesome and Google Fonts for modern aesthetics",
    ],
  },
  {
    image: calculatorImg,
    title: "Calculator",
    description:
      "A basic calculator web application that performs arithmetic operations such as addition, subtraction, multiplication, and division using vanilla JavaScript.",
    stack: [
      { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { icon: SiHtml5, name: "HTML5", color: "#f16524" },
      { icon: SiCss3, name: "CSS3", color: "#35a8db" },
    ],
    github: "https://github.com/sainath-666/Calculator_1",
    live: "https://sainath-666.github.io/Calculator_1/",
    screenshot: [calculator1],
    highlights: [
      "Performs real-time arithmetic operations (+, -, ×, ÷)",
      "Minimalist and responsive UI design",
      "Built using only HTML, CSS, and JavaScript",
      "User-friendly interface for quick calculations",
      "Offline-capable with zero dependencies",
    ],
  },
];

export default projects;
