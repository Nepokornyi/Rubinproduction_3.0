import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'
import { WorkGridCallToAction } from './WorkGridCallToAction'

import portfolioLeft from '../../../../../assets/img/portfolioLeft.png'
import portfolioRight from '../../../../../assets/img/portfolioRight.png'
import { RevealBlock } from '../../../../../components/animations/reveal/RevealBlock'

const WorkGridContainer = styled(Box)`
    width: 80%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-auto-flow: dense;
    column-gap: 50px;
`

const ExpandedGridItem = styled(Box)`
    grid-row: span 2 / auto;
    height: 75%;
`

const RightGridItem = styled(Box)`
    margin-top: clamp(45px, 4.5vw, 10%);
`

const LeftGridItem = styled(Box)`
    transform: translateY(calc(-35%));
`

const GridImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const DesktopGrid = () => {
    return (
        <WorkGridContainer>
            <ExpandedGridItem>
                <RevealBlock>
                    <GridImage src={portfolioLeft} />
                </RevealBlock>
            </ExpandedGridItem>

            <RightGridItem>
                <RevealBlock>
                    <GridImage src={portfolioRight} />
                </RevealBlock>
            </RightGridItem>
            <RightGridItem>
                <RevealBlock>
                    <GridImage src={portfolioRight} />
                </RevealBlock>
            </RightGridItem>

            <LeftGridItem>
                <RevealBlock>
                    <GridImage src={portfolioRight} />
                </RevealBlock>
            </LeftGridItem>

            <WorkGridCallToAction />
        </WorkGridContainer>
    )
}
