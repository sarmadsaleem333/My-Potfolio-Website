import type { NextConfig } from "next";

// On GitHub Pages a project repo is served from /<repo-name>.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH automatically; locally it's empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
