import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

export const ShowReelSection = () => {
    return (
        <FlexContainer center className="clip-path-container">
            <div className="absolute bottom-0">ICON</div>

            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover cursor-pointer"
            >
                <source src="/video/showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </FlexContainer>
    )
}
