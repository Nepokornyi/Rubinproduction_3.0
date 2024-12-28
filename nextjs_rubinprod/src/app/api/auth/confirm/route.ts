import { getCurrentLocale } from '@/helpers/getCurrentLocale'
import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    const currentLocale = getCurrentLocale(request.nextUrl.pathname, 1)
    const url = request.nextUrl.origin

    if (!token) {
        return NextResponse.redirect(`${url}/${currentLocale}/error`)
    }

    const email = request.cookies.get('temp_email')?.value
    if (!email) {
        return NextResponse.redirect(`${url}/${currentLocale}/error`)
    }

    const supabase = await createClient()

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
