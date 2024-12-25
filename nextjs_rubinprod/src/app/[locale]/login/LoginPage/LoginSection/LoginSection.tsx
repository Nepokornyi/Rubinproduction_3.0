'use client'
import React from 'react'
import { LoginForm } from '../LoginForm/LoginForm'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Header } from '@/components/Header/Header'
import { Text } from '@/components/Text/Text'

export const LoginSection = () => {
    return (
        <FlexContainer
            center
            direction="flex-col"
            className="relative h-screen bg-no-repeat bg-[url('/img/showreel.jpg')] bg-top bg-cover pt-52 pb-32 overflow-hidden"
        >
            <Header />
            <Text variant="h2" textTransform="uppercase">
                Community
            </Text>
            <LoginForm />
        </FlexContainer>
    )
}
