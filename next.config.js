const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  plugins: [new AntdDayjsWebpackPlugin()],
})
