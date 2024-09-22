import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { AboutSectionHeading } from './components/AboutSectionHeading'
import { AboutSectionDescription } from './components/AboutSectionDescription'
import { ParallaxContainer } from '@/components/Parallax/ParallaxContainer'

export const AboutSection = () => {
    return (
        <FlexContainer
            className="pt-36 pb-24 relative"
            direction="flex-col"
            justifyContent="justify-center"
        >
            <ParallaxContainer text={'Full cycle video production'} />
            <AboutSectionHeading />
            <AboutSectionDescription />
            {/* <div>Logo Carousel</div> */}
        </FlexContainer>
    )
}
