/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["@shared/ui"],

  experimental: {
    optimizePackageImports: ["lucide-react", "@clerk/nextjs", "zod"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  compress: true,

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
