import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

export const CommunityMainVideo = () => {
    return (
        <FlexContainer width="w-full" className="relative aspect-video mt-5">
            <iframe
                src="https://player.vimeo.com/video/1038958698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                className="w-full h-full outline-none rounded-3xl"
            />
        </FlexContainer>
    )
}
