import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { AboutCase } from './components/AboutCase'
import { AboutClient } from './components/AboutClient'
import { AboutChallenge } from './components/AboutChallenge'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    padding: 150px 0px 100px 0;
    flex-direction: ${(props) => (props.$isDesktopLayout ? 'row' : 'column')};
    align-items: ${(props) => !props.$isDesktopLayout && 'center'};
    gap: 20px;
`

export const ScootyAboutSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    // TODO: positioning and flexbox of elements

    return (
        <StyledFlexContainer
            id="about"
            $isDesktopLayout={isDesktopLayout}
            justifyContent="center"
            gap="20px"
        >
            <AboutCase />
            <AboutClient />
            <AboutChallenge />
        </StyledFlexContainer>
    )
}
