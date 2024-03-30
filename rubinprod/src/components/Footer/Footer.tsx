import { FlexContainer } from '../../components/layout/FlexContainer'

import { useBreakpointBiggerThan } from '../../helpers/useCurrentBreakpoint'
import { DesktopFooter } from './components/DesktopFooter'
import { MobileFooter } from './components/MobileFooter'

export const Footer = () => {
    const isDesktopLayout = useBreakpointBiggerThan('lg')

    const renderDesktopFooter = isDesktopLayout ? (
        <DesktopFooter />
    ) : (
        <MobileFooter />
    )

    return (
        <FlexContainer direction="column" center>
            {renderDesktopFooter}
        </FlexContainer>
    )
}
