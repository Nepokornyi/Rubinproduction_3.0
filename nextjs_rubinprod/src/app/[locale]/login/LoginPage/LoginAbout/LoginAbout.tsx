import { Arrow } from '@/components/Arrow/Arrow'
import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { ParallaxContainer } from '@/components/Parallax/ParallaxContainer'
import { Reveal } from '@/components/Reveal/Reveal'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { LoginAboutDescription } from './LoginAboutDescription'
import { useTranslations } from 'next-intl'

export const LoginAbout = () => {
    const t = useTranslations('LoginPage')
    return (
        <FlexContainer
            id="about"
            justifyContent="justify-center"
            className="pt-36 pb-24 relative md:items-center"
        >
            <ParallaxContainer text={'Rubin Community'} />
            <FlexContainer
                className="md:w-[900px]"
                direction="flex-col"
                alignItems="items-center"
            >
                <Text
                    variant="h2"
                    textTransform="uppercase"
                    padding="px-6 md:px-0"
                    className="relative sm:text-center"
                >
                    {t('subtitle')}
                </Text>
                <LoginAboutDescription />
            </FlexContainer>
        </FlexContainer>
    )
}
