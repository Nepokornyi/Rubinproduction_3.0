import { Box } from '@/components/Box/Box'
import Image from 'next/image'
import React from 'react'
import preview from '@/assets/img/community/preview.png'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'

const config = [
    { description: 'Video 1', preview },
    { description: 'Video 2', preview },
    { description: 'Video 3', preview },
    { description: 'Video 4', preview },
    { description: 'Video 5', preview },
    { description: 'Video 6', preview },
]

export const CommunityVideosGrid = () => {
    return (
        <Box className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto place-items-center">
            {config.map(({ description, preview }) => (
                <FlexContainer
                    key={description}
                    direction="flex-col"
                    className="bg-[#191919] cursor-pointer rounded-2xl w-fit"
                >
                    <Box className="w-full max-w-[300px]">
                        <Image
                            src={preview}
                            alt="Video Preview"
                            className="rounded-t-2xl"
                        />
                        <Text
                            padding="px-3 py-3"
                            variant="socials"
                            className="w-full"
                        >
                            {description}
                        </Text>
                        <Text
                            padding="px-3 pb-6"
                            className="w-full md:hidden text-[#B2BECD]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Optio aut commodi eaque earum hic.
                        </Text>
                    </Box>
                </FlexContainer>
            ))}
        </Box>
    )
}
