import { FlexContainer } from '../../../components/layout/FlexContainer'
import { PortfolioCarousel } from '../../../components/layout/Carousel/components/PortfolioCarousel/PortfolioCarousel'
import styled from 'styled-components'
import {
    useBreakpointBiggerThan,
    useCurrentBreakpoint,
} from '../../../helpers/useCurrentBreakpoint'
import { WorkGridPortfolio } from './components/WorkGridPortfolio/WorkGridPortfolio'
import { WorkTitle } from './components/WorkTitle'
import { Box } from '../../../components/layout/Box'
import { LayoutFlexContainerProps } from '../../../components/layout/types'

const StyledFlexContainer = styled(FlexContainer)`
    padding-top: 50px;
`

const TitleGrid = styled(Box)<LayoutFlexContainerProps>`
    display: grid;
    width: 80%;
    max-width: ${(props) => (props.$isDesktopLayout ? '470px' : '1100px')};
    grid-template-columns: ${(props) =>
        props.$isDesktopLayout ? '1fr' : 'repeat(2, 1fr)'};
    gap: 50px;
    margin-bottom: 25px;
`
const TitleContainer = styled(Box)`
    grid-area: 1 / 2 / 1 / 3;
`

export const WorkSection = () => {
    const smallBreakpoint = useCurrentBreakpoint() === 'sm'
    const mediumBreakpoint = useCurrentBreakpoint() === 'md'
    const isTabletLayout = smallBreakpoint || mediumBreakpoint
    const isDesktopLayout = useBreakpointBiggerThan('sm')

    console.log(useCurrentBreakpoint())
    console.log('isTabletLayout', isTabletLayout)

    const renderLayoutContent = isDesktopLayout ? (
        <WorkGridPortfolio
            title={
                <TitleGrid $isDesktopLayout={isTabletLayout}>
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
        <StyledFlexContainer
            id="portfolio"
            center={isDesktopLayout}
            direction="column"
        >
            {renderLayoutContent}
        </StyledFlexContainer>
    )
}
