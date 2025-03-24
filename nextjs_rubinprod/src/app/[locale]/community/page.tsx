'use client'
import React from 'react'
import { CommunityFreeVideos } from './CommunityPage/CommunityMainSection/CommunityFreeVideos'
import { CommunityPaidVideos } from './CommunityPage/CommunityMainSection/CommunityPaidVideos'
import {
    SubscriptionProvider,
    useSubscriptionContext,
} from './context/SubscriptionContext'
import { Header } from '@/components/Header/Header'
import { useCommunityHandlers } from '@/components/Header/handlers/communityHandlers'
import { getCommunityHeaderConfig } from '@/components/Header/components/const'

export default function Community() {
    const { isSubscribed } = useSubscriptionContext()
    const config = getCommunityHeaderConfig(isSubscribed)
    const handlers = useCommunityHandlers()

    return (
        <div className="animation-container">
            <SubscriptionProvider>
                <Header
                    config={config}
                    hasLanguageSelection={false}
                    handlers={handlers}
                />
                <CommunityFreeVideos />
                <CommunityPaidVideos />
            </SubscriptionProvider>
        </div>
    )
}
