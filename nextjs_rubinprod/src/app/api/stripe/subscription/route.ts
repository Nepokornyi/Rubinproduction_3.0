import { createClient } from '@/utils/server'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
})

export async function POST(request: NextRequest) {
    const supabase = await createClient()

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
        return NextResponse.json(
            {
                error: 'User not authenticated',
            },
            {
                status: 401,
            }
        )
    }

    const { id } = user

    const { locale } = await request.json()

    const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('subscription_id')
        .eq('id', id)
        .single()

    if (profileError || !profile?.subscription_id) {
        return NextResponse.json(
            { error: 'Subscription ID not found' },
            { status: 400 }
        )
    }

    try {
        const subscription = await stripe.subscriptions.retrieve(
            profile.subscription_id
        )

        const customerId = subscription.customer as string

        if (!customerId) {
            return NextResponse.json(
                { error: 'Customer ID not found' },
                { status: 400 }
            )
        }

        const session = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/community`,
        })

        return NextResponse.json({ url: session.url }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Stripe Billing Portal Error' },
            { status: 500 }
        )
    }
}
