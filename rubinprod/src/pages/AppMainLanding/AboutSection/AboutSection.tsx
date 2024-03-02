import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ParallaxContainer } from './components/ParallaxContainer'

export const AboutSection = () => {
    return (
        <FlexContainer
            minHeight="100vh"
            direction="column"
            justifyContent="center"
        >
            <ParallaxContainer />
        </FlexContainer>
    )
}
