import { useTranslation } from 'react-i18next'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import styled from 'styled-components'
import { ArrowDown } from '../../../../components/Arrow/variants'

const StyledArrowDown = styled(ArrowDown)`
    right: -10px;
    bottom: 50px;
    transform-origin: bottom;
`

export const ContactTitle = () => {
    const { t } = useTranslation()
    return (
        <FlexContainer direction="column">
            <Text variant="h2" textTransform="uppercase">
                {t('contactPage.title')}
            </Text>
            <Text variant="h3" textTransform="uppercase" fontFamily="Grunges">
                {t('contactPage.subtitle')}
            </Text>
            <StyledArrowDown />
        </FlexContainer>
    )
}
