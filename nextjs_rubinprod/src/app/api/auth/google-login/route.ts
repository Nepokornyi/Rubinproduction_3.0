import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const supabase = await createClient()

    try {
        const { locale } = await request.json()

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        const redirectUrl = `${baseUrl}/auth/confirm`

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: redirectUrl,
            },
        })

        if (error) {
            return NextResponse.redirect(`${baseUrl}/${locale}/error`)
        }

        return new NextResponse(
            JSON.stringify({
                success: true,
                message: 'Redirecting to Google for authentication.',
                redirectUrl: data.url,
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
    } catch (error) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        return NextResponse.redirect(`${baseUrl}/error`)
    }
}
