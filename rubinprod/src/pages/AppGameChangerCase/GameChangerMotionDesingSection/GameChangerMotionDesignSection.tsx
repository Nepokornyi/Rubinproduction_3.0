import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Box } from '../../../components/layout/Box'
import { Text } from '../../../components/Text/Text'

import marketingFirst from '../../../assets/img/gameChanger/marketing/marketingFirst.png'
import marketingSecond from '../../../assets/img/gameChanger/marketing/marketingSecond.png'
import marketingThird from '../../../assets/img/gameChanger/marketing/marketingThird.png'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

const MarketingContainer = styled(FlexContainer)`
    max-width: 1100px;
`

const RelativeText = styled(Text)`
    position: relative;
`

const StyledText = styled(Text)`
    position: absolute;
    top: -10px;
    right: -475px;
    color: #7055ec;
`

export const GameChangerMotionDesignSection = () => {
    return (
        <StyledFlexContainer center>
            <MarketingContainer
                direction="column"
                justifyContent="center"
                gap={'50px'}
            >
                <Box>
                    <RelativeText
                        $paddingOverride="0"
                        $textTransform="uppercase"
                        variant={'h2'}
                    >
                        Integrated
                        <StyledText fontFamily="Grunges">
                            Motion Design
                        </StyledText>
                    </RelativeText>
                </Box>
                <FlexContainer gap={'25px'}>
                    <img src={marketingFirst} />
                    <img src={marketingSecond} />
                    <img src={marketingThird} />
                </FlexContainer>
            </MarketingContainer>
        </StyledFlexContainer>
    )
}
