import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { Header } from '../../../components/Header/Header'

import background from '../../../assets/img/gameChanger/gameChangerLandingBackground.png'

const StyledFlexContainerBackground = styled(
    FlexContainer
)<LayoutFlexContainerProps>`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: ${(props) => (props.$isDesktopLayout ? 'center' : 'initial')};
    padding: 200px 0 125px 0;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
`

export const GameChangerMainSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    return (
        <StyledFlexContainerBackground
            $isDesktopLayout={isDesktopLayout}
            minHeight="100vh"
            center
        >
            <Header variants="case" />
        </StyledFlexContainerBackground>
    )
}
