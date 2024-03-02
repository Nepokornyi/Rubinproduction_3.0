import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { ArrowRight } from '../../../../components/Button/Arrow'
import { Trans, useTranslation } from 'react-i18next'

const HeadingText = styled(Text)`
    line-height: 1.1;
    margin-top: 10px;
    margin-bottom: 20px;
    text-wrap: balance;
`

const StyledText = styled(Text)`
    position: relative;
    margin: 75px 0;
    word-spacing: 30px;
    letter-spacing: 3px;
    pointer-events: none;
`

const StyledArrowRight = styled(ArrowRight)`
    position: absolute;
    left: 90px;
    top: -35px;
    transform: rotate(90deg);
    transform-origin: left;
`

export const AboutTitle = () => {
    const { t } = useTranslation()

    return (
        <>
            <HeadingText variant="h2" textTransform="uppercase">
                <Trans i18nKey="aboutPage.title">
                    Creating
                    <Text
                        paddingOverride="0 10px 0 10px"
                        variant="h2"
                        textTransform={'uppercase'}
                        fontFamily="Grunges"
                    >
                        the best
                    </Text>
                    videos for you
                </Trans>
            </HeadingText>
            <Text variant="p">{t('aboutPage.description')}</Text>
            <FlexContainer justifyContent="center">
                <StyledText textTransform="uppercase" fontWeight="600">
                    {t('aboutPage.clients')}
                    <StyledArrowRight />
                </StyledText>
            </FlexContainer>
        </>
    )
}
