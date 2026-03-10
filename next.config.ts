import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Images are not optimized (works on static hosting like Namecheap)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
