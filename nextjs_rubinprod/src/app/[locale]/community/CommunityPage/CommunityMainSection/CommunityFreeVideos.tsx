import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { useTranslations } from 'next-intl'
import { CommunityVideosGrid } from '../CommunityVideos/CommunityVideosGrid'
import { freeVideoConfig } from '@/config/freeVideos'

export const CommunityFreeVideos = () => {
    const t = useTranslations('CommunityPage.main')

    return (
        <>
            <FlexContainer
                minHeight="min-h-auto"
                direction="flex-col"
                alignItems="items-center"
                className="relative pt-40"
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
                    className="relative mt-12 pt-5"
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
