import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React, { useEffect, useState } from 'react'
import { CommunityVideosGrid } from '../CommunityVideos/CommunityVideosGrid'
import { useTranslations } from 'next-intl'

export const CommunityPaidVideos = () => {
    const t = useTranslations('CommunityPage.other')
    const [videos, setVideos] = useState<[]>([])

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/api/videos', {
                    method: 'GET',
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch videos')
                }

                const { videos } = await response.json()
                setVideos(videos)
            } catch (error) {
                console.error(error)
                setVideos([])
            }
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
            <CommunityVideosGrid content={videos} variant="paid" />
        </FlexContainer>
    )
}
