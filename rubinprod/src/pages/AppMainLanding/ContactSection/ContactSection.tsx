import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ContactForm } from './components/ContactForm'
import { ContactTitle } from './components/ContactTitle'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { AppLandingVariants } from '../../../components/Header/Header'

type ContactSectionProps = {
    color?: string
    variant?: AppLandingVariants
}

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    padding: ${(props) => (props.$isDesktopLayout ? '200px 0' : '100px 0')};
`

export const ContactSection = ({
    color = '#0C0C0C',
    variant,
}: ContactSectionProps) => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const flexDirection = isDesktopLayout ? 'row' : 'column'
    const minHeight = isDesktopLayout ? '60vh' : 'auto'

    return (
        <StyledFlexContainer
            id={'contact'}
            direction={flexDirection}
            justifyContent="center"
            alignItems="start"
            minHeight={minHeight}
            $isDesktopLayout={isDesktopLayout}
        >
            <ContactTitle />
            <ContactForm color={color} variant={variant} />
        </StyledFlexContainer>
    )
}
