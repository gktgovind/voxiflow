// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/your-repo-name", // 👈 use repo name if hosting on GitHub Pages
};

module.exports = nextConfig;
