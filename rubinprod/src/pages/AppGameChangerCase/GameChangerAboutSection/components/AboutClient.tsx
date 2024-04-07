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
                <Text textTransform="uppercase" variant={'nav'}>
                    Client
                </Text>
                <Text textTransform="uppercase" variant={'button'}>
                    Game Changer
                </Text>
            </FlexContainer>
            <FlexContainer direction="column">
                <Text
                    textTransform="uppercase"
                    variant={'nav'}
                    paddingOverride="20px 25px"
                >
                    Client
                </Text>
                <Text variant="p">
                    <strong>GameChanger</strong> offers Warmup and Overtime
                    Patches, a two-part system designed to prevent hangovers.
                    With essential vitamins and nutrients, it ensures a
                    refreshed start after heavy drinking
                </Text>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
