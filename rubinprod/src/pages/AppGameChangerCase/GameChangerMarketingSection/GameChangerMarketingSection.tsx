import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { DesktopSection } from './components/DesktopSection'
import { MobileSection } from './components/MobileSection'

export const GameChangerMarketingSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    const renderContent = isDesktopLayout ? (
        <DesktopSection />
    ) : (
        <MobileSection />
    )

    return <>{renderContent}</>
}
