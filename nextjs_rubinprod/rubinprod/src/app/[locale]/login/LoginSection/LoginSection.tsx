import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import React from 'react'

export const LoginSection = () => {
    return (
        <FlexContainer minHeight="min-h-100vh" center>
            <FlexContainer
                direction="flex-col"
                gap="gap-2"
                className="px-6 lg:px-0 lg:w-1/2"
                justifyContent="justify-center"
            >
                <Input placeholder="login" color="login" />
                <FlexContainer>
                    <Button className="mr-6" type="submit">
                        Log in
                    </Button>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
