import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    ppr: true,
    dynamicIO: true,
    typedRoutes: true,
  },
}

export default nextConfig
