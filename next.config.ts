import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Next.js to export standard HTML/CSS/JS files (NO BACKEND NEEDED!)
  output: "export",
  
  images: {
    // When exporting purely static files, images cannot be optimized by a Node server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
