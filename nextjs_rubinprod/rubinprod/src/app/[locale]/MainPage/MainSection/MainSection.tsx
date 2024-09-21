import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { RubinTitle } from './components/RubinTitle'
import { MainSectionDescription } from './components/MainSectionDescription'
import { MainSectionSocials } from './components/MainSectionSocials'
import { Header } from '@/components/Header/Header'

export const MainSection = () => {
    const RenderCTAButton = (
        <Button className="hidden md:block mt-4 pl-10">spolupracovat</Button>
    )
    const RenderCTAButtonMobile = (
        <Button className="block md:hidden">spolupracovat</Button>
    )

    return (
        <FlexContainer
            minHeight="min-h-screen"
            direction="flex-row"
            justifyContent="justify-start"
            className="relative bg-no-repeat bg-[url('/img/showreel.jpg')] bg-top lg:bg-top bg-cover pt-48 pb-32 overflow-hidden md:items-center items-start"
        >
            <Header />

            <FlexContainer
                direction="flex-col"
                width="w-auto"
                className="md:ml-[15%] md:pl-14 relative"
            >
                <RubinTitle button={RenderCTAButton} />
                <MainSectionDescription />
                {RenderCTAButtonMobile}
                <MainSectionSocials />
            </FlexContainer>
        </FlexContainer>
    )
}
