const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE ? true : false,
})

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  plugins: [],
})
