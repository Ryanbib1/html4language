/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/html4language" : undefined,
  assetPrefix: isGitHubPages ? "/html4language/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/html4language" : ""
  },
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default nextConfig;
