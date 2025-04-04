import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const BlogCardSkeleton = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-26 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Latest Tech Blogs & Insights
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Explore blogs on software development, stay updated with expert
          insights, tutorials, and best practices in the tech world.
        </p>
      </div>

      <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-8 md:gap-y-12 lg:gap-y-16">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card
            key={index}
            className="order-last border-0 bg-transparent shadow-none px-2 sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
          >
            <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
              {/* Text Content */}
              <div className="sm:col-span-5">
                <div className="mb-4 md:mb-6">
                  <div className="flex flex-wrap gap-3">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-5 w-16 rounded-full" />
                    ))}
                  </div>
                </div>

                <Skeleton className="h-6 w-3/4 md:h-8 lg:h-10" />
                <Skeleton className="mt-4 h-4 w-full md:mt-5" />
                <Skeleton className="mt-2 h-4 w-5/6" />
                <Skeleton className="mt-2 h-4 w-4/6" />

                <div className="mt-6 flex items-center space-x-4 md:mt-8">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-2" />
                  <Skeleton className="h-4 w-16" />
                </div>

                <div className="mt-6 md:mt-8">
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>

              {/* Image */}
              <div className="order-first sm:order-last sm:col-span-5">
                <Skeleton className="aspect-[16/9] w-full rounded-lg" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default function RelatedBlogsSkeleton() {
  return (
    <div className="p-6 dark:bg-zinc-900 rounded-2xl shadow-md animate-pulse">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Related Blogs
      </h2>
      <ul className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <li
            key={i}
            className="h-5 bg-gray-300 dark:bg-zinc-700 rounded w-3/4"
          />
        ))}
      </ul>
    </div>
  );
}
