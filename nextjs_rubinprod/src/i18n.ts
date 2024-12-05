import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type UnionLocales } from './intl.config'

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as UnionLocales)) notFound()

    return {
        messages: (await import(`./locales/${locale}.json`)).default,
    }
})
