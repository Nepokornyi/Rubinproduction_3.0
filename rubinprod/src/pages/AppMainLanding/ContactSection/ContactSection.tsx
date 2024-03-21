import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ContactForm } from './components/ContactForm'
import { ContactTitle } from './components/ContactTitle'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 100px 0px 100px 0;
`

export const ContactSection = () => {
    return (
        <StyledFlexContainer direction="column" justifyContent="center">
            <ContactTitle />
            <ContactForm />
        </StyledFlexContainer>
    )
}
