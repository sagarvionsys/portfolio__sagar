import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
