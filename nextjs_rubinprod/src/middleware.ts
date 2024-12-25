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
        data: { user },
        error,
    } = await supabase.auth.getUser()

    // console.log('Middleware: User data', user, error)

    const pathname = request.nextUrl.pathname
    const currentLocale = getCurrentLocale(pathname, 1)

    const protectedRoutes = [`/${currentLocale}/community`]
    const publicRoutes = [`/${currentLocale}/login`]

    if (publicRoutes.some((route) => pathname.startsWith(route)) && user) {
        const url = request.nextUrl.clone()
        url.pathname = `/${currentLocale}/community`
        return NextResponse.redirect(url)
    }

    if (protectedRoutes.some((route) => pathname.startsWith(route)) && !user) {
        const url = request.nextUrl.clone()
        url.pathname = `/${currentLocale}/login`
        return NextResponse.redirect(url)
    }

    return response
}

export const config = {
    matcher: ['/', '/(cz|de|en)/:path*', '/auth/:path*'],
}
