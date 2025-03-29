import { getRequestConfig } from 'next-intl/server'
import { defaultLocale, locales, type UnionLocales } from '../intl.config'

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale
    if (!locale || !locales.includes(locale as UnionLocales)) {
        locale = defaultLocale
    }

    return {
        locale,
        messages: (await import(`../locales/${locale}.json`)).default,
    }
})
