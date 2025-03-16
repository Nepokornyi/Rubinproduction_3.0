import { pathnames, locales, defaultLocale } from '@/intl.config'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: 'always',
    pathnames,
})
