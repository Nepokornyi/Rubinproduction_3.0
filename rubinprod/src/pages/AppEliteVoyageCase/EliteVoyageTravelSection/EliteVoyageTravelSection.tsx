import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Box } from '../../../components/layout/Box'
import { Text } from '../../../components/Text/Text'

import travelFirst from '../../../assets/img/eliteVoyage/travel/travelFirstItem.png'
import travelSecond from '../../../assets/img/eliteVoyage/travel/travelSecondItem.png'
import travelThird from '../../../assets/img/eliteVoyage/travel/travelThirdItem.png'

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

export const EliteVoyageTravelSection = () => {
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
                        Travel
                        <StyledText fontFamily="Grunges">Videos</StyledText>
                    </RelativeText>
                </Box>
                <FlexContainer gap={'25px'}>
                    <Box>
                        <img src={travelFirst} />
                        <Text
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            top funnel
                        </Text>
                        <br />
                        <Text $paddingOverride="0" variant={'p'}>
                            To attract the audience and pull potential buyers in
                            at the beginning of their journey
                        </Text>
                    </Box>
                    <Box>
                        <img src={travelSecond} />
                        <Text
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            middle funnel
                        </Text>
                        <br />
                        <Text $paddingOverride="0" variant={'p'}>
                            To show benefits of the product and continue to
                            build trust among your prospects
                        </Text>
                    </Box>
                    <Box>
                        <img src={travelThird} />
                        <Text
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            bottom funnel
                        </Text>
                        <br />
                        <Text $paddingOverride="0" variant={'p'}>
                            To help buyers do away with any lingering objections
                            they may have towards your solution through the
                            explainer and UGC content
                        </Text>
                    </Box>
                </FlexContainer>
            </MarketingContainer>
        </StyledFlexContainer>
    )
}
