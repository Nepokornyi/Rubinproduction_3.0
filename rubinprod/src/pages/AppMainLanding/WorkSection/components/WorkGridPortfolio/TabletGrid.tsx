import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'

import portfolioLeft from '../../../../../assets/img/portfolioLeft.png'
import portfolioRight from '../../../../../assets/img/portfolioRight.png'
import { WorkGridCallToAction } from './WorkGridCallToAction'

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

export const TabletGrid = () => {
    return (
        <WorkGridContainer>
            <Box>
                <GridImage src={portfolioLeft} />
            </Box>

            <Box>
                <GridImage src={portfolioRight} />
            </Box>
            <Box>
                <GridImage src={portfolioRight} />
            </Box>

            <Box>
                <GridImage src={portfolioRight} />
            </Box>
            <WorkGridCallToAction />
        </WorkGridContainer>
    )
}
