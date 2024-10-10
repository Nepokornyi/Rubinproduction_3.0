import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { Text } from '../Text/Text'
import { Box } from '../Box/Box'
import Image from 'next/image'
import logo from '@/assets/img/RubinLetterGray.svg'
import { useTranslations } from 'next-intl'
import { RightPanelDesktop } from './components/RightPanelDesktop'
import { RightPanelMobile } from './components/RightPanelMobile'
import { LinkTransition } from '../LinkTransition/LinkTransition'

export const Footer = () => {
    const t = useTranslations('Footer')

    return (
        <FlexContainer direction="flex-col" center>
            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-end"
                className="md:w-[80%] pb-6 relative flex-1"
            >
                <Box className="h-32 md:h-auto p-6 md:p-0">
                    <LinkTransition href="/">
                        <Image
                            src={logo}
                            alt="Rubin Logo Gray"
                            className="w-12 md:w-16"
                        />
                    </LinkTransition>
                </Box>

                <Text
                    variant="socials"
                    className="hidden md:block text-[#6e6e6e]"
                >
                    {t('copyright')}
                </Text>

                <Box className="hidden lg:grid grid-cols-3 grid-rows-3 gap-y-4 gap-x-3 text-right">
                    <RightPanelDesktop />
                </Box>

                <Box className="lg:hidden flex flex-col">
                    <RightPanelMobile />
                </Box>
            </FlexContainer>
            <Text variant="socials" className="mb-6 md:hidden text-[#6e6e6e]">
                {t('copyright')}
            </Text>
        </FlexContainer>
    )
}
