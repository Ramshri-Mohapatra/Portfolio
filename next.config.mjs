/** @type {import('next').NextConfig} */

// For a GitHub *project* page (username.github.io/<repo>) set this to "/<repo>".
// For a custom domain served at the root, leave it empty — and update `origin`
// in lib/content.ts to match, or the metadata will lie about where it lives.
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
