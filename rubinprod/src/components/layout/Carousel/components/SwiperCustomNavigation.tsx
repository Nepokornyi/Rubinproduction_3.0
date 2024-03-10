import { useSwiper } from 'swiper/react'
import { FlexContainer } from '../../FlexContainer'
import styled from 'styled-components'
import { SmallArrowLeft, SmallArrowRight } from '../../../Arrow/SmallArrow'

const StyledFlexContainer = styled(FlexContainer)`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
`

export const SwiperCustomNavigation = () => {
    const swiper = useSwiper()

    const handlePrev = () => {
        swiper.slidePrev()
    }

    const handleNext = () => {
        swiper.slideNext()
    }

    return (
        <StyledFlexContainer center>
            <SmallArrowLeft onClick={handlePrev} />
            <SmallArrowRight onClick={handleNext} />
        </StyledFlexContainer>
    )
}
