import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import styled from 'styled-components'
import { FlexContainer } from '../../../FlexContainer'

import niceBoy from '../../../../../assets/img/icoNiceBoy.svg'
import ccc from '../../../../../assets/img/icoCCC.svg'
import bolt from '../../../../../assets/img/icoBolt.png'
import eliteVoyage from '../../../../../assets/img/icoEliteVoyage.png'
import euroCenter from '../../../../../assets/img/icoEuroCenter.png'
import firstClass from '../../../../../assets/img/icoFirstClass.png'
import gCar from '../../../../../assets/img/icoGCar.png'
import groost from '../../../../../assets/img/icoGroost.png'
import sekuron from '../../../../../assets/img/icoSekuron.png'
import thomasArsov from '../../../../../assets/img/icoTomasArsov.png'
import vA from '../../../../../assets/img/icoVA.png'

import 'swiper/css'
import 'swiper/css/autoplay'
import { Reveal } from '../../../../animations/reveal/Reveal'

// TODO: refactor component, it's in layout folder. Make more generic and reusable or move to another folder

const StyledSwiper = styled(Swiper)`
    max-width: 850px;
`

const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledImage = styled.img`
    height: clamp(30px, 3vw, 40px);
    width: auto;
`

// TODO: Add more logos and map them to the array/object/map

export const LogoCarousel = () => {
    return (
        <Reveal y={25} removeRepeatedReveal={false}>
            <FlexContainer>
                <StyledSwiper
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
                        <StyledImage src={eliteVoyage} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <StyledImage src={euroCenter} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <StyledImage src={firstClass} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <StyledImage src={gCar} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <StyledImage src={groost} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <StyledImage src={sekuron} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <StyledImage src={thomasArsov} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <StyledImage src={vA} />
                    </StyledSwiperSlide>
                </StyledSwiper>
            </FlexContainer>
        </Reveal>
    )
}
