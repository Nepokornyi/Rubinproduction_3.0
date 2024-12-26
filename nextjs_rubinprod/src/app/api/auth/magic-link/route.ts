import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const supabase = await createClient()

    try {
        const { login: email, locale } = await request.json()

        const { error } = await supabase.auth.signInWithOtp({ email })

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

        if (error) {
            return NextResponse.redirect(`${baseUrl}/${locale}/error`)
        }

        const response = new NextResponse('Magic link sent', { status: 200 })
        response.cookies.set('temp_email', email, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 600,
            sameSite: 'lax',
        })
        response.headers.set('Location', `${baseUrl}/${locale}/confirm`)

        return response
    } catch (error) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        return NextResponse.redirect(`${baseUrl}/error`)
    }
}
