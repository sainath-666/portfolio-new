import { IconType } from "react-icons";

export interface Education {
  title: string;
  institution: string;
  duration: string;
  score?: string;
  location: string;
  highlights: string[];
  techStack?: string[]; // Optional for Work Experience
}

export interface WorkExperience extends Education {
  techStack: string[];
}

// For Project Stack Items
export interface StackItem {
  icon: IconType;
  name: string;
  color: string;
}

export interface Project {
  image: string; // URL string
  title: string;
  description: string;
  stack: StackItem[];
  github: string;
  live: string;
  screenshot: string[]; // Array of URL strings
  highlights: string[];
}

export interface SkillItem {
  name: string;
  icon: string; // URL string (svg import)
  description: string;
  experience: string;
  projects: string[];
  libraries: string[];
  quote: string;
}

export interface SkillCategory {
  title: string;
  stack: SkillItem[];
}
