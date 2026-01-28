import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'export',
  basePath: '/mirwr',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
