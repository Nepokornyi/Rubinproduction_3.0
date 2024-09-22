import { Text } from '@/components/Text/Text'
import React from 'react'
import { AboutCircleText } from './AboutCircleText'

export const AboutSectionHeading = () => {
    return (
        <Text
            variant="h2"
            textTransform="uppercase"
            padding="pb-6"
            className="text-balance "
            fontWeight="font-bold"
        >
            <span className="relative bg-[#0c0c0c]">Creating</span>{' '}
            <Text variant="h2" fontFamily="font-grunges" className="mr-6">
                The Best
            </Text>
            <br />
            <span className="relative bg-[#0c0c0c]">Videos For You</span>
            <AboutCircleText />
        </Text>
    )
}
