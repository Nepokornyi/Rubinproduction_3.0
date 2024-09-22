import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { ParallaxText } from './components/ParallaxText'

type ParallaxTextProps = {
    text: string
    isTransparent?: boolean
}

export const ParallaxContainer = ({
    text,
    isTransparent,
}: ParallaxTextProps) => {
    const background = isTransparent
        ? 'bg-transparent'
        : 'bg-gradient-to-r from-[#0C0C0C] to-[#BF1B32]'

    return (
        <FlexContainer
            className={`absolute -top-4 lg:-top-6 py-4 md:py-6 -skew-y-3 md:-skew-y-2 lg:-skew-y-1 ${background}`}
        >
            <ParallaxText>{text}</ParallaxText>
        </FlexContainer>
    )
}
