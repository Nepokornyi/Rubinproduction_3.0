import { LogoCarousel } from '../../../components/layout/Carousel/LogoCarousel'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { AboutTitle } from './components/AboutTitle'
import { ParallaxContainer } from './components/Parallax/ParallaxContainer'

export const AboutSection = () => {
    return (
        <FlexContainer
            minHeight="100vh"
            direction="column"
            justifyContent="center"
        >
            <ParallaxContainer />
            <AboutTitle />
            <LogoCarousel />
        </FlexContainer>
    )
}
