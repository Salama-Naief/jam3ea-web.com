/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.jm3eia.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.jm3eia.com',
                port: '',
                pathname: '*',
            },
        ],
    },
}

module.exports = nextConfig
