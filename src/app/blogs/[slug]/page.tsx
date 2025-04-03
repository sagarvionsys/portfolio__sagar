import { Metadata } from "next";
import BlogPage from "./BlogPage";
import posts from "@/constants/blogs";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const article = posts.find((item) => item.slug === params.slug);
  if (!article) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  return {
    title: article.title,
    description: article.content.slice(0, 150) + "...",
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 150) + "...",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
};

export default function BlogPageWrapper({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="py-24">
      <BlogPage slug={params.slug} />;
    </section>
  );
}
