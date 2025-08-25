/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static export
  images: {
    unoptimized: true,     // required for GitHub Pages
  },
  basePath: "/voxiflow",   // <-- apna repo name daalo
  assetPrefix: "/voxiflow/",
};

export default nextConfig;