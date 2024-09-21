import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import React from 'react'

import logo from '@/assets/img/RubinLetter.svg'

type RubinTitleProps = {
    button?: React.ReactNode
}

const logoLetterStyles =
    'md:-left-6 lg:-left-8 2xl:-left-8 md:-top-5 lg:-top-3 2xl:-top-5 md:w-26 lg:w-40 2xl:w-44'

const firstLetterStyles =
    'first-letter:opacity-0 md:first-letter:text-8lx lg:first-letter:text-9xl 2xl:first-letter:text-[148px]'

export const RubinTitle = ({ button }: RubinTitleProps) => {
    return (
        <Text textTransform="uppercase" fontWeight="font-bold" variant="h1">
            <FlexContainer gap="gap-4" alignItems="items-center">
                <span
                    className={`relative ${firstLetterStyles} text-[#d91e37]`}
                >
                    Rubin
                    <Image
                        className={`absolute ${logoLetterStyles} select-none`}
                        src={logo}
                        alt="Rubin logo header placeholder"
                    />
                </span>
                {button}
            </FlexContainer>
            Production
        </Text>
    )
}
