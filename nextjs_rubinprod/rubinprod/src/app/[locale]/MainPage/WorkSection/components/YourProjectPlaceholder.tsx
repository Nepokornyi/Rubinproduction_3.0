import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

import { motion } from 'framer-motion'
import { Text } from '@/components/Text/Text'

export const YourProjectPlaceholder = () => {
    return (
        <FlexContainer
            direction="flex-col"
            className="h-full border border-[#6e6e6e] bg-[#0d0d0d] p-12"
        >
            <div className="absolute top-6 right-6 h-6 w-6 bg-[#d91e37] rounded-full" />
            <Text
                variant="h3"
                textTransform="uppercase"
                fontWeight="font-bold"
                className="mb-2"
            >
                Your
            </Text>
            <Text
                variant="h3"
                textTransform="uppercase"
                fontWeight="font-bold"
                className="mb-2"
            >
                Project
            </Text>
            <Text
                variant="h3"
                textTransform="uppercase"
                fontWeight="font-bold"
                className="mb-2"
            >
                Is Rendering
            </Text>

            <div className="relative h-8 w-full bg-black border border-[#6e6e6e] overflow-hidden mt-16">
                <div />
            </div>
        </FlexContainer>
    )
}
