import styled from 'styled-components'
import { LogoCarousel } from '../../../components/layout/Carousel/components/LogoCarousel/LogoCarousel'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { AboutTitle } from './components/AboutTitle'
import { ParallaxContainer } from './components/Parallax/ParallaxContainer'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

export const AboutSection = () => {
    return (
        <StyledFlexContainer direction="column" justifyContent="center">
            <ParallaxContainer />
            <AboutTitle />
            <LogoCarousel />
        </StyledFlexContainer>
    )
}
