import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { ParallaxText } from './components/ParallaxText'

type ParallaxTextProps = {
    text: string
    isTransparent?: boolean
    isCase?: boolean
    placeBottom?: boolean
}

export const ParallaxContainer = ({
    text,
    isTransparent,
    isCase = false,
    placeBottom = false,
}: ParallaxTextProps) => {
    const background = isTransparent
        ? 'bg-transparent'
        : 'bg-gradient-to-r from-[#0C0C0C] to-[#BF1B32]'

    const position = placeBottom ? '-bottom-4 lg:-bottom-6' : '-top-4 lg:-top-6'

    return (
        <FlexContainer
            className={`absolute ${position} py-4 md:py-6 -skew-y-3 md:-skew-y-2 lg:-skew-y-1 ${background}`}
        >
            <ParallaxText isCase={isCase}>{text}</ParallaxText>
        </FlexContainer>
    )
}
