import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { useTranslation } from 'react-i18next'
import { Text } from '../../../../components/Text/Text'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 25px 25px;
    span {
        display: inline-block;
    }
`

export const AboutClientMobile = () => {
    const { t } = useTranslation()
    const eliteVoyageChallenge = t('gameChangerCase.challenge')
    const eliteVoyageClient = t('gameChangerCase.client')

    return (
        <StyledFlexContainer direction="column" gap="25px">
            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="15px 25px"
                    variant="button"
                    $color="#B9965A"
                >
                    <Reveal y={-15} removeRepeatedReveal={false}>
                        Client
                    </Reveal>
                </Text>
                <Reveal delay={0.5} x={-20} removeRepeatedReveal={false}>
                    <Text variant="p">
                        <strong>EliteVoyage</strong> specializes in providing
                        hassle-free travel experiences, allowing you to discover
                        new places and create lasting memories without stress.
                        With a network of over 200 esteemed partners worldwide,
                        they ensure top-tier service on every journey, promising
                        comfort and quality every step of the way.
                    </Text>
                </Reveal>
            </FlexContainer>

            <FlexContainer direction="column">
                <Text
                    $textTransform="uppercase"
                    $paddingOverride="15px 25px"
                    variant="button"
                    $color="#B9965A"
                >
                    <Reveal y={-15} removeRepeatedReveal={false}>
                        Challenge
                    </Reveal>
                </Text>
                <Reveal delay={0.5} x={-20} removeRepeatedReveal={false}>
                    <Text variant="p">
                        This project presented a diverse challenge: we not only
                        produced videos but also developed a unique corporate
                        identity and tailored content to the company`s
                        principles. Across different styles, languages, and
                        platforms, we delivered exceptional content to meet the
                        client`s evolving needs.
                    </Text>
                </Reveal>
            </FlexContainer>
        </StyledFlexContainer>
    )
}
