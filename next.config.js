/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lordicon.com',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: ['sharp'],
  distDir: '.next',
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 2,
  },
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;