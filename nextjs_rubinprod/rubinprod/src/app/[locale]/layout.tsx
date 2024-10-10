import { NextIntlClientProvider } from 'next-intl'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { getMessages } from 'next-intl/server'
import '../globals.css'

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
    params: { locale: string }
}>) {
    const messages = await getMessages()

    const GTM_ID = process.env.GTM_ID

    return (
        <html lang={params.locale}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${GTM_ID}');
                        `,
                    }}
                />
            </head>
            <body className={montserrat.className}>
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <div id="overlay-root" />
            </body>
        </html>
    )
}
