import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { Box } from '../../../components/layout/Box'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { Text } from '../../../components/Text/Text'

import icoX from '../../../assets/img/gameChanger/icoX.png'

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

export const GameChangerServicesSection = () => {
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
                    social media advertising
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- Top funnel brand marketing video</li>
                    <li>- Middle funnel dynamic product videos</li>
                    <li>
                        - Bottom funnel “application”, unboxing, “how it works”
                        videos
                    </li>
                    <li>- UGC - style content</li>
                </ul>
            </Card>

            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    motion design / animations
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- Integrated animations</li>
                    <li>- Separate creative video ads</li>
                </ul>
            </Card>

            <Card>
                <TitleRelativeText
                    paddingOverride="0"
                    variant="button"
                    textTransform="uppercase"
                >
                    product photography
                    <AbsoluteX src={icoX} alt="" />
                </TitleRelativeText>
                <ul>
                    <li>- For website, promoting, internal purposes</li>
                    <li>- As thumbnails</li>
                </ul>
            </Card>
        </StyledFlexContainer>
    )
}
