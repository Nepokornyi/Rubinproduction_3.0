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
        .select('subscription_id')
        .eq('id', user.id)
        .single()

    if (error) {
        return NextResponse.json({ error }, { status: 403 })
    }

    let isSubscribed = false
    let availableSubscription = profile.subscription_id

    if (availableSubscription) {
        try {
            const subscription = await stripe.subscriptions.retrieve(
                availableSubscription
            )
            isSubscribed = subscription.status === 'active'
        } catch (error) {
            console.error('[Stripe Error]: ', error)
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
