import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "br.pinterest.com",
      },

      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      { 
        protocol: "https", 
        hostname: "picsum.photos" 
      },
      
    ],
  },
};

export default nextConfig;
