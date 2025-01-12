import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { VimeoVideo } from '../../../components/VimeoVideo/VimeoVideo'
import { CommunityHeader } from '@/components/Header/CommunityHeader'
import { useTranslations } from 'next-intl'

export const CommunityMainSection = ({
    isSubscribed,
}: {
    isSubscribed: boolean
}) => {
    const t = useTranslations('CommunityPage.main')

    return (
        <>
            <CommunityHeader isSubscribed={isSubscribed} />
            <FlexContainer
                direction="flex-col"
                alignItems="items-center"
                minHeight="min-h-auto"
                className="relative pt-40 px-5 md:px-0"
            >
                <Text
                    variant="h2"
                    textTransform="uppercase"
                    fontFamily="font-grunges"
                >
                    {t('title')}
                </Text>
                <FlexContainer
                    direction="flex-col"
                    width="w-full md:w-4/6"
                    className="relative bg-[#c4c4c4] mt-12 p-2.5 pt-5 md:p-5 rounded-3xl"
                    center
                >
                    <Text variant="nav" className="text-black">
                        {t('topic')}
                    </Text>
                    <Text
                        variant="h5"
                        className="text-black mb-5"
                        textTransform="uppercase"
                    >
                        {t('name')}
                    </Text>
                    <VimeoVideo id={1042286031} />
                </FlexContainer>
            </FlexContainer>
        </>
    )
}
