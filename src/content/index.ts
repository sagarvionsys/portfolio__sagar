import how_to_initialize_shadcn_in_react from "./how-to-initilize-shadcn-in-react";

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
];

export default ContentList;
