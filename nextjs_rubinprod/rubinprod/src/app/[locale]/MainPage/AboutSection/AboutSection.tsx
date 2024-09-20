import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { AboutSectionHeading } from './components/AboutSectionHeading'
import { AboutSectionDescription } from './components/AboutSectionDescription'

export const AboutSection = () => {
    return (
        <FlexContainer
            className="pt-36 pb-24"
            direction="flex-col"
            justifyContent="justify-center"
        >
            {/* <div>Parallax</div> */}
            <AboutSectionHeading />
            <AboutSectionDescription />
            {/* <div>Logo Carousel</div> */}
        </FlexContainer>
    )
}
