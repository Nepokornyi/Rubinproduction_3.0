import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { useTranslation } from 'react-i18next'
import { AboutCustomHeading } from './AboutCustomHeading'
import { ArrowDown } from '../../../../components/Arrow/variants'

const StyledText = styled(Text)`
    position: relative;
    margin: 75px 0 100px 0;
    word-spacing: 30px;
    letter-spacing: 3px;
    pointer-events: none;
`

const StyledArrowDown = styled(ArrowDown)`
    left: 90px;
    top: -35px;
    transform-origin: left;
`

export const AboutTitle = () => {
    const { t } = useTranslation()

    return (
        <>
            <AboutCustomHeading />
            <Text variant="p">{t('aboutPage.description')}</Text>
            <FlexContainer justifyContent="center">
                <StyledText textTransform="uppercase" fontWeight="600">
                    {t('aboutPage.clients')}
                    <StyledArrowDown />
                </StyledText>
            </FlexContainer>
        </>
    )
}
