/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/work', destination: '/#experience', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
