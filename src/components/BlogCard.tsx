import React from "react";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Article } from "@/constants/blogs";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }: { post: Article }) => {
  return (
    <Card
      key={post.id}
      className="order-last border-0 bg-transparent shadow-none px-2 sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
    >
      <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-5">
          <div className="mb-4 md:mb-6">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
              {post.tags?.map((tag: string) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            <Link href={post.url} target="_blank" className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="mt-4 text-muted-foreground md:mt-5">{post.summary}</p>
          <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
            <span className="text-muted-foreground">{post.author}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{post.published}</span>
          </div>
          <div className="mt-6 flex items-center  space-x-2 md:mt-8">
            <Link
              href={post.url}
              target="_blank"
              className="inline-flex items-center justify-center font-semibold hover:underline md:text-base"
            >
              <span>Read more</span>
              <ArrowRight className="ml-2 size-4 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="order-first sm:order-last sm:col-span-5">
          <a href={post.url} target="_blank" className="block">
            <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
              <Image
                height={100}
                width={100}
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-opacity duration-300 fade-in hover:opacity-70"
              />
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
