import { Text } from '@/components/Text/Text'
import React from 'react'
import { AboutCircleText } from './AboutCircleText'
import { useTranslations } from 'next-intl'

export const AboutSectionHeading = () => {
    const t = useTranslations('AboutPage')

    return (
        <Text
            variant="h2"
            textTransform="uppercase"
            padding="pb-8"
            className="text-balance relative w-72 md:w-auto"
            fontWeight="font-bold"
        >
            <span className="bg-[#0c0c0c]">{t('title')}</span>
            <Text
                variant="h2"
                fontFamily="font-grunges"
                className="!px-0 mx-0 md:mx-6"
            >
                {t('accent')}
            </Text>
            <br />
            <span className="bg-[#0c0c0c]">{t('subtitle')}</span>
            <AboutCircleText />
        </Text>
    )
}
