import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { CommunityVideosGrid } from './CommunityVideosGrid'
import { useTranslations } from 'next-intl'

export const CommunityVideosSection = () => {
    const t = useTranslations('CommunityPage.other')

    return (
        <FlexContainer
            minHeight="min-h-screen"
            direction="flex-col"
            alignItems="items-center"
            className="pb-20"
        >
            <Text
                variant="h2"
                textTransform="uppercase"
                fontFamily="font-grunges"
                className="pt-20 pb-20"
            >
                {t('title')}
            </Text>
            <CommunityVideosGrid />
        </FlexContainer>
    )
}
