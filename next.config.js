/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        autoPrerender: false,
    },
    server: {
        port: 3001,
    },
}

module.exports = nextConfig
