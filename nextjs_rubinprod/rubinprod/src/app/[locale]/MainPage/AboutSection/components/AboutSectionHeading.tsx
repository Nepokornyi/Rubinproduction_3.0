import { Text } from '@/components/Text/Text'
import React from 'react'
import { AboutCircleText } from './AboutCircleText'

export const AboutSectionHeading = () => {
    return (
        <Text
            variant="h2"
            textTransform="uppercase"
            padding="pb-8"
            className="text-balance relative w-72 md:w-auto"
            fontWeight="font-bold"
        >
            <span className="bg-[#0c0c0c]">Creating</span>{' '}
            <Text
                variant="h2"
                fontFamily="font-grunges"
                className="px-1 md:mr-6"
            >
                The Best
            </Text>
            <br />
            <span className="bg-[#0c0c0c]">Videos For You</span>
            <AboutCircleText />
        </Text>
    )
}
