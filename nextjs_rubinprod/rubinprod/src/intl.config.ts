export const locales = ['en', 'cz', 'de'] as const
export type Locale = (typeof locales)[number]
