import {
    StyledFlexContainer,
    StyledLogo,
    StyledSwiper,
    StyledSwiperSlide,
    SwiperSlideBackground,
} from './StyledComponents'
import { SwiperCustomNavigation } from '../SwiperCustomNavigation'

import scooty from '../../../../../assets/img/work/scooty.png'
import gamechanger from '../../../../../assets/img/work/gamechanger.png'
import elitvoyage from '../../../../../assets/img/work/elitevoyage.png'
import logoScooty from '../../../../../assets/img/work/icoScooty.png'
import logoGamechanger from '../../../../../assets/img/work/icoGameChanger.png'
import logoEliteVoyage from '../../../../../assets/img/work/icoEliteVoyage.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { RevealBlock } from '../../../../animations/reveal/RevealBlock'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Placeholder } from '../../../../../pages/AppMainLanding/WorkSection/components/WorkGridPortfolio/Placeholder'

const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    position: absolute;
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
                <StyledSwiperSlide $isOdd>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <SwiperSlideBackground src={scooty} alt="scooty case" />
                        <StyledLogo src={logoScooty} alt="scooty logo" />
                        <StyledLink to="/scooty" />
                    </RevealBlock>
                </StyledSwiperSlide>

                <StyledSwiperSlide $isOdd={false}>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <SwiperSlideBackground
                            src={gamechanger}
                            alt="gamechanger case"
                        />
                        <StyledLogo
                            src={logoGamechanger}
                            alt="gamechanger logo"
                        />
                        <StyledLink to="/gamechanger" />
                    </RevealBlock>
                </StyledSwiperSlide>

                <StyledSwiperSlide $isOdd>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <SwiperSlideBackground
                            src={elitvoyage}
                            alt="elitvoyage case"
                        />
                        <StyledLogo
                            src={logoEliteVoyage}
                            alt="elitvoyage logo"
                        />
                        <StyledLink to="/elitevoyage" />
                    </RevealBlock>
                </StyledSwiperSlide>

                <StyledSwiperSlide $isOdd={false}>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <Placeholder />
                        <StyledLink to="/" />
                    </RevealBlock>
                </StyledSwiperSlide>

                <SwiperCustomNavigation />
            </StyledSwiper>
        </StyledFlexContainer>
    )
}
