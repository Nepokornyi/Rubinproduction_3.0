import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ContactForm } from './components/ContactForm'
import { ContactTitle } from './components/ContactTitle'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../components/layout/types'

const StyledFlexContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    padding: ${(props) => (props.$isDesktopLayout ? '200px 0' : '100px 0')};
`

export const ContactSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const flexDirection = isDesktopLayout ? 'row' : 'column'
    const minHeight = isDesktopLayout ? '60vh' : 'auto'

    return (
        <StyledFlexContainer
            direction={flexDirection}
            justifyContent="center"
            alignItems="start"
            minHeight={minHeight}
            $isDesktopLayout={isDesktopLayout}
        >
            <ContactTitle />
            <ContactForm />
        </StyledFlexContainer>
    )
}
