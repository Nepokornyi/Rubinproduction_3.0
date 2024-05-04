import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Box } from '../../../components/layout/Box'

import firstGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/firstGridItem.png'
import secondGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/secondGridItem.png'
import thirdGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/thirdGridItem.png'
import fourthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/fourthGridItem.png'
import fifthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/fifthGridItem.png'
import sixthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/sixthGridItem.png'

import alternativeFirstGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/alternativeFirstGridItem.png'
import alternativeSecondGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/alternativeSecondGridItem.png'
import alternativeThirdGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/alternativeThirdGridItem.png'
import alternativeFourthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/alternativeFourthGridItem.png'
// fifth is the same as first
import alternativeSixthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/alternativeSixthGridItem.png'

import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { RevealBlock } from '../../../components/animations/reveal/RevealBlock'

type GameChangerShowReelProps = {
    variant: 'first' | 'second'
}

const StyledFlexContainer = styled(FlexContainer)`
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    height: 100vh;
`

const ShowReelGrid = styled(Box)<{ $isDesktopLayout: boolean }>`
    width: 100%;
    display: grid;
    grid-template-columns: ${(props) =>
        props.$isDesktopLayout ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)'};
    grid-template-rows: ${(props) =>
        props.$isDesktopLayout ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    gap: 15px;
`

const FirstGridItem = styled(Box)<{ $isDesktopLayout: boolean }>`
    grid-column: span 2 / auto;
    grid-row: ${(props) => !props.$isDesktopLayout && 'span 2 / auto'};
`
const SecondGridItem = styled(Box)<{ $isDesktopLayout: boolean }>`
    grid-row: ${(props) =>
        props.$isDesktopLayout ? 'span 2 / auto' : 'span 1 / auto'};
    grid-column: ${(props) => !props.$isDesktopLayout && 'span 2 / auto'};
`
const ThirdGridItem = styled(Box)<{ $isDesktopLayout: boolean }>`
    grid-column: span 2 / auto;
    grid-row: span 2 / auto;
`
const FourthGridItem = styled(Box)<{ $isDesktopLayout: boolean }>`
    grid-row: ${(props) =>
        props.$isDesktopLayout ? 'span 3 / auto' : 'span 1 / auto'};
    grid-column: span 2 / auto;
`
const FifthGridItem = styled(Box)<{ $isDesktopLayout: boolean }>`
    grid-row: span 2 / auto;
    grid-column: span 2 / auto;
`
const SixthGridItem = styled(Box)<{ $isDesktopLayout: boolean }>`
    grid-row: span 2 / auto;
    grid-column: ${(props) => !props.$isDesktopLayout && 'span 2 / auto'};
`
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const EliteVoyageShowReelSection = ({
    variant,
}: GameChangerShowReelProps) => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    return (
        <StyledFlexContainer>
            <ShowReelGrid $isDesktopLayout={isDesktopLayout}>
                {variant === 'first' ? (
                    <>
                        <FirstGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A">
                                <StyledImage src={firstGridImage} />
                            </RevealBlock>
                        </FirstGridItem>
                        <SecondGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.15}>
                                <StyledImage src={secondGridImage} />
                            </RevealBlock>
                        </SecondGridItem>
                        <ThirdGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.25}>
                                <StyledImage src={thirdGridImage} />
                            </RevealBlock>
                        </ThirdGridItem>
                        <FourthGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.3}>
                                <StyledImage src={fourthGridImage} />
                            </RevealBlock>
                        </FourthGridItem>
                        <FifthGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.35}>
                                <StyledImage src={fifthGridImage} />
                            </RevealBlock>
                        </FifthGridItem>
                        <SixthGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.4}>
                                <StyledImage src={sixthGridImage} />
                            </RevealBlock>
                        </SixthGridItem>
                    </>
                ) : (
                    <>
                        <FirstGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A">
                                <StyledImage src={alternativeFirstGridImage} />
                            </RevealBlock>
                        </FirstGridItem>
                        <SecondGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.15}>
                                <StyledImage src={alternativeSecondGridImage} />
                            </RevealBlock>
                        </SecondGridItem>
                        <ThirdGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.25}>
                                <StyledImage src={alternativeThirdGridImage} />
                            </RevealBlock>
                        </ThirdGridItem>
                        <FourthGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.3}>
                                <StyledImage src={alternativeFourthGridImage} />
                            </RevealBlock>
                        </FourthGridItem>
                        <FifthGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.35}>
                                <StyledImage src={firstGridImage} />
                            </RevealBlock>
                        </FifthGridItem>
                        <SixthGridItem $isDesktopLayout={isDesktopLayout}>
                            <RevealBlock blockColor="#B9965A" delay={0.4}>
                                <StyledImage src={alternativeSixthGridImage} />
                            </RevealBlock>
                        </SixthGridItem>
                    </>
                )}
            </ShowReelGrid>
        </StyledFlexContainer>
    )
}
