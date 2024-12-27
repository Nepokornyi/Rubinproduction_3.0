import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const supabase = await createClient()

    try {
        const { error } = await supabase.auth.signOut()
        if (error) {
            return NextResponse.json(
                { error: 'Failed to log out' },
                { status: 500 }
            )
        }

        const response = NextResponse.json({
            message: 'Logged out successfully',
        })
        response.cookies.set('sb-access-token', '', { maxAge: 0, path: '/' })
        response.cookies.set('sb-refresh-token', '', { maxAge: 0, path: '/' })

        return response
    } catch (error) {
        return NextResponse.json(
            { error: 'Unexpected error occurred' },
            { status: 500 }
        )
    }
}
