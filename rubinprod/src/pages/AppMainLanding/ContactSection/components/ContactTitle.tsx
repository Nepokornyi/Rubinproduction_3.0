import { useTranslation } from 'react-i18next'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import styled from 'styled-components'
import { CustomArrowDown } from '../../../../components/Arrow/Arrow'
import { Box } from '../../../../components/layout/Box'

const StyledText = styled(Text)`
    position: relative;
`

const StyledCustomArrowDown = styled(CustomArrowDown)`
    position: absolute;
    right: -17.5px;
    bottom: -10px;
`

export const ContactTitle = () => {
    const { t } = useTranslation()
    return (
        <FlexContainer direction="column">
            <Text variant="h2" textTransform="uppercase">
                {t('contactPage.title')}
            </Text>
            <Box>
                <StyledText
                    variant="h3"
                    textTransform="uppercase"
                    fontFamily="Grunges"
                >
                    {t('contactPage.subtitle')}
                    <StyledCustomArrowDown />
                </StyledText>
            </Box>
        </FlexContainer>
    )
}
