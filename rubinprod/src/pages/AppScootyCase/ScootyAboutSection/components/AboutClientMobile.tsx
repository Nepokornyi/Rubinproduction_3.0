import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 25px 25px;
`

export const AboutClientMobile = () => {
    return (
        <StyledFlexContainer direction="column" gap="25px">
            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="15px 25px"
                    variant="button"
                    $color="#D7F000"
                >
                    Client
                </Text>
                <Text variant="p">
                    <strong>Scooty</strong>, a food delivery startup, provides
                    couriers with stable income and flexible schedules. Their
                    platform connects couriers with delivery requests, fostering
                    a balanced work-life dynamic and revolutionizing the
                    industry for sustainability and equity
                </Text>
            </FlexContainer>

            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="15px 25px"
                    variant="button"
                    $color="#D7F000"
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
