import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portofolio-florinbighiu.vercel.app",
      },
    ],
  },
};

export default nextConfig;
