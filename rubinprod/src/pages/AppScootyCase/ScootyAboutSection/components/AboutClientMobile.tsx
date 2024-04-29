import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Reveal } from '../../../../components/animations/reveal/Reveal'
import { useTranslation } from 'react-i18next'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 25px 25px;
    span {
        display: inline-block;
    }
`

export const AboutClientMobile = () => {
    const { t } = useTranslation()
    const scootyChallenge = t('scootyCase.challenge')
    const scootyClient = t('scootyCase.client')

    return (
        <StyledFlexContainer direction="column" gap="25px">
            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="15px 25px"
                    variant="button"
                    $color="#D7F000"
                >
                    <Reveal y={-15} removeRepeatedReveal={false}>
                        Client
                    </Reveal>
                </Text>
                <Reveal delay={0.5} x={-20} removeRepeatedReveal={false}>
                    <Text variant="p" dangerousText={scootyChallenge} />
                </Reveal>
            </FlexContainer>

            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="15px 25px"
                    variant="button"
                    $color="#D7F000"
                >
                    <Reveal y={-15} removeRepeatedReveal={false}>
                        Challenge
                    </Reveal>
                </Text>
                <Reveal delay={0.5} x={-20} removeRepeatedReveal={false}>
                    <Text variant="p" dangerousText={scootyClient} />
                </Reveal>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
