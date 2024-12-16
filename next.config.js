/** @type {import('next').NextConfig} */
const nextConfig = {
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
    pagesBufferLength: 5,
  }
};

module.exports = nextConfig;