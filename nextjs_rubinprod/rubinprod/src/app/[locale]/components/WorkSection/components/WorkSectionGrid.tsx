'use client'
import { Button } from '@/components/Button/Button'
import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { YourProjectPlaceholder } from './YourProjectPlaceholder'
import { Text } from '@/components/Text/Text'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperCustomNavigation } from './SwiperCustomNavigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import {
    BottomGridItem,
    DesktopGridLayout,
    ExpandedLeftGridItem,
    MobileGridLayout,
    RightGridItem,
} from './GridElements'

import scootyCase from '@/assets/img/portfolio/scootyCase.png'
import gameChangerCase from '@/assets/img/portfolio/gameChangerCase.png'
import eliteVoyageCase from '@/assets/img/portfolio/eliteVoyageCase.png'

import mobileScootyCase from '@/assets/img/portfolio/mobileScootyCase.png'
import mobileGameChangerCase from '@/assets/img/portfolio/mobileGameChangerCase.png'
import mobileEliteVoyageCase from '@/assets/img/portfolio/mobileEliteVoyageCase.png'

import scootyLogo from '@/assets/img/portfolio/icoScooty.png'
import gameChangerLogo from '@/assets/img/portfolio/icoGameChanger.png'
import eliteVoyageLogo from '@/assets/img/portfolio/icoEliteVoyage.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { RevealBlock } from '@/components/Reveal/RevealBlock'
import { Link } from '@/navigation'

const logoStyles =
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32'

const DesktopPortfolio = () => {
    const t = useTranslations('WorkPage')

    return (
        <DesktopGridLayout>
            <ExpandedLeftGridItem
                link={scootyCase}
                logo={scootyLogo}
                alt="scooty case"
            />
            <RightGridItem
                link={gameChangerCase}
                logo={gameChangerLogo}
                alt="game changer case"
                delay={0.65}
            />
            <RightGridItem
                link={eliteVoyageCase}
                logo={eliteVoyageLogo}
                alt="elite voyage case"
                delay={0.25}
            />
            <BottomGridItem>
                <RevealBlock delay={0.45}>
                    <YourProjectPlaceholder />
                </RevealBlock>
            </BottomGridItem>
            <BottomGridItem>
                <Box className="flex h-full flex-col justify-end items-start z-10">
                    <Text className="mb-4">{t('callToAction')}</Text>
                    <FlexContainer>
                        <RevealBlock className="mr-6">
                            <Link href="#contact" className="w-full">
                                <Button>{t('button')}</Button>
                            </Link>
                        </RevealBlock>
                    </FlexContainer>
                </Box>
            </BottomGridItem>
        </DesktopGridLayout>
    )
}

const MobilePortfolio = () => (
    <MobileGridLayout>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            observeParents
            observer
            loop
            className="w-4/5"
        >
            <SwiperSlide className="h-full clip-path-swiper-left">
                <RevealBlock delay={0.25} blockColor="bg-[#0c0c0c]">
                    <Image src={mobileScootyCase} alt="scooty case" />
                    <Image
                        src={scootyLogo}
                        alt="scooty logo"
                        className={logoStyles}
                    />
                </RevealBlock>
            </SwiperSlide>
            <SwiperSlide className="h-full clip-path-swiper-right">
                <RevealBlock delay={0.25} blockColor="bg-[#0c0c0c]">
                    <Image src={mobileGameChangerCase} alt="scooty case" />
                    <Image
                        src={gameChangerLogo}
                        alt="game changer logo"
                        className={logoStyles}
                    />
                </RevealBlock>
            </SwiperSlide>
            <SwiperSlide className="h-full clip-path-swiper-left">
                <RevealBlock delay={0.25} blockColor="bg-[#0c0c0c]">
                    <Image src={mobileEliteVoyageCase} alt="scooty case" />
                    <Image
                        src={eliteVoyageLogo}
                        alt="elite voyage logo"
                        className={logoStyles}
                    />
                </RevealBlock>
            </SwiperSlide>
            <SwiperSlide className="h-full my-auto md:my-0 clip-path-swiper-right">
                <RevealBlock delay={0.25} blockColor="bg-[#0c0c0c]">
                    <YourProjectPlaceholder />
                </RevealBlock>
            </SwiperSlide>

            <SwiperCustomNavigation />
        </Swiper>
    </MobileGridLayout>
)

export const WorkSectionGrid = () => {
    return (
        <>
            <DesktopPortfolio />
            <MobilePortfolio />
        </>
    )
}
