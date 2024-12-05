'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import niceBoy from '@/assets/img/carousel/icoNiceBoy.svg'
import ccc from '@/assets/img/carousel/icoCCC.svg'
import bolt from '@/assets/img/carousel/icoBolt.png'
import eliteVoyage from '@/assets/img/carousel/icoEliteVoyage.png'
import euroCenter from '@/assets/img/carousel/icoEuroCenter.png'
import firstClass from '@/assets/img/carousel/icoFirstClass.png'
import gCar from '@/assets/img/carousel/icoGCar.png'
import groost from '@/assets/img/carousel/icoGroost.png'
import sekuron from '@/assets/img/carousel/icoSekuron.png'
import thomasArsov from '@/assets/img/carousel/icoTomasArsov.png'
import vA from '@/assets/img/carousel/icoVA.png'

import 'swiper/css'
import 'swiper/css/autoplay'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import Image from 'next/image'

// TODO: refactor component, it's in layout folder. Make more generic and reusable or move to another folder

// TODO: Add more logos and map them to the array/object/map

export const LogoCarousel = () => {
    return (
        <FlexContainer>
            <Swiper
                slidesPerView={3}
                loop
                modules={[Autoplay]}
                autoplay={{ delay: 2500 }}
                observer
                observeParents
                className="max-w-[800px]"
            >
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image
                        src={niceBoy}
                        alt=""
                        className="h-8 md:h-10 w-auto"
                    />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image src={ccc} alt="" className="h-8 md:h-10 w-auto" />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image src={bolt} alt="" className="h-8 md:h-10 w-auto" />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image
                        src={eliteVoyage}
                        alt=""
                        className="h-8 md:h-10 w-auto"
                    />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image
                        src={euroCenter}
                        alt=""
                        className="h-8 md:h-10 w-auto"
                    />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image
                        src={firstClass}
                        alt=""
                        className="h-8 md:h-10 w-auto"
                    />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image src={gCar} alt="" className="h-8 md:h-10 w-auto" />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image src={groost} alt="" className="h-8 md:h-10 w-auto" />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image
                        src={sekuron}
                        alt=""
                        className="h-8 md:h-10 w-auto"
                    />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image
                        src={thomasArsov}
                        alt=""
                        className="h-8 md:h-10 w-auto"
                    />
                </SwiperSlide>
                <SwiperSlide
                    style={{ display: 'flex' }}
                    className="justify-center items-center"
                >
                    <Image src={vA} alt="" className="h-8 md:h-10 w-auto" />
                </SwiperSlide>
            </Swiper>
        </FlexContainer>
    )
}
