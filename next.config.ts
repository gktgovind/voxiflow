/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static export
  images: {
    unoptimized: true,     // required for GitHub Pages
  },
  basePath: "/your-repo-name",   // <-- apna repo name daalo
  assetPrefix: "/your-repo-name/",
};

export default nextConfig;