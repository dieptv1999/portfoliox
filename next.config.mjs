import { withContentCollections } from '@content-collections/next';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withContentCollections(nextConfig);
