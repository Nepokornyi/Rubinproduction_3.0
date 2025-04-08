import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.vimeocdn.com'],
    },
}

export default withNextIntl(nextConfig)
