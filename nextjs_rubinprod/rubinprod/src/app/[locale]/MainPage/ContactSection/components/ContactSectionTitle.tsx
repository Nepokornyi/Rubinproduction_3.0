import { Arrow } from '@/components/Arrow/Arrow'
import { Box } from '@/components/Box/Box'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const ContactSectionTitle = () => {
    return (
        <Box>
            <Text variant="h2" textTransform="uppercase" fontWeight="font-bold">
                Lets Talk
            </Text>
            <br />
            <Text variant="h3" fontFamily="font-grunges">
                About Your Project
            </Text>
            <Arrow direction="right" isFullWidth />
        </Box>
    )
}
