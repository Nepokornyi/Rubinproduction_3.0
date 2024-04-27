import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Box } from '../../../components/layout/Box'

import firstGridImage from '../../../assets/img/scooty/ShowReelGrid/firstGridItem.png'
import secondGridImage from '../../../assets/img/scooty/ShowReelGrid/secondGridItem.png'
import thirdGridImage from '../../../assets/img/scooty/ShowReelGrid/thirdGridItem.png'
import fourthGridImage from '../../../assets/img/scooty/ShowReelGrid/fourthGridItem.png'
import fifthGridImage from '../../../assets/img/scooty/ShowReelGrid/fifthGridItem.png'
import sixthGridImage from '../../../assets/img/scooty/ShowReelGrid/sixthGridItem.png'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'

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

export const ScootyShowReelSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    return (
        <StyledFlexContainer>
            <ShowReelGrid $isDesktopLayout={isDesktopLayout}>
                <FirstGridItem $isDesktopLayout={isDesktopLayout}>
                    <StyledImage src={firstGridImage} />
                </FirstGridItem>
                <SecondGridItem $isDesktopLayout={isDesktopLayout}>
                    <StyledImage src={secondGridImage} />
                </SecondGridItem>
                <ThirdGridItem $isDesktopLayout={isDesktopLayout}>
                    <StyledImage src={thirdGridImage} />
                </ThirdGridItem>
                <FourthGridItem $isDesktopLayout={isDesktopLayout}>
                    <StyledImage src={fourthGridImage} />
                </FourthGridItem>
                <FifthGridItem $isDesktopLayout={isDesktopLayout}>
                    <StyledImage src={fifthGridImage} />
                </FifthGridItem>
                <SixthGridItem $isDesktopLayout={isDesktopLayout}>
                    <StyledImage src={sixthGridImage} />
                </SixthGridItem>
            </ShowReelGrid>
        </StyledFlexContainer>
    )
}
