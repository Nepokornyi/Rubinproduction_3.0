'use client'
import React from 'react'
import { LoginForm } from '../LoginForm/LoginForm'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Header } from '@/components/Header/Header'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import showreel from '@/assets/img/showreel.jpg'

export const LoginSection = () => {
    const t = useTranslations('LoginPage')
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

            <Header />
            <FlexContainer
                className="relative"
                direction="flex-col"
                justifyContent="justify-center"
                alignItems="items-center"
            >
                <Text variant="h2" textTransform="uppercase">
                    {t('title')}
                </Text>
                <LoginForm />
            </FlexContainer>
        </FlexContainer>
    )
}
