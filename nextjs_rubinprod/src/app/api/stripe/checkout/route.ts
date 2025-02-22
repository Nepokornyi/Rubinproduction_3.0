import { createClient } from '@/utils/server'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
})

export async function POST(request: Request) {
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

    const { id, email } = user

    const { locale } = await request.json()

    try {
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            customer_email: email,
            allow_promotion_codes: true,
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID,
                    quantity: 1,
                },
            ],
            metadata: {
                user_id: id,
            },
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/community`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/community`,
        })

        return NextResponse.json({ url: checkoutSession.url })
    } catch (error: any) {
        return NextResponse.json(
            { error: error?.message || 'Stripe Checkout Error' },
            { status: 500 }
        )
    }
}
