import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import React from 'react'
import { CaseAboutTopProps } from './types'

export const CaseAboutTop = (config: CaseAboutTopProps) => {
    return (
        <>
            <div className="row-start-2 md:row-start-1 col-span-2 md:col-span-1 place-self-center md:place-self-auto">
                <Image
                    src={config.logo}
                    alt="scooty logo"
                    className="w-48 md:w-auto mb-20"
                />
            </div>
            <FlexContainer direction="flex-col">
                <Text variant="nav" className="mb-4 md:mb-8">
                    {config.leftContent}
                </Text>
                <Text variant="h5" textTransform="uppercase" className="mb-20">
                    {config.leftTitle}
                </Text>
            </FlexContainer>
            <FlexContainer direction="flex-col">
                <Text
                    variant="nav"
                    className="mb-4 md:mb-8 text-right md:text-left"
                >
                    {config.rightContent}
                </Text>
                <Text
                    variant="h5"
                    textTransform="uppercase"
                    className="mb-20 text-right md:text-left"
                >
                    {config.rightTitle}
                </Text>
            </FlexContainer>
        </>
    )
}
