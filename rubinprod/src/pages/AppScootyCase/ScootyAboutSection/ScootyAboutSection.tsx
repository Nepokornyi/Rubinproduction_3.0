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
import { Reveal } from '../../../components/animations/reveal/Reveal'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    padding: ${(props) =>
        props.$isDesktopLayout ? '150px 0px 100px 0' : '50px 0px'};
    flex-direction: ${(props) => (props.$isDesktopLayout ? 'row' : 'column')};
    align-items: ${(props) => !props.$isDesktopLayout && 'center'};
    gap: 20px;
    overflow: hidden;
`

export const ScootyAboutSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const renderContent = isDesktopLayout ? (
        <>
            <Reveal removeRepeatedReveal={false} x={20}>
                <AboutCaseDesktop />
            </Reveal>
            <Reveal delay={0.5} removeRepeatedReveal={false} x={30}>
                <AboutClientDesktop />
            </Reveal>
            <Reveal delay={1} removeRepeatedReveal={false} x={40}>
                <AboutChallengeDesktop />
            </Reveal>
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
