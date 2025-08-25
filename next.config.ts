// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/voxiflow", // 👈 use repo name if hosting on GitHub Pages
  assetPrefix: "/voxiflow/",

};

module.exports = nextConfig;
