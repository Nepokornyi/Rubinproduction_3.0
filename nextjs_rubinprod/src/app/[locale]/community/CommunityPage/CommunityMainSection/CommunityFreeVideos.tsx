import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { CommunityHeader } from '@/components/Header/CommunityHeader'
import { useTranslations } from 'next-intl'
import { CommunityVideosGrid } from '../CommunityVideos/CommunityVideosGrid'
import { freeVideoConfig } from '@/config/freeVideos'
import { useSubscriptionContext } from '../../context/SubscriptionContext'

export const CommunityFreeVideos = () => {
    const t = useTranslations('CommunityPage.main')
    const { isSubscribed } = useSubscriptionContext()

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
                    className="relative mt-12 p-2.5 pt-5 md:p-5"
                    center
                >
                    <CommunityVideosGrid
                        content={freeVideoConfig}
                        variant="free"
                    />
                </FlexContainer>
            </FlexContainer>
        </>
    )
}
