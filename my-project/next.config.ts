import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: '/chunsang-homepage',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
