'use client'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React, { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperCustomNavigation } from '../WorkSection/components/SwiperCustomNavigation'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export type CaseVideoRowProps = {
    src: string
    title?: string
    description?: string | ReactNode
}

export const CaseVideoRow = ({
    config,
    title,
    accent,
    className,
}: {
    config: CaseVideoRowProps[]
    title: string
    accent: string
    className?: string
}) => {
    return (
        <>
            <FlexContainer className="pt-36 pb-24" center>
                <FlexContainer
                    width="w-auto"
                    direction="flex-col"
                    className="hidden md:flex"
                >
                    <Text variant="h4" textTransform="uppercase">
                        {title}
                        <Text
                            variant="h2"
                            fontFamily="font-grunges"
                            className="text-[#7055EC]"
                            padding="px-0 md:px-6"
                        >
                            {accent}
                        </Text>
                    </Text>
                    <FlexContainer
                        gap="gap-6"
                        className="my-10 flex-col xl:flex-row items-center xl:items-start"
                    >
                        {config.map((item, index) => (
                            <FlexContainer
                                key={index}
                                gap={'gap-2'}
                                direction="flex-col"
                                width="w-[300px] md:w-[400px]"
                            >
                                <video autoPlay muted loop playsInline>
                                    <source src={item.src} />
                                </video>
                                {item.title && (
                                    <Text
                                        variant="h5"
                                        textTransform="uppercase"
                                        padding="px-0"
                                    >
                                        {item.title}
                                    </Text>
                                )}
                                {item.description && (
                                    <Text padding="px-0">
                                        {item.description}
                                    </Text>
                                )}
                            </FlexContainer>
                        ))}
                    </FlexContainer>
                </FlexContainer>

                <FlexContainer direction="flex-col" center>
                    <FlexContainer width="w-4/5" className="relative">
                        <Text
                            variant="h4"
                            textTransform="uppercase"
                            padding="px-0 mb-14"
                        >
                            {title}
                            <Text
                                variant="h2"
                                fontFamily="font-grunges"
                                textAlign="text-right"
                                className="text-[#7055EC] absolute top-14 -right-8"
                            >
                                {accent}
                            </Text>
                        </Text>
                    </FlexContainer>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        observeParents
                        observer
                        loop
                        className="w-4/5"
                    >
                        {config.map((item, index) => (
                            <SwiperSlide key={index} className="h-full">
                                <video autoPlay muted loop playsInline>
                                    <source src={item.src} />
                                </video>
                                {item.title && (
                                    <Text
                                        variant="h5"
                                        textTransform="uppercase"
                                        padding="px-0 my-3"
                                    >
                                        {item.title}
                                    </Text>
                                )}
                                {item.description && (
                                    <Text padding="px-0">
                                        {item.description}
                                    </Text>
                                )}
                            </SwiperSlide>
                        ))}

                        <SwiperCustomNavigation />
                    </Swiper>
                </FlexContainer>
            </FlexContainer>
        </>
    )
}
