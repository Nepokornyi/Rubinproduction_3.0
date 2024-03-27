import { FlexContainer } from '../../../components/layout/FlexContainer'
import { PortfolioCarousel } from '../../../components/layout/Carousel/components/PortfolioCarousel/PortfolioCarousel'
import styled from 'styled-components'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { WorkGridPortfolio } from './components/WorkGridPortfolio/WorkGridPortfolio'
import { WorkTitle } from './components/WorkTitle'
import { Box } from '../../../components/layout/Box'

const StyledFlexContainer = styled(FlexContainer)`
    padding-top: 50px;
`

const TitleGrid = styled(Box)`
    display: grid;
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    margin-bottom: 25px;
`
const TitleContainer = styled(Box)`
    grid-area: 1 / 2 / 1 / 3;
`

export const WorkSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    const renderLayoutContent = isDesktopLayout ? (
        <WorkGridPortfolio
            title={
                <TitleGrid>
                    <TitleContainer>
                        <WorkTitle />
                    </TitleContainer>
                </TitleGrid>
            }
        />
    ) : (
        <>
            <WorkTitle />
            <PortfolioCarousel />
        </>
    )

    return (
        <StyledFlexContainer center={isDesktopLayout} direction="column">
            {renderLayoutContent}
        </StyledFlexContainer>
    )
}
