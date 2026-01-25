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
      {
        protocol: 'https',
        hostname: 'horizons-cdn.hostinger.com',
        pathname: '/**',
      },
    ],
  },
  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://static.cloudflareinsights.com https://www.googletagmanager.com https://calendly.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com https://mzeisxseqdcxwgyjpajm.supabase.co",
              "connect-src 'self' https://mzeisxseqdcxwgyjpajm.supabase.co https://challenges.cloudflare.com https://cloudflareinsights.com https://calendly.com",
              "frame-src 'self' https://challenges.cloudflare.com https://calendly.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // HSTS - Force HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // COOP - Isolation d'origine
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          // X-Frame-Options - Anti-clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
        ],
      },
    ];
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
