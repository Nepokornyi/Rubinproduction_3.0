import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

export const VimeoVideo = ({
    id,
    className = 'rounded-2xl',
}: {
    id: number
    className?: string
}) => {
    return (
        <>
            <FlexContainer width="w-full" className="relative aspect-video">
                <iframe
                    src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    className={`w-full h-full outline-none ${className}`}
                />
            </FlexContainer>
        </>
    )
}
