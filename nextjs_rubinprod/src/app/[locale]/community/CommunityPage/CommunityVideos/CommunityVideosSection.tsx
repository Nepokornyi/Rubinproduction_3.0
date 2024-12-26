import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { CommunityVideosGrid } from './CommunityVideosGrid'

export const CommunityVideosSection = () => {
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
                Other Videos
            </Text>
            <CommunityVideosGrid />
        </FlexContainer>
    )
}
