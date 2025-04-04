import info from "@/constants/info";
import { generateDynamicEntries, getAllBlogsFetch } from "@/lib/sitemapHelper";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogsFetch();
  const blogSitemap = generateDynamicEntries(blogs, "/blogs");

  return [
    {
      url: `${info.HOST_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...blogSitemap,
  ];
}
