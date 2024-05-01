import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'

import marketingFirst from '../../../../assets/img/gameChanger/marketing/marketingFirst.png'
import marketingSecond from '../../../../assets/img/gameChanger/marketing/marketingSecond.png'
import marketingThird from '../../../../assets/img/gameChanger/marketing/marketingThird.png'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

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
    right: ${(props) => (props.$isDesktopLayout ? '-245px' : '-50px')};
    bottom: ${(props) => !props.$isDesktopLayout && '-50px'};
    color: #7055ec;
`
const ContentContainer = styled(Box)`
    max-width: 345px;
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
                        $textAlign={'center'}
                        variant={'h2'}
                    >
                        <Reveal removeRepeatedReveal={false} x={20}>
                            Marketing
                            <StyledText
                                $isDesktopLayout={isDesktopLayout}
                                fontFamily="Grunges"
                            >
                                Videos
                            </StyledText>
                        </Reveal>
                    </RelativeText>
                </FlexContainer>
                <FlexContainer
                    gap={'25px'}
                    direction={flexDirection}
                    center={!isDesktopLayout}
                >
                    <ContentContainer>
                        <Reveal
                            removeRepeatedReveal={false}
                            x={15}
                            delay={0.15}
                        >
                            <img src={marketingFirst} />
                        </Reveal>
                        <Reveal
                            removeRepeatedReveal={false}
                            y={15}
                            delay={0.15}
                        >
                            <Text
                                $paddingOverride="0"
                                $textTransform="uppercase"
                                variant="button"
                            >
                                top funnel
                            </Text>
                            <br />
                            <Text $paddingOverride="0" variant={'p'}>
                                To attract the audience and pull potential
                                buyers in at the beginning of their journey
                            </Text>
                        </Reveal>
                    </ContentContainer>
                    <ContentContainer>
                        <Reveal removeRepeatedReveal={false} x={15} delay={0.3}>
                            <img src={marketingSecond} />
                        </Reveal>
                        <Reveal removeRepeatedReveal={false} y={15} delay={0.3}>
                            <Text
                                $paddingOverride="0"
                                $textTransform="uppercase"
                                variant="button"
                            >
                                middle funnel
                            </Text>
                            <br />
                            <Text $paddingOverride="0" variant={'p'}>
                                To show benefits of the product and continue to
                                build trust among your prospects
                            </Text>
                        </Reveal>
                    </ContentContainer>
                    <ContentContainer>
                        <Reveal
                            removeRepeatedReveal={false}
                            x={15}
                            delay={0.45}
                        >
                            <img src={marketingThird} />
                        </Reveal>
                        <Reveal
                            removeRepeatedReveal={false}
                            y={15}
                            delay={0.45}
                        >
                            <Text
                                $paddingOverride="0"
                                $textTransform="uppercase"
                                variant="button"
                            >
                                bottom funnel
                            </Text>
                            <br />
                            <Text $paddingOverride="0" variant={'p'}>
                                To help buyers do away with any lingering
                                objections they may have towards your solution
                                through the explainer and UGC content
                            </Text>
                        </Reveal>
                    </ContentContainer>
                </FlexContainer>
            </MarketingContainer>
        </StyledFlexContainer>
    )
}
