import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import React from 'react'

import logo from '@/assets/img/RubinLetter.svg'

type RubinTitleProps = {
    button?: React.ReactNode
}

export const RubinTitle = ({ button }: RubinTitleProps) => {
    return (
        <Text textTransform="uppercase" fontWeight="font-bold" variant="h1">
            <FlexContainer gap="gap-4" alignItems="items-center">
                <span className="relative first-letter:opacity-0 first-letter:text-8xl text-[#d91e37]">
                    Rubin
                    <Image
                        className="absolute -left-10 -top-6 select-none w-32"
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
