import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const supabase = await createClient()

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
        return NextResponse.json({ isSubscribed: false }, { status: 401 })
    }

    const { data: profile, error } = await supabase
        .from('profiles')
        .select('is_subscribed, subscription_revocation_date')
        .eq('id', user.id)
        .single()

    if (error) {
        if (error) {
            return NextResponse.json({ isSubscribed: false }, { status: 500 })
        }
    }

    const isRevoked =
        profile?.subscription_revocation_date &&
        new Date(profile.subscription_revocation_date) <= new Date()

    const isSubscribed = profile?.is_subscribed && !isRevoked

    return NextResponse.json({
        isSubscribed,
    })
}
