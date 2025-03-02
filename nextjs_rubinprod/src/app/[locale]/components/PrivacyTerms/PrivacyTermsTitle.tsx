import { Box } from '@/components/Box/Box'
import { Text } from '@/components/Text/Text'
import React from 'react'

type PrivacyTermsTitleProps = {
    title: string
    lastUpdated: string
}

export const PrivacyTermsTitle = ({
    title,
    lastUpdated,
}: PrivacyTermsTitleProps) => {
    return (
        <header className="flex flex-col">
            <Box>
                <Text variant="h5" textTransform="uppercase">
                    {title}
                </Text>
            </Box>

            <Text variant="disclaimer">{lastUpdated}</Text>
        </header>
    )
}
