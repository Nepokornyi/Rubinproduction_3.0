import { getCurrentLocale } from '@/helpers/getCurrentLocale'
import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    const currentLocale = getCurrentLocale(request.nextUrl.pathname, 1)
    const url = request.nextUrl.origin

    const supabase = await createClient()

    if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (error) {
            return NextResponse.redirect(`${url}/${currentLocale}/error`)
        }

        return NextResponse.redirect(`${url}/${currentLocale}/community`)
    }

    if (token && email) {
        const { error } = await supabase.auth.verifyOtp({
            token,
            type: 'magiclink',
            email,
        })

        if (error) {
            return NextResponse.redirect(`${url}/${currentLocale}/error`)
        }

        return NextResponse.redirect(`${url}/${currentLocale}/community`)
    }

    return NextResponse.redirect(`${url}/${currentLocale}/error`)
}
