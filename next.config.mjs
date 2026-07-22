/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.markajrenting.ch" }],
        destination: "https://markajrenting.ch/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
