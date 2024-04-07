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
                <Text textTransform="uppercase" variant={'nav'}>
                    Industry
                </Text>
                <Text textTransform="uppercase" variant={'button'}>
                    Hangover Patches
                </Text>
            </FlexContainer>
            <FlexContainer direction="column">
                <Text
                    textTransform="uppercase"
                    variant={'nav'}
                    paddingOverride="20px 25px"
                >
                    Challenge
                </Text>
                <Text variant="p">
                    We methodically crafted a{' '}
                    <strong>full content funnel</strong>, directing potential
                    buyers from initial interest in the product all the way
                    through to purchase, with a focus on dynamic short form
                    videos, integrated motion design parts with patches benefits
                    and product photography
                </Text>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
