import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { DesktopGridLayout, MobileGridLayout } from './GridElements'
import { useTranslations } from 'next-intl'

const DesktopTitle = () => {
    const t = useTranslations('WorkPage')

    return (
        <DesktopGridLayout>
            <FlexContainer direction="flex-col" className="col-start-2">
                <Text
                    fontWeight="font-bold"
                    variant="h4"
                    textTransform="uppercase"
                    className="relative"
                >
                    {t('title')}
                    <Text
                        variant="h3"
                        fontFamily="font-grunges"
                        className="absolute md:top-4 lg:top-2 md:-left-20"
                    >
                        {t('accent')}
                    </Text>
                </Text>
                <Text className="my-4">{t('description')}</Text>
            </FlexContainer>
        </DesktopGridLayout>
    )
}

const MobileTitle = () => {
    const t = useTranslations('WorkPage')

    return (
        <MobileGridLayout>
            <FlexContainer direction="flex-col" className="col-start-2">
                <Text
                    fontWeight="font-bold"
                    variant="h4"
                    textTransform="uppercase"
                    className="relative"
                >
                    <Text
                        variant="h4"
                        textTransform="uppercase"
                        fontFamily="font-grunges"
                        padding="px-0"
                        className="mr-1 !text-[34px]"
                    >
                        {t('accent')}
                    </Text>
                    {t('title')}
                </Text>
                <Text className="mt-2 mb-8">{t('description')}</Text>
            </FlexContainer>
        </MobileGridLayout>
    )
}

export const WorkSectionTitle = () => {
    return (
        <>
            <DesktopTitle />
            <MobileTitle />
        </>
    )
}
