import styled from 'styled-components'
import { FlexContainer } from '../../../FlexContainer'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

type StyledSwiperSlideProps = {
    $isOdd: boolean
}

export const StyledFlexContainer = styled(FlexContainer)`
    height: 100%;
    padding: 50px 0;
`
export const StyledSwiper = styled(Swiper)`
    width: 90%;
`
export const StyledSwiperSlide = styled(SwiperSlide)<StyledSwiperSlideProps>`
    height: calc(100% - 45px);
    clip-path: ${(prop) =>
        prop.$isOdd
            ? 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
            : 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)'};
`
export const StyledLogo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: auto;
`
export const SwiperSlideBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0 15px;
`
