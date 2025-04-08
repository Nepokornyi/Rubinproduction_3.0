import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.vimeocdn.com',
                port: '',
                pathname: '/video/**',
                search: '',
            },
        ],
    },
}

export default withNextIntl(nextConfig)
