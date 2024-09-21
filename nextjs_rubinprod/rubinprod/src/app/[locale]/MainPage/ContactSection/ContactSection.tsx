import { Box } from '@/components/Box/Box'
import { Button } from '@/components/Button/Button'
import { ButtonVariantsList } from '@/components/Button/types'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { ContactSectionTitle } from './components/ContactSectionTitle'
import { ContactSectionForm } from './components/ContactSectionForm'

type ContactSectionProps = {
    color?: ButtonVariantsList
}

export const ContactSection = ({ color }: ContactSectionProps) => {
    return (
        <FlexContainer center className="py-36">
            <ContactSectionTitle />
            <ContactSectionForm />
        </FlexContainer>
    )
}
