import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'

import { Box } from '../../../../components/layout/Box'
import { useTranslation } from 'react-i18next'

const StyledFlexContainer = styled(FlexContainer)`
    max-width: 375px;
`

const HeadingContainer = styled(Box)`
    height: 100px;
`

export const AboutChallengeDesktop = () => {
    const { t } = useTranslation()
    const eliteVoyageChallenge = t('eliteVoyageCase.challenge')

    return (
        <StyledFlexContainer gap="75px" direction="column">
            <HeadingContainer>
                <FlexContainer direction="column" gap="20px">
                    <Text $textTransform="uppercase" variant={'nav'}>
                        Industry
                    </Text>
                    <Text $textTransform="uppercase" variant={'button'}>
                        Travel Agency
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
                <Text variant="p" dangerousText={eliteVoyageChallenge} />
            </FlexContainer>
        </StyledFlexContainer>
    )
}
