/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.bwbx.io",
      },
    ],
  },
};

module.exports = nextConfig;
