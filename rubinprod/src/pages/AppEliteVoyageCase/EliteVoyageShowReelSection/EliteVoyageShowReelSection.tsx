import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Box } from '../../../components/layout/Box'

import firstGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/firstGridItem.png'
import secondGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/secondGridItem.png'
import thirdGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/thirdGridItem.png'
import fourthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/fourthGridItem.png'
import fifthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/fifthGridItem.png'
import sixthGridImage from '../../../assets/img/eliteVoyage/ShowReelGrid/sixthGridItem.png'

type GameChangerShowReelProps = {
    variant: 'first' | 'second'
}

const StyledFlexContainer = styled(FlexContainer)`
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    height: 100vh;
`

const ShowReelGrid = styled(Box)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 15px;
`

const FirstGridItem = styled(Box)`
    grid-column: span 2 / auto;
`
const SecondGridItem = styled(Box)`
    grid-row: span 2 / auto;
`
const ThirdGridItem = styled(Box)`
    grid-column: span 2 / auto;
    grid-row: span 2 / auto;
`
const FourthGridItem = styled(Box)`
    grid-row: span 3 / auto;
    grid-column: span 2 / auto;
`
const FifthGridItem = styled(Box)`
    grid-row: span 2 / auto;
    grid-column: span 2 / auto;
`
const SixthGridItem = styled(Box)`
    grid-row: span 2 / auto;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const EliteVoyageShowReelSection = ({
    variant,
}: GameChangerShowReelProps) => {
    return (
        <StyledFlexContainer>
            <ShowReelGrid>
                {variant === 'first' ? (
                    <>
                        <FirstGridItem>
                            <StyledImage src={firstGridImage} />
                        </FirstGridItem>
                        <SecondGridItem>
                            <StyledImage src={secondGridImage} />
                        </SecondGridItem>
                        <ThirdGridItem>
                            <StyledImage src={thirdGridImage} />
                        </ThirdGridItem>
                        <FourthGridItem>
                            <StyledImage src={fourthGridImage} />
                        </FourthGridItem>
                        <FifthGridItem>
                            <StyledImage src={fifthGridImage} />
                        </FifthGridItem>
                        <SixthGridItem>
                            <StyledImage src={sixthGridImage} />
                        </SixthGridItem>
                    </>
                ) : (
                    <>
                        <FirstGridItem>
                            <StyledImage src={firstGridImage} />
                        </FirstGridItem>
                        <SecondGridItem>
                            <StyledImage src={secondGridImage} />
                        </SecondGridItem>
                        <ThirdGridItem>
                            <StyledImage src={thirdGridImage} />
                        </ThirdGridItem>
                        <FourthGridItem>
                            <StyledImage src={fourthGridImage} />
                        </FourthGridItem>
                        <FifthGridItem>
                            <StyledImage src={fifthGridImage} />
                        </FifthGridItem>
                        <SixthGridItem>
                            <StyledImage src={sixthGridImage} />
                        </SixthGridItem>
                    </>
                )}
            </ShowReelGrid>
        </StyledFlexContainer>
    )
}