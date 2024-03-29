import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ContactForm } from './components/ContactForm'
import { ContactTitle } from './components/ContactTitle'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 100px 0px 100px 0;
`

export const ContactSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const flexDirection = isDesktopLayout ? 'row' : 'column'

    return (
        <StyledFlexContainer
            direction={flexDirection}
            justifyContent="center"
            alignItems="start"
        >
            <ContactTitle />
            <ContactForm />
        </StyledFlexContainer>
    )
}
