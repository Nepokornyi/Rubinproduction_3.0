import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ContactForm } from './components/ContactForm'
import { ContactTitle } from './components/ContactTitle'

export const ContactSection = () => {
    return (
        <FlexContainer
            direction="column"
            justifyContent="center"
            minHeight="100vh"
        >
            <ContactTitle />
            <ContactForm />
        </FlexContainer>
    )
}
