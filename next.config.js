/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'w7.pngwing.com',
      port: '',
      pathname: '/pngs/**',
    }],
  },
}

module.exports = nextConfig