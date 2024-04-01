import { useBreakpointBiggerThan } from '../../../../../helpers/useCurrentBreakpoint'
import { DesktopGrid } from './DesktopGrid'
import { TabletGrid } from './TabletGrid'

type WorkGridPortfolioProps = {
    title: React.ReactNode
}

export const WorkGridPortfolio = ({ title }: WorkGridPortfolioProps) => {
    const isLargeDesktopLayout = useBreakpointBiggerThan('lg')
    const isTabletLayout = useBreakpointBiggerThan('sm')

    const renderDesktopGrid = isLargeDesktopLayout && <DesktopGrid />
    const renderTabletGrid = !isLargeDesktopLayout && isTabletLayout && (
        <TabletGrid />
    )

    return (
        <>
            {title} {renderDesktopGrid} {renderTabletGrid}
        </>
    )
}
