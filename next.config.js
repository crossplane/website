/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://docs.crossplane.io/:path*',
        permanent: true,
      },
      {
        source: '/community',
        destination: '/commercial',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: 'https://www.linuxfoundation.org/legal/privacy-policy',
        permanent: true,
      }
    ];
  },
  async rewrites() {
    return [];
  },
  images: {
    domains: ['i.ytimg.com', 'localhost'],
  },
  env: {},
};

module.exports = nextConfig;
