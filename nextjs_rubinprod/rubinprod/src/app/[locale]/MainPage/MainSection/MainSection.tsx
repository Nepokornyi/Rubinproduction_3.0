import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { useTranslations } from 'next-intl'
import React from 'react'
import { RubinTitle } from './components/RubinTitle'
import { MainSectionDescription } from './components/MainSectionDescription'
import { MainSectionSocials } from './components/MainSectionSocials'

export const MainSection = () => {
    const t = useTranslations('Component')

    const RenderCTAButton = <Button>spolupracovat</Button>

    return (
        <FlexContainer
            minHeight="min-h-screen"
            direction="flex-row"
            justifyContent="justify-center"
            className="relative bg-no-repeat bg-[url('/img/showreel.jpg')] bg-top lg:bg-top bg-cover pt-48 pb-32 overflow-hidden md:items-center items-start"
        >
            <nav className="absolute top-0 left-0">{t('test')}</nav>

            <div className="flex flex-col relative">
                <RubinTitle button={RenderCTAButton} />
                <MainSectionDescription />
                {/* {RenderCTAButton} on small screens */}
                <MainSectionSocials />
            </div>
        </FlexContainer>
    )
}
