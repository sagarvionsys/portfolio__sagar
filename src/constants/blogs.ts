export interface Article {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags: string[];
}

const posts: Article[] = [
  {
    id: "post-1",
    title: "Building Modern UIs: A Deep Dive into Shadcn and React Components",
    summary:
      "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
    label: "Web Design",
    author: "Sarah Chen",
    published: "15 Feb 2024",
    url: "https://shadcnblocks.com",
    image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    tags: ["Web Design", "UI Development"],
  },
  {
    id: "post-2",
    title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
    summary:
      "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
    label: "Web Design",
    author: "Michael Park",
    published: "22 Feb 2024",
    url: "https://shadcnblocks.com",
    image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    tags: ["Web Design", "CSS"],
  },
];

export default posts;
