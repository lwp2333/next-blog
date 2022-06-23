const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const defaultConfig = {
  swcMinify: true,
  reactStrictMode: false,
  rewrites: async () => {
    return []
  },
}

const pwaConfig = {
  pwa: {
    dest: 'public',
  },
}
module.exports = isProd
  ? withBundleAnalyzer(
      withPWA({
        ...pwaConfig,
        ...defaultConfig,
      })
    )
  : defaultConfig
