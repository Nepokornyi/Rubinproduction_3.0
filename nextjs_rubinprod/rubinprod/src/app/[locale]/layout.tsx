import { NextIntlClientProvider } from 'next-intl'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

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
    params: { locale: string }
}>) {
    const messages = await getMessages()

    return (
        <html lang={params.locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
