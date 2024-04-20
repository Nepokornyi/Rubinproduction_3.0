import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 400px;
`

export const AboutClient = () => {
    return (
        <StyledFlexContainer
            gap="20px"
            direction="column"
            justifyContent="space-between"
        >
            <FlexContainer direction="column" gap="20px">
                <Text $textTransform="uppercase" variant={'nav'}>
                    Client
                </Text>
                <Text $textTransform="uppercase" variant={'button'}>
                    Scooty
                </Text>
            </FlexContainer>
            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="20px 25px"
                    variant={'nav'}
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
        </StyledFlexContainer>
    )
}
