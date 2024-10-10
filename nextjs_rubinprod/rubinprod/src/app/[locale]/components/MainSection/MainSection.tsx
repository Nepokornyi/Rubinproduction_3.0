import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { RubinTitle } from './components/RubinTitle'
import { MainSectionDescription } from './components/MainSectionDescription'
import { MainSectionSocials } from './components/MainSectionSocials'
import { Header } from '@/components/Header/Header'
import { useTranslations } from 'next-intl'
import { RevealBlock } from '@/components/Reveal/RevealBlock'
import { Link } from '@/navigation'

export const MainSection = () => {
    const t = useTranslations('MainPage')

    const RenderCTAButton = (
        <RevealBlock className="2xl:mt-4 2xl:ml-6">
            <Link href="#contact" className="w-full">
                <Button className="hidden md:block lg:pl-10">
                    {t('button')}
                </Button>
            </Link>
        </RevealBlock>
    )
    const RenderCTAButtonMobile = (
        <FlexContainer>
            <RevealBlock className="md:hidden mx-6 mr-12">
                <Link href="#contact" className="w-full">
                    <Button>{t('button')}</Button>
                </Link>
            </RevealBlock>
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
                className="md:ml-[15%] md:pl-10 lg:pl-20 relative h-full md:h-auto"
            >
                <RubinTitle button={RenderCTAButton} />
                <MainSectionDescription />
                {RenderCTAButtonMobile}
                <MainSectionSocials />
            </FlexContainer>
        </FlexContainer>
    )
}
