import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Box } from '../../../../components/layout/Box'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 375px;
`

const HeadingContainer = styled(Box)`
    height: 100px;
`

export const AboutChallengeDesktop = () => {
    return (
        <StyledFlexContainer gap="50px" direction="column">
            <HeadingContainer>
                <FlexContainer direction="column" gap="20px">
                    <Text $textTransform="uppercase" variant={'nav'}>
                        Industry
                    </Text>
                    <Text $textTransform="uppercase" variant={'button'}>
                        Food Delivery
                    </Text>
                </FlexContainer>
            </HeadingContainer>

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
