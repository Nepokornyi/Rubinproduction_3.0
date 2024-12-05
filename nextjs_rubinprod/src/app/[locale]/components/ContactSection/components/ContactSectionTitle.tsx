import { Arrow } from '@/components/Arrow/Arrow'
import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Reveal } from '@/components/Reveal/Reveal'
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
                <Text variant="contact" textTransform="uppercase">
                    {t('title')}
                </Text>
                <br />
                <Text variant="contact-accent" fontFamily="font-grunges">
                    {t('subtitle')}
                </Text>
                <Reveal x={-35} removeRepeatedReveal={false}>
                    <Arrow
                        direction="right"
                        isFullWidth
                        className="hidden md:inline-block"
                    />
                </Reveal>
                <Reveal removeRepeatedReveal={false}>
                    <div className="absolute h-full pb-4 top-0 -right-2">
                        <Arrow
                            direction="down"
                            isFullHeight
                            className="md:hidden"
                        />
                    </div>
                </Reveal>
            </Box>
        </FlexContainer>
    )
}
