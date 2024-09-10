import createMiddleware from 'next-intl/middleware'
import { locales } from './intl.config'

export default createMiddleware({
    locales,
    defaultLocale: 'en',
})

export const config = {
    matcher: ['/', '/(cz|de|en)/:path*'],
}
