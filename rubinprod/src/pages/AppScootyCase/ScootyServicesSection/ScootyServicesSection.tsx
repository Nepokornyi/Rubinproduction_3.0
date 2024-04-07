import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { Box } from '../../../components/layout/Box'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { Text } from '../../../components/Text/Text'
import icoX from '../../../assets/img/scooty/icoX.svg'

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
    left: -35px;
`

export const ScootyServicesSection = () => {
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
                    Strategy
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- Social media strategy</li>
                    <li>- Brand social audit</li>
                    <li>- Branding and design</li>
                </ul>
            </Card>

            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    Conception
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- Creative treatment</li>
                    <li>- Project planning, timelines and managements</li>
                    <li>
                        - Insight-inspired creative concept that speak to the
                        brand
                    </li>
                </ul>
            </Card>

            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    Production
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- One full production day</li>
                    <li>- Film crew of specialized talent</li>
                    <li>
                        - Video / photo content to fulfill all the needs of
                        startup`s marketing campaign
                    </li>
                </ul>
            </Card>

            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    Post-Production
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- Photo / video editing optimized by platforms</li>
                    <li>
                        - Assistance with publishing content on social media
                        platforms
                    </li>
                </ul>
            </Card>
        </StyledFlexContainer>
    )
}
