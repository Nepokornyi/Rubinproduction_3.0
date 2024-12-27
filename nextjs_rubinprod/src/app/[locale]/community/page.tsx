import React from 'react'
import { CommunityMainSection } from './CommunityPage/CommunityMainSection/CommunityMainSection'
import { CommunityVideosSection } from './CommunityPage/CommunityVideos/CommunityVideosSection'

export default function Community() {
    return (
        <div className="animation-container">
            <CommunityMainSection />
            <CommunityVideosSection />
        </div>
    )
}
