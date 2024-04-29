import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import background from '../../../assets/img/scooty/scootyLandingBackground.png'
import backgroundSmall from '../../../assets/img/scooty/scootyLandingBackgroundSmall.png'
import scootyLogo from '../../../assets/img/scooty/icoScootyLanding.svg'
import { Reveal } from '../../../components/animations/reveal/Reveal'

const StyledFlexContainerBackground = styled(FlexContainer)<
    LayoutFlexContainerProps & { $isTabletLayout: boolean }
>`
    background-image: ${(props) =>
        props.$isTabletLayout
            ? `url(${background})`
            : `url(${backgroundSmall})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 200px 0 125px 0;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
`

const StyledIcon = styled.img<{ $isDesktopLayout: boolean }>`
    width: ${(props) => !props.$isDesktopLayout && '250px'};
`

export const ScootyMainSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isTabletLayout = useBreakpointBiggerThan('sm')

    return (
        <StyledFlexContainerBackground
            $isDesktopLayout={isDesktopLayout}
            $isTabletLayout={isTabletLayout}
            minHeight="100vh"
            center
        >
            <Reveal delay={1.5}>
                <StyledIcon
                    src={scootyLogo}
                    $isDesktopLayout={isDesktopLayout}
                />
            </Reveal>
        </StyledFlexContainerBackground>
    )
}
