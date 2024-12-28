import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

const linkStyling =
    'cursor-pointer duration-300 hover:text-[#d91e37] hover:scale-105'

export const CommunityDesktopMenu = ({
    isSubscribed,
}: {
    isSubscribed: boolean
}) => {
    const t = useTranslations('Header.menu')
    const router = useRouter()

    const handleManageSubscription = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const response = await fetch('/api/stripe/subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ locale }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.error || 'Failed to initiate subscription'
                )
            }
            const { url } = await response.json()
            router.push(url)
        } catch (error) {}
    }

    const handleSubscribe = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ locale }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.error || 'Failed to initiate checkout'
                )
            }
            const { url } = await response.json()
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

    return (
        <nav className="hidden md:block">
            <ul className="list-none flex gap-4">
                <Text
                    className={linkStyling}
                    variant="nav"
                    onClick={
                        isSubscribed
                            ? handleManageSubscription
                            : handleSubscribe
                    }
                >
                    Členství
                </Text>
                <Text
                    className={linkStyling}
                    variant="nav"
                    onClick={handleLogout}
                >
                    Odhlásit se
                </Text>
            </ul>
        </nav>
    )
}
