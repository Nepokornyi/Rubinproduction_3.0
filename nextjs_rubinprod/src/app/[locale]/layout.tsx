import { hasLocale, NextIntlClientProvider } from 'next-intl'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { getMessages } from 'next-intl/server'
import '../globals.css'

import {
    FacebookPixelBody,
    FacebookPixelHead,
} from './integrations/FacebookPixel'
import {
    GoogleAnalyticsBody,
    GoogleAnalyticsHead,
} from './integrations/GoogleAnalytics'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Rubin Production',
    description:
        'Discover our creative video making atelier, specializing in high-quality video production, editing, and storytelling. Elevate your brand with professional visuals tailored to your vision.',
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    const messages = await getMessages()

    const GTM_ID = process.env.GTM_ID
    const FB_PIXEL_ID = process.env.FB_PIXEL_ID

    return (
        <html lang={locale}>
            <head>
                <GoogleAnalyticsHead gtmId={GTM_ID} />
                <FacebookPixelHead pixelId={FB_PIXEL_ID} />
            </head>
            <body className={montserrat.className}>
                <GoogleAnalyticsBody gtmId={GTM_ID} />
                <FacebookPixelBody pixelId={FB_PIXEL_ID} />
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <div id="overlay-root" />
            </body>
        </html>
    )
}
