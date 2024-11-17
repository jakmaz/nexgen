import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
    typedRoutes: true,
  },
}

export default nextConfig
