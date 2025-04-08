import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React, { useEffect, useState } from 'react'
import { CommunityVideosGrid } from '../CommunityVideos/CommunityVideosGrid'
import { useTranslations } from 'next-intl'
import { paidVideoConfig } from '@/config/paidVideos'

export const CommunityPaidVideos = () => {
    const t = useTranslations('CommunityPage.other')
    const [videoConfig, setVideoConfig] = useState<[]>([])

    useEffect(() => {
        const fetchVideos = async () => {
            const slugs = Object.keys(paidVideoConfig)
            const res = await fetch('/api/paid-videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application-json' },
                body: JSON.stringify({ slugs }),
            })

            const data = await res.json()
            setVideoConfig(data)
        }

        fetchVideos()
    }, [])

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
            <CommunityVideosGrid content={videoConfig} variant="paid" />
        </FlexContainer>
    )
}
