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

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

const ShowReelGrid = styled(Box)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-width: 500px;
    max-height: 500px;
    gap: 5px;
`

const RelativeText = styled(Text)`
    position: relative;
`

const StyledText = styled(Text)`
    position: absolute;
    top: 0;
    right: -150px;
    color: #d7f000;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const InstagramImage = styled.img`
    width: auto;
    height: calc(100% + 50px);
    object-fit: cover;
    position: absolute;
    bottom: -145px;
    left: 0;
`

export const ScootySocialsSection = () => {
    return (
        <StyledFlexContainer>
            <FlexContainer direction="column" center gap="50px">
                <RelativeText textTransform="uppercase" variant={'h2'}>
                    Instagram
                    <StyledText fontFamily="Grunges">Grid</StyledText>
                </RelativeText>
                <ShowReelGrid>
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

            <FlexContainer>
                <InstagramImage src={instagramPhone} />
            </FlexContainer>
        </StyledFlexContainer>
    )
}
