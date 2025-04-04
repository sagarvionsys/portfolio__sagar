import React from "react";
import { Card } from "./ui/card";
import posts from "@/constants/blogs";
import Link from "next/link";

const RelatedBlog = () => {
  return (
    <Card className="p-6 dark:bg-zinc-900 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Related Blogs
      </h2>
      <ul className="space-y-3">
        {posts.slice(0, 4).map((post) => (
          <li key={post.slug} className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RelatedBlog;
