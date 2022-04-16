const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE ? true : false,
})
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
})
