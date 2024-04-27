import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Text } from '../../../../components/Text/Text'

import scootyLogo from '../../../../assets/img/scooty/icoScootyColor.svg'

const StyledImage = styled.img`
    padding: 10px 25px 50px 25px;
    width: 250px;
    height: auto;
`

const ContentContainer = styled(FlexContainer)`
    padding: 0px 25px;
`

export const AboutCaseMobile = () => {
    return (
        <FlexContainer direction="column" alignItems="center" gap="75px">
            <FlexContainer justifyContent="space-between">
                <ContentContainer direction="column">
                    <Text $textTransform="uppercase" variant={'nav'}>
                        Client
                    </Text>
                    <Text $textTransform="uppercase" variant={'button'}>
                        Scooty
                    </Text>
                </ContentContainer>
                <ContentContainer direction="column">
                    <Text $textTransform="uppercase" variant={'nav'}>
                        Industry
                    </Text>
                    <Text $textTransform="uppercase" variant={'button'}>
                        Food Delivery
                    </Text>
                </ContentContainer>
            </FlexContainer>

            <StyledImage src={scootyLogo} />
        </FlexContainer>
    )
}
