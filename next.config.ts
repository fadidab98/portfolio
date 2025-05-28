/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // Disable if critters error occurs
    modern: true, // Enable modern build for Baseline browsers
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds (optional, adjust as needed)
  },
  images: {
    formats: ['image/avif', 'image/webp', 'image/jpg', 'image/png'], // Support AVIF and WebP
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fadidabboura.com', // Updated to your domain
      },
    ],
    deviceSizes: [150, 200, 250, 300, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
  generateBuildId: async () => {
    return 'build-id'; // Consistent build ID
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
  webpack(config, { isServer }) {
    if (!isServer) {
      // Optimize client-side bundles
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