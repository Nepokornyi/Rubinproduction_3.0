import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { AboutCaseDesktop } from './components/AboutCaseDesktop'
import { AboutClientDesktop } from './components/AboutClientDesktop'
import { AboutChallengeDesktop } from './components/AboutChallengeDesktop'
import { AboutCaseMobile } from './components/AboutCaseMobile'
import { AboutClientMobile } from './components/AboutClientMobile'
import { AboutChallengeMobile } from './components/AboutChallengeMobile'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    padding: ${(props) =>
        props.$isDesktopLayout ? '150px 0px 100px 0' : '50px 0px'};
    flex-direction: ${(props) => (props.$isDesktopLayout ? 'row' : 'column')};
    align-items: ${(props) => !props.$isDesktopLayout && 'center'};
    gap: 20px;
`

export const ScootyAboutSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const renderContent = isDesktopLayout ? (
        <>
            <AboutCaseDesktop />
            <AboutClientDesktop />
            <AboutChallengeDesktop />
        </>
    ) : (
        <>
            <AboutCaseMobile />
            <AboutChallengeMobile />
            <AboutClientMobile />
        </>
    )

    return (
        <StyledFlexContainer
            id="about"
            $isDesktopLayout={isDesktopLayout}
            justifyContent="center"
            gap="20px"
        >
            {renderContent}
        </StyledFlexContainer>
    )
}
