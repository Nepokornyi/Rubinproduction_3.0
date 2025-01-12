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

        return new NextResponse(
            JSON.stringify({
                success: true,
                message:
                    'Magic link sent successfully. Please check your email.',
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
    } catch (error) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        return NextResponse.redirect(`${baseUrl}/error`)
    }
}
