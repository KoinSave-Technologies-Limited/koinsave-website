import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

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
