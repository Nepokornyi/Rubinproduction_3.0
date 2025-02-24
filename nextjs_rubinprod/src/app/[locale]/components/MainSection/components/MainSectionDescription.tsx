import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { MainSectionContacts } from './MainSectionContacts'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'

export const MainSectionDescription = () => {
    const t = useTranslations('MainPage')

    return (
        <FlexContainer
            gap="gap-1"
            justifyContent="justify-between"
            alignItems="items-center"
            className="mt-10 mb-10"
        >
            <MainSectionContacts />
            <Box className="md:max-w-[18rem] lg:max-w-[27.5rem]">
                <Text className="lg:ml-8 2xl:ml-0">{t('content')}</Text>
            </Box>
        </FlexContainer>
    )
}
