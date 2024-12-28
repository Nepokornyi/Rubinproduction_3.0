'use client'
import React, { useEffect, useState } from 'react'
import { CommunityMainSection } from './CommunityPage/CommunityMainSection/CommunityMainSection'
import { CommunityVideosSection } from './CommunityPage/CommunityVideos/CommunityVideosSection'

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
                console.log(data)
                setIsSubscribed(data.isSubscribed || false)
            } catch (error) {
                console.error(error)
                setIsSubscribed(false)
            }
        }
        fetchSubscriptionStatus()
    }, [])

    return (
        <div className="animation-container">
            <CommunityMainSection isSubscribed={isSubscribed} />
            <CommunityVideosSection />
        </div>
    )
}
