import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'
import { WorkGridCallToAction } from './WorkGridCallToAction'
import { RevealBlock } from '../../../../../components/animations/reveal/RevealBlock'
import { Link } from 'react-router-dom'

import scootyCase from '../../../../../assets/img/work/bigScooty.png'
import gameChangerCase from '../../../../../assets/img/work/bigGameChanger.png'
import eliteVoyageCase from '../../../../../assets/img/work/bigEliteVoyage.png'
import icoScooty from '../../../../../assets/img/work/icoScooty.png'
import icoGameChanger from '../../../../../assets/img/work/icoGameChanger.png'
import icoEliteVoyage from '../../../../../assets/img/work/icoEliteVoyage.png'
import { Placeholder } from './Placeholder'

const WorkGridContainer = styled(Box)`
    width: 80%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-auto-flow: dense;
    column-gap: 50px;
`

const ImageLogo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: auto;
    transition: 0.5s ease-in-out;
    opacity: 0.4;
`

const ExpandedGridItem = styled(Box)`
    grid-row: span 2 / auto;
    height: 75%;
    transition: 0.5s ease-in-out;
    &:hover {
        box-shadow: rgba(217, 30, 55, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        ${ImageLogo} {
            opacity: 1;
        }
    }
`

const RightGridItem = styled(Box)`
    margin-top: clamp(45px, 4.5vw, 10%);
    z-index: 2;
    transition: 0.5s ease-in-out;
    &:hover {
        box-shadow: rgba(217, 30, 55, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        ${ImageLogo} {
            opacity: 1;
        }
    }
`

const LeftGridItem = styled(Box)`
    transform: translateY(calc(-35%));
    transition: 0.5s ease-in-out;
    &:hover {
        box-shadow: rgba(217, 30, 55, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        ${ImageLogo} {
            opacity: 1;
        }
    }
`

const GridImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const DesktopGrid = () => {
    return (
        <>
            <WorkGridContainer>
                <ExpandedGridItem>
                    <RevealBlock>
                        <ImageLogo src={icoScooty} />
                        <GridImage src={scootyCase} />
                        <StyledLink to="/scooty" />
                    </RevealBlock>
                </ExpandedGridItem>

                <RightGridItem>
                    <RevealBlock>
                        <ImageLogo src={icoGameChanger} />
                        <GridImage src={gameChangerCase} />
                        <StyledLink to="/gamechanger" />
                    </RevealBlock>
                </RightGridItem>
                <RightGridItem>
                    <RevealBlock>
                        <ImageLogo src={icoEliteVoyage} />
                        <GridImage src={eliteVoyageCase} />
                        <StyledLink to="/elitevoyage" />
                    </RevealBlock>
                </RightGridItem>

                <LeftGridItem>
                    <RevealBlock>
                        <Placeholder />
                        <StyledLink to="/" />
                    </RevealBlock>
                </LeftGridItem>

                <WorkGridCallToAction />
            </WorkGridContainer>
        </>
    )
}
