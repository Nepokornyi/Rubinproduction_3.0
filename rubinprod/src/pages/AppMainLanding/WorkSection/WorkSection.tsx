import { useTranslation } from 'react-i18next'
import { Text } from '../../../components/Text/Text'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { PortfolioCarousel } from '../../../components/layout/Carousel/PortfolioCarousel'
import styled from 'styled-components'

const StyledFlexContainer = styled(FlexContainer)`
    padding-top: 50px;
`

export const WorkSection = () => {
    const { t } = useTranslation()
    return (
        <StyledFlexContainer direction="column">
            <Text variant="h3" textTransform="uppercase">
                <Text fontFamily="Grunges" paddingOverride="5px">
                    our
                </Text>
                {t('workPage.title')}
            </Text>
            <Text variant="p">{t('workPage.description')}</Text>
            <PortfolioCarousel />
        </StyledFlexContainer>
    )
}
