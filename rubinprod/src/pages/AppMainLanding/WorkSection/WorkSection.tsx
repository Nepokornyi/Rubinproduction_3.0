import { useTranslation } from 'react-i18next'
import { Text } from '../../../components/Text/Text'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { PortfolioCarousel } from '../../../components/layout/Carousel/components/PortfolioCarousel/PortfolioCarousel'
import styled from 'styled-components'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'

const StyledFlexContainer = styled(FlexContainer)`
    padding-top: 50px;
`

export const WorkSection = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('sm')

    const renderLayoutContent = isDesktopLayout ? null : (
        <>
            <Text variant="h3" textTransform="uppercase">
                <Text fontFamily="Grunges" paddingOverride="5px">
                    our
                </Text>
                {t('workPage.title')}
            </Text>
            <Text variant="p">{t('workPage.description')}</Text>
            <PortfolioCarousel />
        </>
    )
    return (
        <StyledFlexContainer direction="column">
            {renderLayoutContent}
        </StyledFlexContainer>
    )
}
