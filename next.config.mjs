// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp'],
    domains: ['fadilogic.serp24.online'],
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
  webpack(config) {
 
    // Fine-tune splitChunks for better optimization
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
        // Example: Split large libraries into separate chunks
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
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };
    return config;
  },
};

export default nextConfig;