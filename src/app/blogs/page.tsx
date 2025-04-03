import React from "react";
import BlogCard from "@/components/BlogCard";
import posts, { Article } from "@/constants/blogs";

const page = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Latest Tech Blogs & Insights
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Explore blogs on software development, Stay updated with expert
          insights, tutorials, and best practices in the tech world.
        </p>
      </div>
      <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-8 md:gap-y-12 lg:gap-y-16">
        {posts.map((post: Article) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default page;
