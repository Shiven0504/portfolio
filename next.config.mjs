import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config) => {
  config.watchOptions = {
    ...(config.watchOptions || {}),
    ignored: [
      '**/pagefile.sys',
      '**/swapfile.sys',
      '**/DumpStack.log.tmp',
    ],
  }
  return config
},
}

export default withSentryConfig(nextConfig, {
  org: "none-094",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
})
