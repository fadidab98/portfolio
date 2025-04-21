const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/:path*.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|json)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path(|contact|website-scan)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom|framer-motion|react-redux|@reduxjs\/toolkit)/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };

    config.optimization.usedExports = true;



    return config;
  },
  target: 'server',
};

export default nextConfig;