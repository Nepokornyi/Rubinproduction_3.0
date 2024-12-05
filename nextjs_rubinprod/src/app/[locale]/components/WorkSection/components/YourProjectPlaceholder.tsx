import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

import { motion } from 'framer-motion'
import { Text } from '@/components/Text/Text'
import { dotVariants, loadingVariants } from './config/placeholderConfig'

export const YourProjectPlaceholder = () => {
    return (
        <FlexContainer
            direction="flex-col"
            className="h-full md:border md:border-[#6e6e6e] bg-[#0d0d0d] py-12 md:p-12"
            gap="gap-2"
        >
            <motion.div
                variants={dotVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-6 right-0 md:right-6 h-6 w-6 bg-[#d91e37] rounded-full"
            />
            <Text variant="h3" textTransform="uppercase" padding="px-0">
                Your
            </Text>
            <Text variant="h3" textTransform="uppercase" padding="px-0">
                Project
            </Text>
            <Text variant="h3" textTransform="uppercase" padding="px-0">
                Is Rendering
            </Text>

            <div className="relative h-8 w-full bg-black border border-[#6e6e6e] overflow-hidden mt-16">
                <motion.div
                    variants={loadingVariants}
                    animate="animate"
                    className="absolute h-full w-full bg-[#6e6e6e]"
                />
            </div>
        </FlexContainer>
    )
}
