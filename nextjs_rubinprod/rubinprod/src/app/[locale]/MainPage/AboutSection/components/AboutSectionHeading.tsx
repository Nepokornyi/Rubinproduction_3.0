import { Text } from '@/components/Text/Text'
import React from 'react'

export const AboutSectionHeading = () => {
    return (
        <Text
            variant="h2"
            textTransform="uppercase"
            padding="pb-6"
            className="text-balance md:text-center"
            fontWeight="font-bold"
        >
            Creating{' '}
            <Text variant="h2" fontFamily="font-grunges">
                The Best
            </Text>
            <br />
            Videos For You
        </Text>
    )
}
