import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Box } from '../../../components/layout/Box'
import { Text } from '../../../components/Text/Text'

import recruitmentFirst from '../../../assets/img/eliteVoyage/recruitment/recruitmentFirst.png'
import recruitmentSecond from '../../../assets/img/eliteVoyage/recruitment/recruitmentSecond.png'
import recruitmentThird from '../../../assets/img/eliteVoyage/recruitment/recruitmentThird.png'

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
    right: -225px;
    color: #b9965a;
`

export const EliteVoyageRecruitmentSection = () => {
    return (
        <StyledFlexContainer center>
            <MarketingContainer
                direction="column"
                justifyContent="center"
                gap={'50px'}
            >
                <Box>
                    <RelativeText
                        paddingOverride="0"
                        textTransform="uppercase"
                        variant={'h2'}
                    >
                        HR Recruitment
                        <StyledText fontFamily="Grunges">Videos</StyledText>
                    </RelativeText>
                </Box>
                <FlexContainer gap={'25px'}>
                    <img src={recruitmentFirst} />
                    <img src={recruitmentSecond} />
                    <img src={recruitmentThird} />
                </FlexContainer>
            </MarketingContainer>
        </StyledFlexContainer>
    )
}
