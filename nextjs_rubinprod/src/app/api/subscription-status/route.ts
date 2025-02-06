import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
})

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
        .select('is_subscribed, subscription_revocation_date, subscription_id')
        .eq('id', user.id)
        .single()

    if (error) {
        return NextResponse.json({ isSubscribed: false }, { status: 500 })
    }

    if (!profile?.subscription_id) {
        return NextResponse.json({ isSubscribed: false })
    }

    const subscription = await stripe.subscriptions.retrieve(
        profile.subscription_id
    )

    const isActive = subscription.status === 'active'

    const currentPeriodEnd = new Date(subscription.current_period_end * 1000)

    if (
        !profile.subscription_revocation_date ||
        new Date(profile.subscription_revocation_date) < currentPeriodEnd
    ) {
        await supabase
            .from('profiles')
            .update({ subscription_revocation_date: currentPeriodEnd })
            .eq('id', user.id)
    }

    const isRevoked = currentPeriodEnd <= new Date()

    const isSubscribed = isActive && !isRevoked

    return NextResponse.json({
        isSubscribed,
    })
}
