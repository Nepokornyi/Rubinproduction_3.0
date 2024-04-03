import styled from 'styled-components'
import { LogoCarousel } from '../../../components/layout/Carousel/components/LogoCarousel/LogoCarousel'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ParallaxContainer } from './components/Parallax/ParallaxContainer'
import { AboutHeading } from './components/AboutHeading'
import { AboutContent } from './components/AboutContent'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

export const AboutSection = () => {
    return (
        <StyledFlexContainer
            id="about"
            direction="column"
            justifyContent="center"
        >
            <ParallaxContainer />
            <AboutHeading />
            <AboutContent />
            <LogoCarousel />
        </StyledFlexContainer>
    )
}
