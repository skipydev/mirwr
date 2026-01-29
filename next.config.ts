import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'export',
  basePath: '/mirwr',
  assetPrefix: '/mirwr/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
