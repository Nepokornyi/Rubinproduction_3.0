import { Arrow } from '@/components/Arrow/Arrow'
import { Box } from '@/components/Box/Box'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

export const ContactSectionTitle = () => {
    const t = useTranslations('ContactPage')

    return (
        <Box>
            <Text variant="h2" textTransform="uppercase" fontWeight="font-bold">
                {t('title')}
            </Text>
            <br />
            <Text variant="h3" fontFamily="font-grunges">
                {t('subtitle')}
            </Text>
            <Arrow direction="right" isFullWidth />
        </Box>
    )
}
