import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import React from 'react'

import logo from '@/assets/img/RubinLetter.svg'
import { useTranslations } from 'next-intl'

type RubinTitleProps = {
    button?: React.ReactNode
}

const logoLetterStyles =
    '-left-3 md:-left-5 lg:-left-7 2xl:-left-8 -top-0.5 md:-top-5 lg:-top-7 2xl:-top-5 w-[70px] md:w-24 lg:w-32 2xl:w-44'

const firstLetterStyles =
    'first-letter:opacity-0 first-letter:text-6xl md:first-letter:text-[74px] lg:first-letter:text-8xl 2xl:first-letter:text-[148px]'

export const RubinTitle = ({ button }: RubinTitleProps) => {
    const t = useTranslations('MainPage')

    return (
        <Text textTransform="uppercase" variant="h1">
            <FlexContainer gap="gap-4" alignItems="items-center">
                <span
                    className={`relative ${firstLetterStyles} text-[#d91e37]`}
                >
                    {t('title_name')}
                    <Image
                        className={`absolute ${logoLetterStyles} select-none`}
                        src={logo}
                        alt="Rubin logo header placeholder"
                    />
                </span>
                {button}
            </FlexContainer>
            {t('subtitle')}
        </Text>
    )
}
