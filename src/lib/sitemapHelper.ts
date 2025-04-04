import posts from "@/constants/blogs";
import info from "@/constants/info";
import { MetadataRoute } from "next";

// we will be using this function to fetch data from the API
// const fetchData = async (endpoint: string) => {
//   try {
//     const response = await fetch(`${info.HOST_URL}${endpoint}`);
//     const data = await response?.json();
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching data for dynamic Sitemap:", error);
//     return [];
//   }
// };

// export const getAllBlogsFetch = async () => fetchData("/api/blogs/get");
export const getAllBlogsFetch = async () => posts;

export const generateDynamicEntries = (
  items: any[],
  path: string,
  priority: number = 0.9
): MetadataRoute.Sitemap => {
  const lastModified = new Date();
  return items?.map((item) => ({
    url: `${info.HOST_URL}${path}/${item?.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
};
