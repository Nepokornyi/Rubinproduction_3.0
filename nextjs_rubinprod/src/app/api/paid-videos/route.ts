import { paidVideoConfig } from '@/config/paidVideos'
import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
})

export async function POST(request: NextRequest) {
    const { slugs } = await request.json()

    if (!Array.isArray(slugs) || slugs.length === 0) {
        return NextResponse.json(
            { error: 'Invalid slug list' },
            { status: 400 }
        )
    }

    const supabase = await createClient()

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
        return NextResponse.json({ error: 'Access denied' }, { status: 401 })
    }

    const { data: profile, error } = await supabase
        .from('profiles')
        .select('subscription_id, subscription_revocation_date')
        .eq('id', user.id)
        .single()

    if (error || !profile) {
        return NextResponse.json({ error }, { status: 403 })
    }

    let isSubscribed = false

    if (profile.subscription_id) {
        try {
            const subscription = await stripe.subscriptions.retrieve(
                profile.subscription_id
            )
            isSubscribed = subscription.status === 'active'
        } catch (error) {
            console.error('[Stripe Error]: ', error)
        }
    }

    if (!isSubscribed && profile.subscription_revocation_date) {
        const now = new Date()
        const revokeDate = new Date(profile.subscription_revocation_date)
        if (revokeDate > now) {
            isSubscribed = true
        }
    }

    const results = slugs.map((slug: keyof typeof paidVideoConfig) => {
        const metadata = paidVideoConfig[slug]

        if (!metadata) return null

        const { id, title, description, thumbnail, videoId } = metadata

        return {
            id,
            slug,
            videoId: isSubscribed ? videoId : null,
            thumbnail,
            title,
            description,
        }
    })

    return NextResponse.json(results.filter(Boolean))
}
