/** @type {import('next').NextConfig} */

// For a custom domain (ramshri.dev) leave NEXT_PUBLIC_BASE_PATH empty.
// For a GitHub *project* page (username.github.io/<repo>) set it to "/<repo>".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // fully static HTML for GitHub Pages
  trailingSlash: true, // emit /section/index.html so Pages routing is happy
  images: {
    unoptimized: true, // no Image Optimization server on Pages
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
