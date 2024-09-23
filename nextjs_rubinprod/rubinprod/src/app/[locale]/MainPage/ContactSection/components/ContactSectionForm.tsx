import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import React from 'react'

export const ContactSectionForm = () => {
    return (
        <form className="md:max-w-[550px] w-full">
            <FlexContainer direction="flex-col">
                <Input placeholder="email" />
                <Input placeholder="phone" />
                <Button className="md:border-none mx-6 md:bg-black">
                    Poslat Zadost
                </Button>
            </FlexContainer>
        </form>
    )
}
