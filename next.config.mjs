/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL;
const repoName = "Nature-s-Nest"; // GitHub repo name for project pages

const nextConfig = {
  // Generate a fully static site in the `out` directory (only for GitHub Pages)
  ...(isVercel ? {} : { output: "export" }),

  // Ensure routes like /about resolve to /about/index.html on static hosts
  trailingSlash: true,

  // Serve assets from the repo subpath when deployed to GitHub Pages (not on Vercel)
  basePath: !isVercel && isProd ? `/${repoName}` : "",
  assetPrefix: !isVercel && isProd ? `/${repoName}/` : "",

  // Disable image optimization for static export
  images: { unoptimized: true },
};

export default nextConfig;
