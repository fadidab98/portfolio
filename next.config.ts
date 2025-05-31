import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true, // Automatically open browser
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    optimizeCss: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
  trailingSlash: false,
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
          redux: {
            test: /[\\/]node_modules[\\/](react-redux|@reduxjs\/toolkit)[\\/]/,
            name: 'redux',
            chunks: 'all',
            priority: 20,
          },
          reduxToolkit: {
            test: /[\\/]node_modules[\\/]@reduxjs\/toolkit[\\/]/,
            name: 'redux-toolkit',
            chunks: 'all',
            priority: 25,
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

module.exports = withBundleAnalyzer(nextConfig);