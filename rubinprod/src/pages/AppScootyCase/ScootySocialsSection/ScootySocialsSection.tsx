import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Box } from '../../../components/layout/Box'
import { Text } from '../../../components/Text/Text'

import firstGridImage from '../../../assets/img/scooty/instagramGrid/instaFirstImage.png'
import secondGridImage from '../../../assets/img/scooty/instagramGrid/instaSecondImage.png'
import thirdGridImage from '../../../assets/img/scooty/instagramGrid/instaThirdImage.png'
import fourthGridImage from '../../../assets/img/scooty/instagramGrid/instaFourthImage.png'
import fifthGridImage from '../../../assets/img/scooty/instagramGrid/instaFifthImage.png'
import sixthGridImage from '../../../assets/img/scooty/instagramGrid/instaSixthImage.png'
import seventhGridImage from '../../../assets/img/scooty/instagramGrid/instaSeventhImage.png'
import eighthGridImage from '../../../assets/img/scooty/instagramGrid/instaEighthImage.png'
import ninthGridImage from '../../../assets/img/scooty/instagramGrid/instaNinthGridImage.png'

import instagramPhone from '../../../assets/img/scooty/instagramPhone.png'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../components/layout/types'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    padding: ${(props) =>
        props.$isDesktopLayout ? '150px 0px 100px 0' : '50px 0px'};
`

const ShowReelGrid = styled(Box)<{ $isTabletLayout: boolean }>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-width: 500px;
    max-height: 500px;
    gap: 5px;
    padding: ${(props) => !props.$isTabletLayout && '25px'};
`

const RelativeText = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
`

const StyledText = styled(Text)<LayoutFlexContainerProps>`
    position: absolute;
    top: ${(props) => (props.$isDesktopLayout ? '0' : 'auto')};
    right: ${(props) => (props.$isDesktopLayout ? '-150px' : '-50px')};
    bottom: ${(props) => !props.$isDesktopLayout && '-50px'};
    color: #d7f000;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ImageContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    height: ${(props) => !props.$isDesktopLayout && '55vh'};
    min-height: ${(props) => !props.$isDesktopLayout && '500px'};
`

const InstagramImage = styled.img<LayoutFlexContainerProps>`
    position: absolute;
    bottom: -145px;
    left: ${(props) => (props.$isDesktopLayout ? '0' : '50%')};
    transform: ${(props) => !props.$isDesktopLayout && 'translateX(-50%)'};
    width: auto;
    height: calc(100% + 50px);
    object-fit: cover;
`

export const ScootySocialsSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('xl')
    const isTabletLayout = useBreakpointBiggerThan('md')
    const direction = isDesktopLayout ? 'row' : 'column'

    return (
        <StyledFlexContainer
            $isDesktopLayout={isDesktopLayout}
            direction={direction}
        >
            <FlexContainer direction="column" center gap="50px">
                <RelativeText $textTransform="uppercase" variant={'h2'}>
                    Instagram
                    <StyledText
                        $isDesktopLayout={isDesktopLayout}
                        fontFamily="Grunges"
                    >
                        Grid
                    </StyledText>
                </RelativeText>
                <ShowReelGrid $isTabletLayout={isTabletLayout}>
                    <Box>
                        <StyledImage src={firstGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={secondGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={thirdGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={fourthGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={fifthGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={sixthGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={seventhGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={eighthGridImage} />
                    </Box>
                    <Box>
                        <StyledImage src={ninthGridImage} />
                    </Box>
                </ShowReelGrid>
            </FlexContainer>

            <ImageContainer $isDesktopLayout={isDesktopLayout}>
                <InstagramImage
                    $isDesktopLayout={isDesktopLayout}
                    src={instagramPhone}
                />
            </ImageContainer>
        </StyledFlexContainer>
    )
}
