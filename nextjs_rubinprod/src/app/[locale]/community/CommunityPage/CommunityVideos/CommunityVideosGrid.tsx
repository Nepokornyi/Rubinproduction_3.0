import { Box } from '@/components/Box/Box'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import preview from '@/assets/img/community/preview.png'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { VimeoVideo } from '../../../components/VimeoVideo/VimeoVideo'

export const CommunityVideosGrid = () => {
    const [videos, setVideos] = useState([])

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
        <Box className="w-full grid grid-cols-1 px-5 gap-5 lg:grid-cols-2 auto-rows-auto place-items-center">
            {videos.map(({ title, description, videoUrl }) => (
                <FlexContainer
                    key={title}
                    direction="flex-col"
                    className="bg-[#191919] rounded-2xl"
                >
                    <Box className="w-full">
                        <VimeoVideo id={videoUrl} className="rounded-t-2xl" />

                        <Text
                            padding="px-3 py-3"
                            variant="socials"
                            className="w-full"
                        >
                            {title}
                        </Text>
                        <Text
                            padding="px-3 pb-6"
                            className="w-full text-[#B2BECD]"
                        >
                            {description}
                        </Text>
                    </Box>
                </FlexContainer>
            ))}
        </Box>
    )
}
