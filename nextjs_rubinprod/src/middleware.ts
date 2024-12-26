import { type NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import createIntlMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './intl.config'
import { getCurrentLocale } from './helpers/getCurrentLocale'

const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
})

export async function middleware(request: NextRequest) {
    // console.log('Request Cookies:', request.cookies.getAll())
    let response = handleI18nRouting(request)

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: () => request.cookies.getAll(),
                setAll: (cookiesToSet) => {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        // console.log(
                        //     `Middleware: Setting cookie ${name}=${value}`
                        // )
                        request.cookies.set(name, value)
                        response.cookies.set(name, value, options)
                    })
                },
            },
        }
    )

    const {
        data: { session },
    } = await supabase.auth.getSession()

    let userExists = false
    if (session) {
        const { data: user, error: userError } = await supabase.auth.getUser()
        userExists = !userError && !!user
    }

    const pathname = request.nextUrl.pathname
    const currentLocale = getCurrentLocale(pathname, 0)

    const isLoginRoute = locales.some((locale) =>
        pathname.startsWith(`/${locale}/login`)
    )
    const isCommunityRoute = locales.some((locale) =>
        pathname.startsWith(`/${locale}/community`)
    )

    if (session && userExists) {
        if (isLoginRoute) {
            const url = request.nextUrl.clone()
            url.pathname = `/${currentLocale}/community`
            return NextResponse.redirect(url)
        }
    } else {
        if (isCommunityRoute) {
            const url = request.nextUrl.clone()
            url.pathname = `/${currentLocale}/login`
            return NextResponse.redirect(url)
        }
    }

    return response
}

export const config = {
    matcher: ['/', '/(cz|de|en)/:path*', '/auth/:path*'],
}
