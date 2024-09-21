import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { RubinTitle } from './components/RubinTitle'
import { MainSectionDescription } from './components/MainSectionDescription'
import { MainSectionSocials } from './components/MainSectionSocials'
import { Header } from '@/components/Header/Header'

export const MainSection = () => {
    const RenderCTAButton = <Button>spolupracovat</Button>

    return (
        <FlexContainer
            minHeight="min-h-screen"
            direction="flex-row"
            justifyContent="justify-center"
            className="relative bg-no-repeat bg-[url('/img/showreel.jpg')] bg-top lg:bg-top bg-cover pt-48 pb-32 overflow-hidden md:items-center items-start"
        >
            <Header />

            <div className="flex flex-col relative">
                <RubinTitle button={RenderCTAButton} />
                <MainSectionDescription />
                {/* {RenderCTAButton} on small screens */}
                <MainSectionSocials />
            </div>
        </FlexContainer>
    )
}
