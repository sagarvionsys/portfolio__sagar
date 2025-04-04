import info from "@/constants/info";
import { MetadataRoute } from "next";
import supabase from "./supabase";

export const getAllBlogsFetch = async () => {
  try {
    const { data: blogs } = await supabase.from("blog").select("slug");
    return blogs || [];
  } catch (error) {
    console.error("Error fetching data for dynamic Sitemap:", error);
    return [];
  }
};

export const generateDynamicEntries =
  async (): Promise<MetadataRoute.Sitemap> => {
    const blogs = await getAllBlogsFetch();
    const lastModified = new Date();

    return blogs.map((item) => ({
      url: `${info.HOST_URL}/blogs/${item.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    }));
  };
