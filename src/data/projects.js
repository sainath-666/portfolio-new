import { FaFontAwesome, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiGooglefonts,
  SiMongodb,
  SiReact,
  SiReactbootstrap,
  SiReactrouter,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

import chatImg from "../assets/projectsIMG/real-time-chat-application/thumbnail.png";
import chat1 from "../assets/projectsIMG/real-time-chat-application/ss-1.png";
import chat2 from "../assets/projectsIMG/real-time-chat-application/ss-2.png";
import chat3 from "../assets/projectsIMG/real-time-chat-application/ss-3.png";
import chat4 from "../assets/projectsIMG/real-time-chat-application/ss-4.png";
import chat5 from "../assets/projectsIMG/real-time-chat-application/ss-5.png";

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
    image: spotifyImg,
    title: "Melodify - Spotify Clone",
    description:
      "A modern music streaming platform inspired by Spotify, built with React, TypeScript, and SCSS, offering a responsive UI, dynamic theming, and persistent user preferences.",
    stack: [
      { icon: FaReact, name: "React.js", color: "#61DBFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiSass, name: "SCSS", color: "#CD6799" },
      { icon: SiReactbootstrap, name: "React Bootstrap", color: "#563d7c" },
      { icon: SiReact, name: "React Icons", color: "#E91E63" },
    ],
    github: "https://github.com/sainath-666/spotify_clone_1",
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
    image: tempImg,
    title: "Temperature Converter",
    description:
      "A simple, responsive web application that converts temperatures between Celsius, Fahrenheit, and Kelvin with real-time feedback and a clean user interface.",
    stack: [
      { icon: FaHtml5, name: "HTML5", color: "#E44D26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: RiJavascriptFill, name: "JavaScript", color: "#F7DF1E" },
      { icon: FaFontAwesome, name: "Font Awesome", color: "#339AF0" },
      { icon: SiGooglefonts, name: "Google Fonts", color: "#4285F4" },
    ],
    github: "https://github.com/sainath-666/Temperature_Converter",
    live: "https://sainath-666.github.io/Temperature_Converter",
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
      { icon: FaHtml5, name: "HTML", color: "#E44D26" },
      { icon: SiCss3, name: "CSS", color: "#1572B6" },
      { icon: RiJavascriptFill, name: "JavaScript", color: "#F7DF1E" },
    ],
    github: "https://github.com/sainath-666/Calculator_1",
    live: "https://sainath-666.github.io/Calculator_1",
    screenshot: [calculator1],
    highlights: [
      "Performs real-time arithmetic operations (+, -, ×, ÷)",
      "Minimalist and responsive UI design",
      "Built using only HTML, CSS, and JavaScript",
      "User-friendly interface for quick calculations",
      "Offline-capable with zero dependencies",
    ],
  },
  {
    image: weatherImg,
    title: "Weather Forecast Applications",
    description:
      "A collection of beautifully designed and responsive weather applications providing real-time weather information, built using vanilla JavaScript and modern React technologies.",
    stack: [
      { icon: FaHtml5, name: "HTML5", color: "#E44D26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: RiJavascriptFill, name: "JavaScript", color: "#F7DF1E" },
      { icon: FaReact, name: "React.js", color: "#61DBFB" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
      { icon: TbApi, name: "OpenWeatherMap API", color: "#008CBA" },
      { icon: TbApi, name: "WeatherAPI", color: "#00A1DE" },
      { icon: FaFontAwesome, name: "Font Awesome", color: "#339AF0" },
    ],
    github: [
      "https://github.com/sainath-666/Weather_Application_1",
      "https://github.com/sainath-666/Weather_Application_2",
      "https://github.com/sainath-666/Weather_Application_3",
    ],
    live: [
      "https://sainath-666.github.io/Weather_Application_1",
      "https://sainath-666.github.io/Weather_Application_2",
      "https://weather-application-3.vercel.app/",
    ],
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
    image: textUtilsImg,
    title: "TextUtils Application",
    description:
      "A modern React-based text manipulation tool that allows users to transform, analyze, and clean up their text with real-time alerts and a responsive UI.",
    stack: [
      { icon: FaReact, name: "React.js", color: "#61DBFB" },
      { icon: SiReactrouter, name: "React Router", color: "#CA4245" },
      { icon: SiCss3, name: "CSS", color: "#1572B6" },
    ],
    github: "<your-repo-url>",
    live: "#",
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
    image: gamesImg,
    title: "Interactive Puzzle & Logic Games",
    description:
      "A collection of four interactive and responsive games—2048, Snake, Memory Match, and Find My Number—crafted using HTML, CSS, and JavaScript. Each game features modern UI, smooth animations, and engaging gameplay experiences for both desktop and mobile users.",
    stack: [
      { icon: FaHtml5, name: "HTML5", color: "#E44D26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: RiJavascriptFill, name: "JavaScript", color: "#F7DF1E" },
      { icon: FaFontAwesome, name: "Font Awesome", color: "#339AF0" },
      { icon: SiGooglefonts, name: "Google Fonts", color: "#4285F4" },
    ],
    github: [
      "https://github.com/sainath-666/2048_Game",
      "https://github.com/sainath-666/Snake-Game",
      "https://github.com/sainath-666/Memory_Game",
      "https://github.com/sainath-666/FindMyNumber_Game",
    ],
    live: [
      "https://sainath-666.github.io/2048_Game",
      "https://sainath-666.github.io/Snake_Game_1/",
      "https://sainath-666.github.io/Memory_Game/",
      "https://sainath-666.github.io/FindMyNumber_Game/",
    ],
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
    image: carRentalImg,
    title: "Car Rental Web App",
    description:
      "A modern and responsive car rental application built with Next.js, TypeScript, and Tailwind CSS, allowing users to browse, filter, and book cars seamlessly with an elegant user experience.",
    stack: [
      { icon: RiNextjsFill, name: "Next.js", color: "#000000" },
      { icon: BiLogoTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
      { icon: FaReact, name: "React.js", color: "#61DBFB" },
      { icon: TbApi, name: "Context API", color: "#764ABC" },
      { icon: SiVercel, name: "Vercel", color: "#000000" },
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
];

export default projects;
