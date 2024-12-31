import { getCurrentLocale } from '@/helpers/getCurrentLocale'
import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    const currentLocale = getCurrentLocale(request.nextUrl.pathname, 1)
    const url = request.nextUrl.origin

    const supabase = await createClient()

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

    const { data: user, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
        return NextResponse.redirect(`${url}/${currentLocale}/error`)
    }

    return NextResponse.redirect(`${url}/${currentLocale}/community`)
}
