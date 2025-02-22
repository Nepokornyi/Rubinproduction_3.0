import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'
import './animation.css'

export const LoginDescription = () => {
    const t = useTranslations('LoginPage')

    return (
        <FlexContainer
            direction="flex-col"
            gap="gap-10"
            justifyContent="justify-center"
            className="cursor-default"
        >
            <Text
                variant="h5"
                textTransform="uppercase"
                padding="px-0"
                className="relative text-center xl:text-left"
            >
                {t('subtitle')}
            </Text>

            <FlexContainer gap="gap-10" className="hidden xl:flex flex-col">
                <FlexContainer
                    width="w-auto"
                    direction="flex-col"
                    className="md:pl-12 relative"
                >
                    <div className="absolute top-0 left-0 w-4 h-full rounded-2xl login-pricing-gradient outline outline-1 outline-transparent hover:outline-white duration-300" />
                    <Text>
                        Vzdělávací materiály <strong>zdarma</strong>
                    </Text>
                    <Text>Možnost propojeni se stejně smyšlejícími tvůrci</Text>
                </FlexContainer>
                <FlexContainer
                    width="w-auto"
                    direction="flex-col"
                    className="md:pl-12 relative"
                >
                    <div className="absolute top-0 left-0 w-4 h-full rounded-2xl login-pricing-gradient-alternative outline outline-1 outline-transparent hover:outline-white duration-300" />

                    <Text>Exkluzivní vzdělávací materiály</Text>
                    <Text
                        variant="socials"
                        fontWeight="font-semibold"
                        textTransform="uppercase"
                    >
                        {t('pricing')}
                    </Text>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
