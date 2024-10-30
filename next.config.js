/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig 
