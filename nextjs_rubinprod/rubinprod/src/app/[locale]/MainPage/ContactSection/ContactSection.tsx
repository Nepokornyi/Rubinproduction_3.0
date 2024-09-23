import { ButtonVariantsList } from '@/components/Button/types'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { ContactSectionTitle } from './components/ContactSectionTitle'
import { ContactSectionForm } from './components/ContactSectionForm'

type ContactSectionProps = {
    color?: ButtonVariantsList
}

export const ContactSection = ({ color }: ContactSectionProps) => {
    return (
        <FlexContainer center className="py-28 md:py-36 flex-col md:flex-row">
            <ContactSectionTitle />
            <ContactSectionForm />
        </FlexContainer>
    )
}
