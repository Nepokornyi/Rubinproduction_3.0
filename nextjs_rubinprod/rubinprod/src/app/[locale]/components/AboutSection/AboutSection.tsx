import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { AboutSectionHeading } from './components/AboutSectionHeading'
import { AboutSectionDescription } from './components/AboutSectionDescription'
import { ParallaxContainer } from '@/components/Parallax/ParallaxContainer'
import { LogoCarousel } from '@/components/Carousel/LogoCarousel'

export const AboutSection = () => {
    return (
        <FlexContainer
            id="about"
            direction="flex-col"
            justifyContent="justify-center"
            className="pt-36 pb-24 relative md:items-center"
        >
            <ParallaxContainer text={'Full cycle video production'} />
            <AboutSectionHeading />
            <AboutSectionDescription />
            <LogoCarousel />
        </FlexContainer>
    )
}
