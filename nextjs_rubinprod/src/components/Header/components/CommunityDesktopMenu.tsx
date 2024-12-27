import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CommunityChangeLanguage } from './CommunityChangeLanguage'

export const CommunityDesktopMenu = () => {
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
            <ul className="list-none flex gap-4 overflow-hidden">
                <Text
                    className="cursor-pointer"
                    variant="nav"
                    onClick={handleManageSubscription}
                >
                    subscription
                </Text>
                <Text
                    className="cursor-pointer"
                    variant="nav"
                    onClick={handleLogout}
                >
                    log out
                </Text>
                <CommunityChangeLanguage />
            </ul>
        </nav>
    )
}
