import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { useTranslation } from 'react-i18next'
import { Box } from '../../../../components/layout/Box'

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
                <Text variant="p">
                    This project presented a diverse challenge: we not only
                    produced videos but also developed a unique corporate
                    identity and tailored content to the company`s principles.
                    Across different styles, languages, and platforms, we
                    delivered exceptional content to meet the client`s evolving
                    needs.
                </Text>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
