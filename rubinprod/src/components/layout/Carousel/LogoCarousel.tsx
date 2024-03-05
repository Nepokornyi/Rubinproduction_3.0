import { Swiper, SwiperSlide } from 'swiper/react'
import { FlexContainer } from '../FlexContainer'
import { Autoplay } from 'swiper/modules'
import styled from 'styled-components'

import niceBoy from '../../../assets/img/icoNiceBoy.svg'
import ccc from '../../../assets/img/icoCCC.svg'
import bolt from '../../../assets/img/icoBolt.svg'

import 'swiper/css'
import 'swiper/css/autoplay'

// TODO: refactor component, it's in layout folder. Make more generic and reusable or move to another folder

const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledImage = styled.img`
    height: 30px;
    width: auto;
`

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
            >
                <StyledSwiperSlide>
                    <StyledImage src={niceBoy} />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledImage src={ccc} />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledImage src={bolt} />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledImage src={bolt} />
                </StyledSwiperSlide>
            </Swiper>
        </FlexContainer>
    )
}
