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

export const posts: Article[] = [
  {
    id: "1",
    title: "How to Initialize a React Project Using Vite and shadcn/ui",
    summary:
      "A comprehensive guide to setting up a modern React project with Vite and shadcn/ui, including step-by-step instructions and best practices.",
    label: "Tutorial",
    slug: "initialize-react-vite-shadcn",
    content: `
# How to Initialize a React Project Using Vite and shadcn/ui

In this comprehensive guide, we'll walk through the process of setting up a modern React project using Vite as our build tool and shadcn/ui for beautiful, accessible components.

## Prerequisites

Before we begin, make sure you have the following installed:
- Node.js (version 14.18+ or 16+)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Step 1: Create a New Vite Project

First, let's create a new Vite project with React and TypeScript support. Open your terminal and run:

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
\`\`\`

## Step 2: Install Dependencies

Install the project dependencies:

\`\`\`bash
npm install
\`\`\`

## Step 3: Add Tailwind CSS

shadcn/ui requires Tailwind CSS. Let's set it up:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Update your \`tailwind.config.js\`:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

Add Tailwind directives to your \`./src/index.css\`:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## Step 4: Install and Configure shadcn/ui

Install shadcn/ui CLI:

\`\`\`bash
npm install -D @shadcn/ui
\`\`\`

Initialize shadcn/ui:

\`\`\`bash
npx shadcn-ui init
\`\`\`

During initialization, you'll be asked several questions. Here are the recommended answers:
- Would you like to use TypeScript? Yes
- Which style would you like to use? Default
- Which color would you like to use as base color? Slate
- Where is your global CSS file? src/index.css
- Do you want to use CSS variables? Yes
- Where is your tailwind.config.js located? tailwind.config.js
- Configure the import alias for components? Yes
- Configure the import alias for utils? Yes

## Step 5: Start Using Components

Now you can start installing and using shadcn/ui components. For example, to add a button:

\`\`\`bash
npx shadcn-ui add button
\`\`\`

Use it in your code:

\`\`\`tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
\`\`\`

## Best Practices

1. **Project Structure**: Keep your components organized in feature-based folders
2. **TypeScript**: Utilize TypeScript for better type safety and developer experience
3. **Component Library**: Install components as needed rather than all at once
4. **Styling**: Use Tailwind's utility classes for custom styling
5. **State Management**: Start with React's built-in useState and useContext before adding external libraries

## Conclusion

You now have a modern React development environment set up with Vite and shadcn/ui! This combination provides an excellent foundation for building fast, beautiful, and maintainable web applications.

Remember to check the official documentation for:
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

Happy coding! 🚀
    `,
    author: "John Doe",
    published: "2024-03-20",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Vite", "shadcn/ui", "TypeScript", "Tutorial"],
  },
  {
    id: "2",
    title: "Building Modern UIs with shadcn/ui Components",
    summary:
      "Learn how to create beautiful and accessible user interfaces using shadcn/ui components and best practices.",
    label: "Design",
    slug: "modern-uis-shadcn",
    content: "Full content here...",
    author: "Jane Smith",
    published: "2024-03-19",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["UI/UX", "React", "shadcn/ui", "Design"],
  },
  {
    id: "3",
    title: "Advanced TypeScript Patterns in React",
    summary:
      "Explore advanced TypeScript patterns and techniques to write more maintainable React applications.",
    label: "Development",
    slug: "advanced-typescript-react",
    content: "Full content here...",
    author: "Alex Johnson",
    published: "2024-03-18",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    tags: ["TypeScript", "React", "Development"],
  },
];

export default posts;
