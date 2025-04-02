import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

export interface Project {
  title: string;
  description: string;
  images: string[];
  liveUrl: string;
  category: string;
  githubUrl: string;
  skills: any[];
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "An innovative UI design project.",
    category: "Web Applications",
    images: [
      "https://assets.aceternity.com/pro/hero-sections.png",
      "https://assets.aceternity.com/pro/bento-grids.png",
    ],
    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/your-repo",
    skills: [SiReact, SiNextdotjs, SiTailwindcss],
  },
  {
    title: "Project Two",
    description: "A seamless UX experience for web applications.",
    category: "Mobile Applications",
    images: [
      "https://assets.aceternity.com/templates/startup-1.webp",
      "https://assets.aceternity.com/templates/startup-2.webp",
    ],
    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/your-repo",
    skills: [SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss],
  },
  {
    title: "Project Three",
    description: "A powerful real-time web application.",
    category: "Web Applications",
    images: [
      "https://originui.com/dialog-content.png",
      "https://originui.com/card-content.png",
      "https://originui.com/grid-content.png",
    ],
    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/your-repo",
    skills: [SiReact, SiNodedotjs, SiTailwindcss],
  },
];
