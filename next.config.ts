import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve AVIF first (smallest), fall back to WebP — automatic per-browser
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year browser cache for optimized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512],
  },

  // Compress all text responses (JS/CSS/HTML) on Vercel
  compress: true,

  // Strict mode catches client-side issues early
  reactStrictMode: true,
};

export default nextConfig;
