import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Text } from '../../../../components/Text/Text'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

import marketingFirst from '../../../../assets/img/gameChanger/marketing/marketingFirst.png'
import marketingSecond from '../../../../assets/img/gameChanger/marketing/marketingSecond.png'
import marketingThird from '../../../../assets/img/gameChanger/marketing/marketingThird.png'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

const MarketingContainer = styled(FlexContainer)`
    max-width: 1100px;
`

const RelativeText = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
    text-align: ${(props) => props.$textAlign};
    padding: ${(props) => props.$paddingOverride};
`

const StyledText = styled(Text)<LayoutFlexContainerProps>`
    position: absolute;
    top: ${(props) => (props.$isDesktopLayout ? '0' : 'auto')};
    right: ${(props) => (props.$isDesktopLayout ? '-475px' : '-80px')};
    bottom: ${(props) => !props.$isDesktopLayout && '-60px'};
    color: #7055ec;
`

export const DesktopSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('xl')
    const flexDirection = isDesktopLayout ? 'row' : 'column'

    return (
        <StyledFlexContainer center>
            <MarketingContainer
                direction="column"
                justifyContent="center"
                gap={'50px'}
            >
                <FlexContainer center={!isDesktopLayout}>
                    <RelativeText
                        $paddingOverride="0"
                        $textTransform="uppercase"
                        $textAlign="center"
                        variant={'h2'}
                    >
                        <Reveal removeRepeatedReveal={false} x={20}>
                            Integrated
                            <StyledText
                                $isDesktopLayout={isDesktopLayout}
                                fontFamily="Grunges"
                            >
                                Motion Design
                            </StyledText>
                        </Reveal>
                    </RelativeText>
                </FlexContainer>
                <FlexContainer
                    gap={'25px'}
                    direction={flexDirection}
                    center={!isDesktopLayout}
                >
                    <Reveal removeRepeatedReveal={false} x={15} delay={0.15}>
                        <img src={marketingFirst} />
                    </Reveal>
                    <Reveal removeRepeatedReveal={false} x={15} delay={0.3}>
                        <img src={marketingSecond} />
                    </Reveal>
                    <Reveal removeRepeatedReveal={false} x={15} delay={0.45}>
                        <img src={marketingThird} />
                    </Reveal>
                </FlexContainer>
            </MarketingContainer>
        </StyledFlexContainer>
    )
}
