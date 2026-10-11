/** @type {import('next').NextConfig} */

const apexHost = "markajrenting.ch";
const apexOrigin = `https://${apexHost}`;

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${apexHost}` }],
        destination: `${apexOrigin}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
