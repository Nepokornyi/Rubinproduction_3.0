import { createClientForWebhook } from '@/utils/webhook'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
})

export async function POST(request: NextRequest) {
    const payload = await request.text()
    const sig = request.headers.get('stripe-signature')!
    const supabase = createClientForWebhook()

    try {
        const event = stripe.webhooks.constructEvent(
            payload,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        )

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session

            const userId = session.metadata?.user_id
            const subscriptionId = session.subscription

            if (userId) {
                const subscription = await stripe.subscriptions.retrieve(
                    subscriptionId as string
                )

                await supabase
                    .from('profiles')
                    .update({
                        is_subscribed: true,
                        subscription_id: subscriptionId,
                        subscription_revocation_date: new Date(
                            subscription.current_period_end * 1000
                        ),
                    })
                    .eq('id', userId)
            }
        }

        if (event.type === 'customer.subscription.updated') {
            const subscription = event.data.object as Stripe.Subscription

            const userId = subscription.metadata?.user_id
            const isActive = subscription.status === 'active'
            const currentPeriodEnd = subscription.current_period_end

            if (userId) {
                await supabase
                    .from('profiles')
                    .update({
                        is_subscribed: isActive,
                        subscription_revocation_date: isActive
                            ? new Date(currentPeriodEnd * 1000)
                            : null,
                    })
                    .eq('id', userId)
            }
        }

        if (event.type === 'customer.subscription.deleted') {
            const subscription = event.data.object as Stripe.Subscription

            const userId = subscription.metadata?.user_id
            const currentPeriodEnd = subscription.current_period_end

            if (userId) {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('id, is_subscribed')
                    .eq('id', userId)
                    .single()

                if (profile) {
                    await supabase
                        .from('profiles')
                        .update({
                            is_subscribed: true,
                            subscription_id: null,
                            subscription_revocation_date: new Date(
                                currentPeriodEnd * 1000
                            ),
                        })
                        .eq('id', userId)
                }
            }
        }

        if (event.type === 'customer.deleted') {
            const customer = event.data.object as Stripe.Customer

            const userId = customer.metadata?.user_id

            if (userId) {
                await supabase
                    .from('profiles')
                    .update({
                        is_subscribed: false,
                        subscription_id: null,
                        subscription_revocation_date: null,
                    })
                    .eq('id', userId)
            }
        }

        return NextResponse.json({ received: true })
    } catch (error) {
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 })
    }
}
