/** @type {import('next').NextConfig} */

const apexHost = "markajrenting.ch";
const apexOrigin = `https://${apexHost}`;

const nextConfig = {
  async redirects() {
    return [
      /* Jura bernois fusionné dans /zones/jura (plan zones de Bi). */
      { source: "/zones/berne", destination: "/zones/jura", statusCode: 301 },
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
