import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { RubinTitle } from './components/RubinTitle'
import { MainSectionDescription } from './components/MainSectionDescription'
import { MainSectionSocials } from './components/MainSectionSocials'
import { Header } from '@/components/Header/Header'

export const MainSection = () => {
    const RenderCTAButton = (
        <Button className="hidden md:block 2xl:mt-4 lg:pl-10">
            spolupracovat
        </Button>
    )
    const RenderCTAButtonMobile = (
        <FlexContainer>
            <Button className="md:hidden mx-6">spolupracovat</Button>
        </FlexContainer>
    )

    return (
        <FlexContainer
            direction="flex-row"
            justifyContent="justify-start"
            className="relative h-screen bg-no-repeat bg-[url('/img/showreel.jpg')] bg-top lg:bg-top bg-cover pt-52 pb-32 overflow-hidden md:items-center items-start"
        >
            <Header />

            <FlexContainer
                direction="flex-col"
                justifyContent="justify-center"
                width="w-auto"
                className="md:ml-[15%] md:pl-20 relative h-full md:h-auto"
            >
                <RubinTitle button={RenderCTAButton} />
                <MainSectionDescription />
                {RenderCTAButtonMobile}
                <MainSectionSocials />
            </FlexContainer>
        </FlexContainer>
    )
}
