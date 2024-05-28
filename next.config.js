/* eslint-disable import/no-extraneous-dependencies */
const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  basePath: '',
  reactStrictMode: false,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
});

module.exports = withMDX(nextConfig);
