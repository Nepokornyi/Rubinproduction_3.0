import { LocalePrefix, Pathnames } from 'next-intl/routing'

export const locales = ['en', 'cz', 'de'] as const

export type UnionLocales = (typeof locales)[number]
export type ReadOnlyLocales = typeof locales

export const pathnames: Pathnames<ReadOnlyLocales> = {
    '/': '/',
    pathnames: 'pathnames',
}

export const localePrefix: LocalePrefix<ReadOnlyLocales> = 'always'
