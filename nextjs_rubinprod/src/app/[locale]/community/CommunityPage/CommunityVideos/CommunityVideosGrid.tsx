import { Box } from '@/components/Box/Box'
import React from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { VimeoVideo } from '../../../components/VimeoVideo/VimeoVideo'
import { communityGridStyles, CommunityVideosGridTypes } from './const'

type CommunityVideosGridProps = {
    content: any[]
    variant: CommunityVideosGridTypes
}

export const CommunityVideosGrid = ({
    content,
    variant,
}: CommunityVideosGridProps) => {
    return (
        <Box className="w-full grid grid-cols-1 px-5 gap-5 lg:grid-cols-2 auto-rows-auto">
            {content.map(({ title, description, videoUrl }) => (
                <FlexContainer
                    key={title}
                    direction="flex-col"
                    className={`${communityGridStyles[variant].background} rounded-2xl`}
                >
                    <Box className="w-full">
                        <VimeoVideo id={videoUrl} className="rounded-t-2xl" />

                        <Text
                            padding="px-3 py-3"
                            variant="socials"
                            className={`${communityGridStyles[variant].title} w-full`}
                        >
                            {title}
                        </Text>
                        <Text
                            padding="px-3 pb-6"
                            className={`${communityGridStyles[variant].text} w-full`}
                        >
                            {description}
                        </Text>
                    </Box>
                </FlexContainer>
            ))}
        </Box>
    )
}
