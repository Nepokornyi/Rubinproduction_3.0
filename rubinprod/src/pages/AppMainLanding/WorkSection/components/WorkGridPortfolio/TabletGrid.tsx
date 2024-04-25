import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'

import { WorkGridCallToAction } from './WorkGridCallToAction'
import { RevealBlock } from '../../../../../components/animations/reveal/RevealBlock'
import { Link } from 'react-router-dom'
import { Placeholder } from './Placeholder'

import scootyCase from '../../../../../assets/img/work/bigScooty.png'
import gameChangerCase from '../../../../../assets/img/work/bigGameChanger.png'
import eliteVoyageCase from '../../../../../assets/img/work/bigEliteVoyage.png'
import icoScooty from '../../../../../assets/img/work/icoScooty.png'
import icoGameChanger from '../../../../../assets/img/work/icoGameChanger.png'
import icoEliteVoyage from '../../../../../assets/img/work/icoEliteVoyage.png'

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

const ImageLogo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: auto;
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
                    <ImageLogo src={icoScooty} />
                    <GridImage src={scootyCase} />
                    <StyledLink to="/scooty" />
                </RevealBlock>
            </Box>

            <Box>
                <RevealBlock>
                    <ImageLogo src={icoGameChanger} />
                    <GridImage src={gameChangerCase} />
                    <StyledLink to="/gamechanger" />
                </RevealBlock>
            </Box>
            <Box>
                <RevealBlock>
                    <ImageLogo src={icoEliteVoyage} />
                    <GridImage src={eliteVoyageCase} />
                    <StyledLink to="/elitevoyage" />
                </RevealBlock>
            </Box>

            <Box>
                <RevealBlock>
                    <Placeholder />
                    <StyledLink to="/" />
                </RevealBlock>
            </Box>
            <WorkGridCallToAction />
        </WorkGridContainer>
    )
}
