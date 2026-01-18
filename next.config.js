/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mzeisxseqdcxwgyjpajm.supabase.co',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/npm/simple-icons@v13/icons/**',
      },
    ],
  },
  // Compatibilité avec l'alias @
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
  },
};

module.exports = nextConfig;
