import {
    manageSubscription,
    subscribe,
} from '@/app/[locale]/community/utils/subscriptionApi'
import { useRouter } from 'next/navigation'

export const useCommunityHandlers = () => {
    const router = useRouter()

    const handleManageSubscription = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const { url } = await manageSubscription(locale)
            router.push(url)
        } catch (error) {}
    }
    const handleSubscribe = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const { url } = await subscribe(locale)
            router.push(url)
        } catch (error) {}
    }
    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            })

            if (response.ok) {
                router.refresh()
            }
        } catch (error) {}
    }

    return {
        handleManageSubscription,
        handleSubscribe,
        handleLogout,
    }
}

export type CommunityHandlersProp = ReturnType<typeof useCommunityHandlers>
