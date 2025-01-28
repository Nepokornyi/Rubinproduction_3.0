'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export const SubscriptionContext = createContext({ isSubscribed: false })

export const SubscriptionProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isSubscribed, setIsSubscribed] = useState(false)

    useEffect(() => {
        const fetchSubscriptionStatus = async () => {
            try {
                const response = await fetch('/api/subscription-status', {
                    method: 'GET',
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch subscription status')
                }

                const data = await response.json()
                setIsSubscribed(data.isSubscribed || false)
            } catch (error) {
                setIsSubscribed(false)
            }
        }
        fetchSubscriptionStatus()
    }, [])

    return (
        <SubscriptionContext.Provider value={{ isSubscribed }}>
            {children}
        </SubscriptionContext.Provider>
    )
}

export const useSubscriptionContext = () => useContext(SubscriptionContext)
