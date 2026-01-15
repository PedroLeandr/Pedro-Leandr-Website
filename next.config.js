/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Ignore the problematic three-mesh-bvh module that requires BatchedMesh
    config.resolve.alias = {
      ...config.resolve.alias,
      'three-mesh-bvh': false,
    }
    
    return config
  },
}

module.exports = nextConfig
