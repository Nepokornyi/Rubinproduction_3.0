'use client'
import scootyCase from '@/assets/img/portfolio/scootyCase.png'
import gameChangerCase from '@/assets/img/portfolio/gameChangerCase.png'
import eliteVoyageCase from '@/assets/img/portfolio/eliteVoyageCase.png'

import mobileScootyCase from '@/assets/img/portfolio/mobileScootyCase.png'
import mobileGameChangerCase from '@/assets/img/portfolio/mobileGameChangerCase.png'
import mobileEliteVoyageCase from '@/assets/img/portfolio/mobileEliteVoyageCase.png'

import { Button } from '@/components/Button/Button'
import { Box } from '@/components/Box/Box'
import { YourProjectPlaceholder } from './YourProjectPlaceholder'
import { Text } from '@/components/Text/Text'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import {
    BottomGridItem,
    DesktopGridLayout,
    ExpandedLeftGridItem,
    MobileGridLayout,
    RightGridItem,
} from './GridElements'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { SwiperCustomNavigation } from './SwiperCustomNavigation'
import { useTranslations } from 'next-intl'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'

const DesktopPortfolio = () => {
    const t = useTranslations('WorkPage')

    return (
        <DesktopGridLayout>
            <ExpandedLeftGridItem link={scootyCase} alt="scooty case" />
            <RightGridItem link={gameChangerCase} alt="game changer case" />
            <RightGridItem link={eliteVoyageCase} alt="elite voyage case" />
            <BottomGridItem>
                <YourProjectPlaceholder />
            </BottomGridItem>
            <BottomGridItem>
                <Box className="flex h-full flex-col justify-end items-start z-10">
                    <Text className="mb-4">{t('callToAction')}</Text>
                    <FlexContainer>
                        <Button className="mr-6">{t('button')}</Button>
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
                <Image src={mobileScootyCase} alt="scooty case" />
            </SwiperSlide>
            <SwiperSlide className="h-full clip-path-swiper-right">
                <Image src={mobileGameChangerCase} alt="scooty case" />
            </SwiperSlide>
            <SwiperSlide className="h-full clip-path-swiper-left">
                <Image src={mobileEliteVoyageCase} alt="scooty case" />
            </SwiperSlide>
            <SwiperSlide className="h-full clip-path-swiper-right">
                <Image src={mobileScootyCase} alt="scooty case" />
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
