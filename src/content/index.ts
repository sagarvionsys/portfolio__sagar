import how_to_initialize_shadcn_in_react from "./how-to-initilize-shadcn-in-react";
import how_to_use_bun_with_hono from "./how-to-use-bun-with-hono";
import how_to_use_redux_in_nextjs_with_typescript from "./how-to-use-redux-in-nextjs-with-typescript";

export interface Article {
  id: string;
  title: string;
  summary: string;
  label: string;
  slug: string;
  content: string;
  author: string;
  published: string;
  image: string;
  tags: string[];
}

const ContentList = [
  // How to Initialize a React Project Using Vite and shadcn/ui
  {
    id: "1",
    title: "How to Initialize a React Project Using Vite and shadcn/ui",
    summary:
      "A comprehensive guide to setting up a modern React project with Vite and shadcn/ui, including step-by-step instructions and best practices.",
    label: "Tutorial",
    slug: "initialize-react-vite-shadcn",
    author: "Sagar Yenkure",
    published: "2024-03-20",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Vite", "shadcn/ui", "TypeScript", "Tutorial"],
    content: how_to_initialize_shadcn_in_react,
  },
  // How to use Redux in Next.js with TypeScript
  {
    id: "2",
    title: "How to use Redux in Next.js with TypeScript",
    summary:
      "Learn how to integrate Redux into a Next.js project using TypeScript. This guide covers setup, folder structure, best practices, and common patterns.",
    label: "Tutorial",
    slug: "how-to-use-redux-in-nextjs-with-typescript",
    author: "Sagar Yenkure",
    published: "2024-03-20",
    image:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "Redux", "TypeScript", "State Management", "Tutorial"],
    content: how_to_use_redux_in_nextjs_with_typescript,
  },
  // How to Use Bun with Hono
  {
    id: "3",
    title: "How to Use Bun with Hono - A Lightweight Web Framework",
    summary:
      "Discover how to build high-performance web APIs using Bun and Hono — a lightweight, ultra-fast web framework for modern JavaScript runtimes.",
    label: "Backend",
    slug: "how-to-use-bun-with-hono",
    author: "Sagar Yenkure",
    published: "2024-04-08",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    tags: ["Bun", "Hono", "Web Framework", "API", "Backend", "JavaScript"],
    content: how_to_use_bun_with_hono,
    honourLog: "Featured on Bun Weekly Highlights",
  },
];

export default ContentList;
