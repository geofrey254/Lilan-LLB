import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    domains: ['localhost', 'lilan-llb-production.up.railway.app', 'www.lilankichwenkadima.com'],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
