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
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/online-banking",
        destination: "/",
        permanent: true,
      },
      {
        source: "/waitlist",
        destination:
          "https://play.google.com/store/apps/details?id=com.koinsaveng.koinsaveapp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
