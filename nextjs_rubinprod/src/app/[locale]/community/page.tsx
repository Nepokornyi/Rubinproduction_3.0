'use client'
import React, { useEffect, useState } from 'react'
import { CommunityFreeVideos } from './CommunityPage/CommunityMainSection/CommunityFreeVideos'
import { CommunityPaidVideos } from './CommunityPage/CommunityMainSection/CommunityPaidVideos'

export default function Community() {
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
        <div className="animation-container">
            <CommunityFreeVideos isSubscribed={isSubscribed} />
            <CommunityPaidVideos />
        </div>
    )
}
