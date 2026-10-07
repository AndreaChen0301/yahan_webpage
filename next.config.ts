import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/yahan_webpage",
  assetPrefix: "/yahan_webpage/",
};

export default nextConfig;
