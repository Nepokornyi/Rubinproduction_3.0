'use client'
import React from 'react'
import { CommunityFreeVideos } from './CommunityPage/CommunityMainSection/CommunityFreeVideos'
import { CommunityPaidVideos } from './CommunityPage/CommunityMainSection/CommunityPaidVideos'
import { SubscriptionProvider } from './context/SubscriptionContext'

export default function Community() {
    return (
        <div className="animation-container">
            <SubscriptionProvider>
                <CommunityFreeVideos />
                <CommunityPaidVideos />
            </SubscriptionProvider>
        </div>
    )
}
