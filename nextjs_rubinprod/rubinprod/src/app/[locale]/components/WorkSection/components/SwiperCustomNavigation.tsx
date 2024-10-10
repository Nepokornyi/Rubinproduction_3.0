import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { useSwiper } from 'swiper/react'

export const SwiperCustomNavigation = () => {
    const swiper = useSwiper()

    const handlePrev = () => {
        swiper.slidePrev()
    }

    const handleNext = () => {
        swiper.slideNext()
    }

    return (
        <FlexContainer center>
            <i
                onClick={handlePrev}
                className="relative block w-[30px] h-[44px] cursor-pointer box-border"
            >
                <span className="absolute bottom-[14px] right-[6px] w-[16px] h-[16px] border-t-2 border-l-2 border-[#6e6e6e] -rotate-45 box-border" />
            </i>
            <i
                onClick={handleNext}
                className="relative block w-[30px] h-[44px] cursor-pointer box-border"
            >
                <span className="absolute bottom-[14px] right-[6px] w-[16px] h-[16px] border-t-2 border-r-2 border-[#6e6e6e] rotate-45 box-border" />
            </i>
        </FlexContainer>
    )
}
