import { Trans } from 'react-i18next'
import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'

const HeadingText = styled(Text)`
    line-height: 1.1;
    margin-top: 10px;
    margin-bottom: 20px;
    text-wrap: balance;
`

export const AboutCustomHeading = () => {
    return (
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
    )
}
