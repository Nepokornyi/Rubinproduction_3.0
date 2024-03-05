import { Swiper, SwiperSlide } from 'swiper/react'
import { FlexContainer } from '../FlexContainer'
import { SwiperCustomNavigation } from './components/SwiperCustomNavigation'
import styled from 'styled-components'

import scooty from '../../../assets/img/work/scooty.png'
import gamechanger from '../../../assets/img/work/gamechanger.png'
import elitvoyage from '../../../assets/img/work/elitvoyage.jpg'
import logoScooty from '../../../assets/img/work/workScooty.png'
import logoGamechanger from '../../../assets/img/work/workGamechanger.png'
import logoEliteVoyage from '../../../assets/img/work/workEliteVoyage.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// TODO: check for optimization in future

const StyledFlexContainer = styled(FlexContainer)`
    height: 100%;
    padding: 50px 0;
`

const StyledSwiper = styled(Swiper)`
    width: 90%;
`

const OddStyledSwiperSlide = styled(SwiperSlide)`
    height: calc(100% - 45px);
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
`
const EvenStyledSwiperSlide = styled(SwiperSlide)`
    height: calc(100% - 45px);
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
`

const StyledLogo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 50px;
`

const SwiperSlideBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0 15px;
`

export const PortfolioCarousel = () => {
    return (
        <StyledFlexContainer>
            <StyledSwiper
                slidesPerView={1}
                spaceBetween={30}
                observeParents
                observer
                loop
            >
                <OddStyledSwiperSlide>
                    <SwiperSlideBackground src={scooty} alt="" />
                    <StyledLogo src={logoScooty} alt="" />
                </OddStyledSwiperSlide>

                <EvenStyledSwiperSlide>
                    <SwiperSlideBackground src={gamechanger} alt="" />
                    <StyledLogo src={logoGamechanger} />
                </EvenStyledSwiperSlide>

                <OddStyledSwiperSlide>
                    <SwiperSlideBackground src={elitvoyage} alt="" />
                    <StyledLogo src={logoEliteVoyage} alt="" />
                </OddStyledSwiperSlide>

                <EvenStyledSwiperSlide>
                    <SwiperSlideBackground src={scooty} alt="" />
                    <StyledLogo src={logoScooty} alt="" />
                </EvenStyledSwiperSlide>

                <SwiperCustomNavigation />
            </StyledSwiper>
        </StyledFlexContainer>
    )
}
