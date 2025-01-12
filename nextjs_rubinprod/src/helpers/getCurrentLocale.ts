import { defaultLocale, locales, UnionLocales } from '@/intl.config'

export const getCurrentLocale = (pathname: string, position: number) => {
    const parts = pathname.split('/').filter(Boolean)
    const locale = parts[position] as UnionLocales
    return locales.includes(locale) ? locale : defaultLocale
}
