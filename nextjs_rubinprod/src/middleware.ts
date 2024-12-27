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
    let response = handleI18nRouting(request)

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: () => request.cookies.getAll(),
                setAll: (cookiesToSet) => {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value)
                        response.cookies.set(name, value, options)
                    })
                },
            },
        }
    )

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser()

    let userSubscribed = false

    if (!userError && user) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('is_subscribed, subscription_revocation_date')
            .eq('id', user.id)
            .single()

        const isRevoked =
            profile?.subscription_revocation_date &&
            new Date(profile.subscription_revocation_date) <= new Date()

        userSubscribed = profile?.is_subscribed || false
    }

    const pathname = request.nextUrl.pathname
    const currentLocale = getCurrentLocale(pathname, 0)

    const isLoginRoute = locales.some((locale) =>
        pathname.startsWith(`/${locale}/login`)
    )
    const isPricingRoute = locales.some((locale) =>
        pathname.startsWith(`/${locale}/pricing`)
    )
    const isCommunityRoute = locales.some((locale) =>
        pathname.startsWith(`/${locale}/community`)
    )

    if (user) {
        if (userSubscribed) {
            if (isLoginRoute || isPricingRoute) {
                const url = request.nextUrl.clone()
                url.pathname = `/${currentLocale}/community`
                return NextResponse.redirect(url)
            }
        } else {
            if (isLoginRoute || isCommunityRoute) {
                const url = request.nextUrl.clone()
                url.pathname = `/${currentLocale}/pricing`
                return NextResponse.redirect(url)
            }
        }
    } else {
        if (isCommunityRoute || isPricingRoute) {
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
