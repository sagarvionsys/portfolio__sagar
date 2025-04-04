import { Card } from "./ui/card";
import Link from "next/link";
import supabase from "@/lib/supabase";
import { Article } from "@/constants/blogs";
import RelatedBlogsSkeleton from "./Skeleton";

const RelatedBlog = async () => {
  const { data: blogs, error } = await supabase
    .from("blog")
    .select("*")
    .range(0, 10);

  if (!blogs || blogs?.length === 0) return <RelatedBlogsSkeleton />;
  if (error) return <div>Error loading blogs links</div>;

  return (
    <Card className="p-6 dark:bg-zinc-900 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Related Blogs
      </h2>
      <ul className="space-y-3">
        {blogs?.length > 0 &&
          blogs.map((post: Article) => (
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
