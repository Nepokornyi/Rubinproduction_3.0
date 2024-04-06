import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'

import portfolioLeft from '../../../../../assets/img/portfolioLeft.png'
import portfolioRight from '../../../../../assets/img/portfolioRight.png'
import { WorkGridCallToAction } from './WorkGridCallToAction'
import { RevealBlock } from '../../../../../components/animations/reveal/RevealBlock'
import { Link } from 'react-router-dom'

const WorkGridContainer = styled(Box)`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-auto-flow: dense;
    row-gap: 50px;

    & > div {
        justify-self: center;
    }
`

const GridImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 470px;
    max-height: 650px;
`

const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const TabletGrid = () => {
    return (
        <WorkGridContainer>
            <Box>
                <RevealBlock>
                    <GridImage src={portfolioLeft} />
                    <StyledLink to="/scooty" />
                </RevealBlock>
            </Box>

            <Box>
                <RevealBlock>
                    <GridImage src={portfolioRight} />
                    <StyledLink to="/gamechanger" />
                </RevealBlock>
            </Box>
            <Box>
                <RevealBlock>
                    <GridImage src={portfolioRight} />
                    <StyledLink to="/elitevoyage" />
                </RevealBlock>
            </Box>

            <Box>
                <RevealBlock>
                    <GridImage src={portfolioRight} />
                    <StyledLink to="/scooty" />
                </RevealBlock>
            </Box>
            <WorkGridCallToAction />
        </WorkGridContainer>
    )
}
