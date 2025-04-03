"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import posts from "@/constants/blogs";
import { Calendar, Check, Copy, User } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
import Image from "next/image";

// Fix TypeScript Issue by Defining Props for `code`
interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const BlogPage = ({ slug }: { slug: string }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const article = posts.find((item) => item.slug === slug);
  if (!article)
    return (
      <section className="max-w-7xl mx-auto py-30 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Blog Not Found
        </h1>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 block">
          Go back to Blogs
        </Link>
      </section>
    );

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-4 lg:px-0">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          priority
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 backdrop-blur-sm flex flex-col justify-end p-8 text-white">
          <Badge className="bg-white/20 text-white text-sm px-3 py-1 self-start">
            {article.label}
          </Badge>
          <h1 className="text-4xl font-extrabold mt-4 leading-snug text-white">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-300 text-sm mt-2">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-white" />
              <span className="text-white">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-white" />
              <span className="text-white">
                {new Date(article.published).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <Card className="p-8 md:p-10 prose prose-lg dark:bg-zinc-900 max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mt-6">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-6">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold mt-6">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="mt-4 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc ml-6 space-y-2">{children}</ul>
            ),
            code({ inline, className, children, ...props }: CodeProps) {
              const code = String(children).trim();
              if (inline) {
                return (
                  <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 text-sm rounded-md">
                    {children}
                  </code>
                );
              } else {
                return (
                  <div className="relative rounded-lg overflow-hidden shadow-md bg-black mt-4">
                    <div className="absolute top-3 right-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopyCode(code)}
                        className="hover:bg-gray-800 rounded-md p-2"
                      >
                        {copiedCode === code ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <Copy className="h-5 w-5 text-gray-400" />
                        )}
                      </Button>
                    </div>
                    <SyntaxHighlighter
                      language="tsx"
                      style={dracula}
                      customStyle={{
                        backgroundColor: "#0D0D0D",
                        borderRadius: "8px",
                        padding: "20px",
                        fontSize: "14px",
                      }}
                      PreTag="div"
                    >
                      {code}
                    </SyntaxHighlighter>
                  </div>
                );
              }
            },
          }}
        >
          {article.content}
        </ReactMarkdown>
      </Card>

      {/* Navigation */}
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="text-lg font-semibold text-blue-600 hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    </article>
  );
};

export default BlogPage;
