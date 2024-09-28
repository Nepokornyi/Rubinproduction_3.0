import { Arrow } from '@/components/Arrow/Arrow'
import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

export const ContactSectionTitle = () => {
    const t = useTranslations('ContactPage')

    return (
        <FlexContainer
            direction="flex-col"
            className="md:max-w-[550px] w-full lg:w-[40%]"
            justifyContent="justify-start"
        >
            <Box className="self-start md:px-6 lg:px-0">
                <Text
                    variant="contact"
                    textTransform="uppercase"
                    fontWeight="font-bold"
                >
                    {t('title')}
                </Text>
                <br />
                <Text variant="contact-accent" fontFamily="font-grunges">
                    {t('subtitle')}
                </Text>
                <Arrow
                    direction="right"
                    isFullWidth
                    className="hidden md:inline-block"
                />
                <div className="absolute h-full top-0 -right-2">
                    <Arrow
                        direction="down"
                        isFullHeight
                        className="md:hidden"
                    />
                </div>
            </Box>
        </FlexContainer>
    )
}
