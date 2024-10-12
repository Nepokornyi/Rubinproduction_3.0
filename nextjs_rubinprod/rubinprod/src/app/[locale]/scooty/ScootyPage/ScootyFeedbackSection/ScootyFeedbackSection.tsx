import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { ParallaxContainer } from '@/components/Parallax/ParallaxContainer'
import React from 'react'
import { Feedback } from './components/Feedback'

export const ScootyFeedbackSection = () => {
    return (
        <FlexContainer className="relative pt-36 pb-24">
            <ParallaxContainer
                isTransparent
                text="strategy, schooting, animation, instagram feed, branding and design"
                isCase
            />
            <Feedback />
            <ParallaxContainer
                isTransparent
                text="photo/video editing, creative treatment, project planning, assistance"
                placeBottom
                isCase
            />
        </FlexContainer>
    )
}
