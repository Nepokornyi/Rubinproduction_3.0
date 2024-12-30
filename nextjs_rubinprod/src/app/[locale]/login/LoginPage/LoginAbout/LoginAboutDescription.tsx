import { Arrow } from '@/components/Arrow/Arrow'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Reveal } from '@/components/Reveal/Reveal'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

export const LoginAboutDescription = () => {
    const t = useTranslations('LoginPage')

    return (
        <FlexContainer
            width="w-auto"
            className="md:mb-24 mt-8 md:mt-12 flex-col md:flex-row"
        >
            <FlexContainer width="w-auto">
                <Text className="sm:text-center md:text-left md:max-w-[330px] md:mx-6">
                    {t('description')}
                </Text>
            </FlexContainer>
            <FlexContainer
                alignItems="items-center"
                width="w-auto"
                className="justify-center md:justify-end gap-3 my-16 md:my-0"
            >
                <Text
                    textTransform="uppercase"
                    padding="pl-6"
                    fontWeight="font-semibold"
                    className="tracking-[3px]"
                >
                    {t('pricing_1')}
                </Text>
                <div className="md:order-first">
                    <Reveal y={35} removeRepeatedReveal={false}>
                        <Arrow direction="down" className="rotate-180" />
                    </Reveal>
                </div>
                <Text
                    textTransform="uppercase"
                    padding="px-0"
                    fontWeight="font-semibold"
                    className="md:mr-2 tracking-[3px]"
                >
                    {t('pricing_2')}
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}
