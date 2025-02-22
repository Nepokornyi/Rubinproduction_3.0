'use client'
import React from 'react'
import { CommunityFreeVideos } from './CommunityPage/CommunityMainSection/CommunityFreeVideos'
import { CommunityPaidVideos } from './CommunityPage/CommunityMainSection/CommunityPaidVideos'
import {
    SubscriptionProvider,
    useSubscriptionContext,
} from './context/SubscriptionContext'
import { CommunityHeader } from '@/components/Header/CommunityHeader'

export default function Community() {
    const { isSubscribed } = useSubscriptionContext()

    return (
        <div className="animation-container">
            <SubscriptionProvider>
                <CommunityHeader isSubscribed={isSubscribed} />
                <CommunityFreeVideos />
                <CommunityPaidVideos />
            </SubscriptionProvider>
        </div>
    )
}
