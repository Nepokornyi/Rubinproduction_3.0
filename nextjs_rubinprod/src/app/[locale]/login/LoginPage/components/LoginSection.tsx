'use client'
import React from 'react'
import { LoginForm } from '../LoginForm/LoginForm'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Image from 'next/image'
import showreel from '@/assets/img/showreel.jpg'
import { LoginDescription } from './LoginDescription'

export const LoginSection = () => {
    return (
        <FlexContainer
            center
            direction="flex-col"
            className="relative h-screen pt-52 pb-32 overflow-hidden"
        >
            <Image
                src={showreel}
                alt="showreel"
                className="absolute z-0 top-0 left-0 w-screen h-screen object-cover pointer-events-none"
            />

            <FlexContainer
                width="w-full md:w-3/4"
                gap="gap-10"
                className="relative px-6 flex-col xl:flex-row items-center"
            >
                <LoginDescription />
                <LoginForm />
            </FlexContainer>
        </FlexContainer>
    )
}
