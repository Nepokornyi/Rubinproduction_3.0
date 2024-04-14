import styled from 'styled-components'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { Box } from '../../../components/layout/Box'
import { Text } from '../../../components/Text/Text'

import icoX from '../../../assets/img/eliteVoyage/icoX.png'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    padding: 150px 0px 100px 0;
    flex-direction: ${(props) => (props.$isDesktopLayout ? 'row' : 'column')};
`

const Card = styled(Box)`
    max-width: 300px;

    ul {
        list-style: none;
        li {
            margin-top: 10px;
        }
    }
`

const TitleRelativeText = styled(Text)`
    position: relative;
`

const AbsoluteX = styled.img`
    position: absolute;
    bottom: 0;
    left: -55px;
`

export const EliteVoyageServicesSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    return (
        <StyledFlexContainer
            $isDesktopLayout={isDesktopLayout}
            justifyContent="space-evenly"
        >
            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    full-cycle production
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>

                <ul>
                    <li>- Concept Development, Planning, Storyboarding</li>
                    <li>- 1 production day monthly =</li>
                    <li>more than 100 videos in different</li>
                </ul>
            </Card>

            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    brand identity
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- Brand style guide</li>
                    <li>- Motion design templates </li>
                    <li>- Logo/nametags animations</li>
                </ul>
            </Card>

            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    social media content
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- Travel videos </li>
                    <li>- Expert content</li>
                    <li>- HR recruitment videos</li>
                    <li>- Employee Spotlights</li>
                </ul>
            </Card>
        </StyledFlexContainer>
    )
}
