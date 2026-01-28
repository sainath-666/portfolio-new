import htmlIcon from "../assets/skillsSVG/html.svg";
import cssIcon from "../assets/skillsSVG/css.svg";
import javascriptIcon from "../assets/skillsSVG/javascript.svg";
import typescriptIcon from "../assets/skillsSVG/typescript.svg";
import tailwindIcon from "../assets/skillsSVG/tailwind.svg";
import angularIcon from "../assets/skillsSVG/angular.svg";
import reactIcon from "../assets/skillsSVG/react.svg";
import viteIcon from "../assets/skillsSVG/vite.svg";
import materialuiIcon from "../assets/skillsSVG/materialui.svg";
import reactNativeIcon from "../assets/skillsSVG/reactnative.svg";
import flutterIcon from "../assets/skillsSVG/flutter.svg";
import nodejsIcon from "../assets/skillsSVG/nodejs.svg";
import expressjsIcon from "../assets/skillsSVG/expressjs.svg";
import dotnetIcon from "../assets/skillsSVG/dotnet.svg";
import jwtIcon from "../assets/skillsSVG/jwt.svg";
import postmanIcon from "../assets/skillsSVG/postman.svg";
import mongodbIcon from "../assets/skillsSVG/mongodb.svg";
import postgresqlIcon from "../assets/skillsSVG/postgresql.svg";
import sqlServerIcon from "../assets/skillsSVG/sql-server.svg";
// import mongooseIcon from "../assets/skillsSVG/mongoose.svg";
import mysqlIcon from "../assets/skillsSVG/mysql.svg";
import firebaseIcon from "../assets/skillsSVG/firebase.svg";
import gitIcon from "../assets/skillsSVG/git.svg";
import githubIcon from "../assets/skillsSVG/github.svg";
import figmaIcon from "../assets/skillsSVG/figma.svg";
import visualStudioIcon from "../assets/skillsSVG/visualstudio.svg";
import vscodeIcon from "../assets/skillsSVG/vscode.svg";
import dockerIcon from "../assets/skillsSVG/docker.svg";
import wordpressIcon from "../assets/skillsSVG/wordpress.svg";
import informaticaidmcIcon from "../assets/skillsSVG/informaticaidmc.svg";
import powerappsIcon from "../assets/skillsSVG/powerapps.svg";

const skills = [
  {
    title: "Frontend",
    stack: [
      {
        name: "HTML",
        icon: htmlIcon,
        description:
          "Semantic, accessible markup for structuring content on the web.",
        experience: "2+ years",
        projects: ["Portfolio Website", "Landing Page", "Static Sites"],
        libraries: [
          "Bootstrap",
          "HTML5 Boilerplate",
          "Emmet",
          "W3.CSS",
          "Handlebars.js",
        ],
        quote:
          "HTML is not just code; it's the skeleton of the web. Build it right, and the rest will stand strong.",
      },
      {
        name: "CSS",
        icon: cssIcon,
        description:
          "Stylesheet language used to design, layout, and visually enhance HTML content.",
        experience: "2+ years",
        projects: [
          "Portfolio Website",
          "Hotel Booking Site",
          "Product Landing Page",
        ],
        libraries: [
          "Tailwind CSS",
          "Bootstrap",
          "Sass",
          "Animate.css",
          "Bulma",
        ],
        quote:
          "CSS is where creativity meets structure — it transforms plain code into beautiful experiences.",
      },
      {
        name: "JavaScript",
        icon: javascriptIcon,
        description:
          "Dynamic programming language used to build interactive and functional web applications.",
        experience: "2+ years",
        projects: ["Chat Application", "Weather Application", "Some Games"],
        libraries: ["React", "jQuery", "Axios", "Lodash", "Chart.js"],
        quote:
          "JavaScript adds life to the web — it's the bridge between user actions and meaningful interactions.",
      },
      {
        name: "TypeScript",
        icon: typescriptIcon,
        description:
          "A statically typed superset of JavaScript that enhances code reliability and developer productivity.",
        experience: "1+ years",
        projects: ["Car Rental App", "Spotify Clone", "Portfolio Refactor"],
        libraries: [
          "TypeORM",
          "Zod",
          "ts-node",
          "React with TypeScript",
          "NestJS",
        ],
        quote:
          "TypeScript turns chaos into clarity — strong typing leads to stronger code.",
      },

      {
        name: "React.js",
        icon: reactIcon,
        description:
          "A powerful JavaScript library for building fast, dynamic, and scalable user interfaces using components.",
        experience: "1+ years",
        projects: ["Portfolio Website", "Real-Time Chat App", "Weather Apps"],
        libraries: [
          "React Router",
          "Redux",
          "Axios",
          "Framer Motion",
          "React Query",
        ],
        quote:
          "React isn't just a library — it's a mindset of building UI through composable logic.",
      },

      {
        name: "Angular",
        icon: angularIcon,
        description:
          "A robust TypeScript-based framework for building scalable, enterprise-ready, and maintainable single-page applications.",
        experience: "1+ years",
        projects: [
          "Employee Management System",
          "E-Commerce Platform",
          "Task Tracker",
        ],
        libraries: [
          "RxJS",
          "NgRx",
          "Angular Material",
          "PrimeNG",
          "ngx-bootstrap",
        ],
        quote:
          "Angular brings structure and power — it’s like having a full toolkit for building complex applications out of the box.",
      },
      {
        name: "Tailwind CSS",
        icon: tailwindIcon,
        description:
          "A utility-first CSS framework for building modern, responsive UIs quickly and efficiently.",
        experience: "1+ years",
        projects: [
          "Chat Application",
          "Music Player UI",
          "Car Rental Platform",
        ],
        libraries: [
          "Headless UI",
          "DaisyUI",
          "Heroicons",
          "Twin.Macro",
          "Preline UI",
        ],
        quote:
          "Tailwind CSS is like LEGO for UI — small utilities, endless combinations, rapid results.",
      },
      {
        name: "Vite",
        icon: viteIcon,
        description:
          "A blazing fast frontend build tool and development server optimized for modern JavaScript frameworks like React and Vue.",
        experience: "1+ years",
        projects: ["Weather App", "Chat App", "Portfolio Site"],
        libraries: [
          "@vitejs/plugin-react",
          "vite-plugin-pwa",
          "vite-plugin-svgr",
          "vite-plugin-compression",
          "vite-plugin-env-compatible",
        ],
        quote:
          "Vite is the speed your frontend deserves — instant dev server, lightning-fast builds.",
      },
      {
        name: "Material UI",
        icon: materialuiIcon,
        description:
          "A popular React component library that implements Google’s Material Design for building sleek and consistent UIs.",
        experience: "1+ years",
        projects: ["Spotify Clone", "Car Rental App"],
        libraries: [
          "@mui/material",
          "@mui/icons-material",
          "@emotion/styled",
          "@emotion/react",
          "@mui/lab",
        ],
        quote:
          "Material UI brings design harmony and development speed together — beauty meets consistency in every component.",
      },
      {
        name: "React Native",
        icon: reactNativeIcon,
        description:
          "A powerful framework for building native mobile applications using React and JavaScript, enabling cross-platform development for iOS and Android.",
        experience: "1+ years",
        projects: [
          "Mobile Chat Application",
          "E-Commerce Mobile App",
          "Task Manager App",
        ],
        libraries: [
          "React Navigation",
          "Expo",
          "React Native Paper",
          "Async Storage",
          "React Native Vector Icons",
        ],
        quote:
          "React Native bridges the gap between web and mobile — write once in React, deploy everywhere.",
      },
      {
        name: "Flutter",
        icon: flutterIcon,
        description:
          "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using Dart.",
        experience: "Beginner",
        projects: [
          "Weather App UI",
          "To-Do List Mobile App",
          "Flutter Learning Projects",
        ],
        libraries: ["Provider", "Bloc", "GetX", "Dio", "Flutter Material"],
        quote:
          "Flutter delivers beautiful, fast experiences across all platforms — one codebase, infinite possibilities.",
      },
    ],
  },
  {
    title: "Backend",
    stack: [
      {
        name: "Node.js",
        icon: nodejsIcon,
        description:
          "A runtime environment that allows JavaScript to run on the server, enabling scalable, event-driven backend development.",
        experience: "1+ years",
        projects: [
          "Chat Application Backend",
          "Car Rental App Backend",
          "Authentication System",
        ],
        libraries: ["Express.js", "Nodemon", "Multer", "Socket.io", "Cors"],
        quote:
          "With Node.js, JavaScript breaks free from the browser — it's where speed and scalability meet on the backend.",
      },
      {
        name: "Express.js",
        icon: expressjsIcon,
        description:
          "A minimal and flexible Node.js web application framework that simplifies backend development and API creation.",
        experience: "1+ years",
        projects: [
          "Chat Application Backend",
          "Car Rental App Backend",
          "Authentication System",
        ],
        libraries: [
          "Morgan",
          "Cors",
          "Body-Parser",
          "Express-Validator",
          "JWT",
        ],
        quote:
          "Express.js is the backbone of Node — clean routes, simple logic, powerful APIs.",
      },
      {
        name: ".NET Core",
        icon: dotnetIcon,
        description:
          "A high-performance, cross-platform framework for building modern, scalable, and secure web applications and APIs.",
        experience: "1+ years",
        projects: [
          "Personal Task Manager API",
          "E-Commerce Backend",
          "Authentication System",
        ],
        libraries: [
          "Entity Framework Core",
          "ASP.NET Identity",
          "SignalR",
          "AutoMapper",
          "Serilog",
        ],
        quote:
          ".NET Core gives you both speed and reliability — it’s built for developers who want power with productivity.",
      },
      {
        name: "JWT",
        icon: jwtIcon,
        description:
          "A compact, URL-safe means of securely transmitting information between parties for authentication and authorization.",
        experience: "1+ years",
        projects: ["Chat Application", "Car Rental App", "Weather App"],
        libraries: [
          "jsonwebtoken",
          "bcryptjs",
          "cookie-parser",
          "dotenv",
          "express-jwt",
        ],
        quote:
          "JWT secures your logic — it’s the gatekeeper of modern web authentication.",
      },
      {
        name: "Postman",
        icon: postmanIcon,
        description:
          "A collaboration platform and API client used for developing, testing, and documenting APIs with ease and efficiency.",
        experience: "1+ years",
        projects: ["API Testing", "Chat Application API"],
        libraries: [
          "Newman",
          "Postman Monitors",
          "Mock Servers",
          "Collection Runner",
          "Environment Variables",
        ],
        quote:
          "Postman turns API testing into a seamless experience — where every request tells a story and every response gives clarity.",
      },
    ],
  },

  {
    title: "Database",
    stack: [
      {
        name: "MongoDB",
        icon: mongodbIcon,
        description:
          "A NoSQL document-oriented database designed for high performance, scalability, and flexibility with JSON-like data structures.",
        experience: "1+ years",
        projects: [
          "Chat App Database",
          "Authentication System",
          "Car Rental App",
        ],
        libraries: [
          "Mongoose",
          "MongoDB Atlas",
          "MongoDB Compass",
          "dotenv",
          "mongoose-paginate-v2",
        ],
        quote:
          "MongoDB stores data like you think — flexible, fast, and built for modern applications.",
      },

      {
        name: "PostgreSQL",
        icon: postgresqlIcon,
        description:
          "A powerful, open-source relational database system known for its robustness, advanced features, and SQL compliance.",
        experience: "1+ years",
        projects: ["Doctor Consultation App (DB Design)"],
        libraries: ["pg", "Sequelize", "pgAdmin", "Prisma", "TypeORM"],
        quote:
          "PostgreSQL is where structure meets strength — engineered for integrity, optimized for performance.",
      },
      {
        name: "SQL Server",
        icon: sqlServerIcon,
        description:
          "A powerful relational database management system for handling structured data with advanced querying and transaction support.",
        experience: "1+ years",
        projects: [
          "E-Commerce Database",
          "Employee Management DB",
          "Chat App Storage",
        ],
        libraries: [
          "T-SQL",
          "Stored Procedures",
          "Views",
          "Triggers",
          "Functions",
        ],
        quote:
          "Data is the backbone of every application — SQL Server ensures it’s organized, secure, and lightning-fast to query.",
      },
      // {
      //   name: "Mongoose",
      //   icon: mongooseIcon,
      //   description:
      //     "An elegant MongoDB object modeling library for Node.js that provides schema-based solutions for managing application data.",
      //   experience: "1+ years",
      //   projects: ["Chat App Backend", "Car Rental App Backend"],
      //   libraries: [
      //     "mongoose-paginate-v2",
      //     "mongoose-unique-validator",
      //     "mongoose-timestamp",
      //     "dotenv",
      //     "validator",
      //   ],
      //   quote:
      //     "Mongoose bridges structure and flexibility — bringing order to MongoDB's freedom.",
      // },
      {
        name: "MySQL",
        icon: mysqlIcon,
        description:
          "A widely used open-source relational database management system known for its reliability, speed, and ease of use.",
        experience: "1+ years",
        projects: [
          "Student Management System",
          "User Registration DB",
          "TO-DO List App",
        ],
        libraries: ["mysql2", "Sequelize", "TypeORM", "Prisma", "Workbench"],
        quote:
          "MySQL powers structured data with precision — dependable, scalable, and built for performance.",
      },
      {
        name: "Firebase",
        icon: firebaseIcon,
        description:
          "A comprehensive app development platform by Google offering real-time databases, authentication, hosting, and cloud functions.",
        experience: "1+ years",
        projects: ["LinkedIn Clone"],
        libraries: [
          "Firebase Auth",
          "Cloud Firestore",
          "Firebase Storage",
          "Firebase Hosting",
          "Firebase SDK",
        ],
        quote:
          "Firebase accelerates development — letting you focus on your app while it handles the infrastructure.",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    stack: [
      {
        name: "Git",
        icon: gitIcon,
        description:
          "A distributed version control system that tracks changes in source code, enabling collaboration and code history management.",
        experience: "1+ years",
        projects: [
          "All Personal & Team Projects",
          "Open Source Contributions",
          "Versioned Feature Development",
        ],
        libraries: [
          "Git CLI",
          "Git Bash",
          "GitHub Desktop",
          "VSCode Git Extension",
          "GitKraken",
        ],
        quote:
          "Git is your project's memory — never lose progress, never fear breaking things.",
      },
      {
        name: "GitHub",
        icon: githubIcon,
        description:
          "A cloud-based platform for hosting Git repositories, enabling version control, collaboration, and code sharing at scale.",
        experience: "1+ years",
        projects: [
          "Portfolio Website",
          "Chat App",
          "Open Source Contributions",
        ],
        libraries: [
          "GitHub Actions",
          "GitHub Pages",
          "GitHub CLI",
          "Dependabot",
          "GitHub REST API",
        ],
        quote:
          "GitHub is where code lives, collaborates, and evolves — your project’s global stage.",
      },

      {
        name: "VS Code",
        icon: vscodeIcon,
        description:
          "A lightweight yet powerful source code editor by Microsoft, featuring built-in Git support, extensions, and an intuitive interface.",
        experience: "3+ years",
        projects: [
          "All Development Projects",
          "Web & App Debugging",
          "Real-Time Coding",
        ],
        libraries: [
          "Prettier",
          "ESLint",
          "Live Server",
          "GitLens",
          "Debugger for Chrome",
        ],
        quote:
          "VS Code is more than an editor — it's the developer’s cockpit, streamlined for productivity and precision.",
      },
      {
        name: "VisualStudio",
        icon: visualStudioIcon,
        description:
          "A powerful and feature-rich integrated development environment (IDE) for building, debugging, and deploying applications across multiple platforms.",
        experience: "2+ years",
        projects: [
          "ASP.NET Core APIs",
          "Full-Stack Web Applications",
          "SQL Server Integration",
        ],
        libraries: [
          "NuGet Package Manager",
          "IntelliSense",
          "Live Share",
          "Debugger",
          "Extensions Marketplace",
        ],
        quote:
          "Visual Studio isn’t just an editor — it’s a complete ecosystem that makes development faster, smarter, and more productive.",
      },
      {
        name: "Figma",
        icon: figmaIcon,
        description:
          "A collaborative interface design tool used for UI/UX design, prototyping, and real-time teamwork across the web.",
        experience: "1+ years",
        projects: [
          "Portfolio UI Design",
          "Doctor App Prototype",
          "Landing Page Wireframes",
        ],
        libraries: [
          "Figma Community Plugins",
          "FigJam",
          "Autoflow",
          "Blush",
          "Wireframe Kits",
        ],
        quote:
          "Figma turns ideas into interactive visuals — where creativity meets collaboration in the browser.",
      },
      {
        name: "Docker",
        icon: dockerIcon,
        description:
          "An open platform for developing, shipping, and running applications in isolated containers, ensuring consistency across environments.",
        experience: "1+ year",
        projects: [
          "Containerized Node.js App",
          "MongoDB + Express Stack",
          "Dev Environment Setup",
        ],
        libraries: [
          "Docker CLI",
          "Docker Compose",
          "Docker Hub",
          "Dockerfile",
          "Docker Desktop",
        ],
        quote:
          "Docker brings order to deployment — build once, run anywhere, scale anytime.",
      },
      {
        name: "WordPress",
        icon: wordpressIcon,
        description:
          "An open-source content management system (CMS) that enables users to build and manage websites with ease using themes and plugins.",
        experience: "1+ year",
        projects: ["Business Website", "Personal Blog", "Portfolio CMS"],
        libraries: [
          "Elementor",
          "Yoast SEO",
          "WooCommerce",
          "Contact Form 7",
          "WPBakery Page Builder",
        ],
        quote:
          "WordPress empowers creators — from blogging to e-commerce, it's the engine behind millions of websites.",
      },
      {
        name: "Informatica IDMC",
        icon: informaticaidmcIcon,
        description:
          "The Intelligent Data Management Cloud (IDMC) is a modern, AI-powered data integration and governance platform that supports multi-cloud and hybrid environments.",
        experience: "Beginner",
        projects: [
          "Data Pipeline Demo",
          "Cloud Integration Practice",
          "IDMC Certification Quiz",
        ],
        libraries: [
          "Cloud Data Integration",
          "Data Governance & Catalog",
          "Application Integration",
          "Mass Ingestion",
          "Informatica Cloud Secure Agent",
        ],
        quote:
          "Informatica IDMC turns raw data into intelligent assets — unifying integration, governance, and innovation in one cloud-native platform.",
      },
      {
        name: "PowerApps",
        icon: powerappsIcon,
        description:
          "A low-code development platform by Microsoft that enables users to build custom business apps with ease, connecting data from various sources.",
        experience: "Beginner",
        projects: [
          "Internal Tools Demo",
          "Employee Form App",
          "Workflow Automation",
        ],
        libraries: [
          "Power Automate",
          "Common Data Service (Dataverse)",
          "Power BI",
          "SharePoint Connector",
          "AI Builder",
        ],
        quote:
          "PowerApps empowers anyone to solve problems — bridging business needs with custom app solutions, without writing much code.",
      },
    ],
  },
];

export default skills;
