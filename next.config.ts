import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portofolio-florinbighiu.vercel.app",
      },
      {
        protocol: "https",
        hostname: "claritycristal.com",
      },
    ],
  },
};

export default nextConfig;
