import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // Disable if critters error occurs
  },
  eslint: {
    ignoreDuringBuilds: true, // Optional, adjust as needed
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fadidabboura.com',
      },
    ],
 
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
  generateBuildId: async () => {
    return 'build-id';
  },
  async headers() {
    return [
      {
        source: '/:path*.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  webpack(config: Configuration, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.optimization = config.optimization || {};
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: -10,
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 20,
          },
          reactRedux: {
            test: /[\\/]node_modules[\\/]react-redux[\\/]/,
            name: 'react-redux',
            chunks: 'all',
            priority: 20,
          },
          polyfills: {
            test: /[\\/]node_modules[\\/](core-js|babel-polyfill)[\\/]/,
            name: 'polyfills',
            chunks: 'all',
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
      config.optimization.minimize = true;
      config.optimization.usedExports = true;
    }
    return config;
  },
};

export default nextConfig;