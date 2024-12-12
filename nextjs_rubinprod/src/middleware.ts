import createMiddleware from 'next-intl/middleware'
import { locales } from './intl.config'

export default createMiddleware({
    locales,
    defaultLocale: 'cz',
})

export const config = {
    matcher: ['/', '/(cz|de|en)/:path*'],
}
