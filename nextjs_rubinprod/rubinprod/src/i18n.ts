import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from './intl.config'

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as Locale)) notFound()

    return {
        messages: (await import(`./locales/${locale}.json`)).default,
    }
})
