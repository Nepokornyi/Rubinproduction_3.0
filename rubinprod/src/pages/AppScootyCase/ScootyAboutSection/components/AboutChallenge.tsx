import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 400px;
`

export const AboutChallenge = () => {
    return (
        <StyledFlexContainer
            gap="20px"
            direction="column"
            justifyContent="space-between"
        >
            <FlexContainer direction="column" gap="20px">
                <Text $textTransform="uppercase" variant={'nav'}>
                    Industry
                </Text>
                <Text $textTransform="uppercase" variant={'button'}>
                    Food Delivery
                </Text>
            </FlexContainer>
            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="20px 25px"
                    variant={'nav'}
                >
                    Challenge
                </Text>
                <Text variant="p">
                    We fully equipped <strong>Scooty</strong> with digital
                    production and launched their startup in the media sphere.
                    Our comprehensive digital strategy enhanced visibility and
                    engagement, showcasing our commitment to driving success
                </Text>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
