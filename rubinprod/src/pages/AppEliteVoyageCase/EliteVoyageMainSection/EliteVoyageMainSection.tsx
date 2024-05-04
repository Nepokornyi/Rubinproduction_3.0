import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { Reveal } from '../../../components/animations/reveal/Reveal'

import background from '../../../assets/img/eliteVoyage/landingBackground.png'
import backgroundSmall from '../../../assets/img/eliteVoyage/landingBackgroundSmall.png'
import eliteVoyageLogo from '../../../assets/img/eliteVoyage/icoEliteVoyage.svg'

const StyledFlexContainerBackground = styled(FlexContainer)<
    LayoutFlexContainerProps & { $isTabletLayout: boolean }
>`
    background-image: ${(props) =>
        props.$isTabletLayout
            ? `url(${background})`
            : `url(${backgroundSmall})`};
    background-repeat: no-repeat;
    background-size: cover;
    padding: 200px 0 125px 0;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
`

const StyledIcon = styled.img<{ $isDesktopLayout: boolean }>`
    width: ${(props) => !props.$isDesktopLayout && '250px'};
`

export const EliteVoyageMainSection = () => {
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
                    $isDesktopLayout={isDesktopLayout}
                    src={eliteVoyageLogo}
                />
            </Reveal>
        </StyledFlexContainerBackground>
    )
}
