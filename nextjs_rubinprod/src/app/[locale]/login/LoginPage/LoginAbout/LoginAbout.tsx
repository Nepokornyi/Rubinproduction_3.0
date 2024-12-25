import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { ParallaxContainer } from '@/components/Parallax/ParallaxContainer'
import React from 'react'

export const LoginAbout = () => {
    return (
        <FlexContainer
            id="about"
            direction="flex-col"
            justifyContent="justify-center"
            className="pt-36 pb-24 relative md:items-center"
        >
            <ParallaxContainer text={'Rubin Community'} />
            <div>About Section Header</div>
            <div>About Section Text</div>
            <div>About Section offer</div>
            <div>About Section Button</div>
        </FlexContainer>
    )
}
