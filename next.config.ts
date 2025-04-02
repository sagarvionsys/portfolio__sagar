import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "randomuser.me",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
  },
};

export default nextConfig;
