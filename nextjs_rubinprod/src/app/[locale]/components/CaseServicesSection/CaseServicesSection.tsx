import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type CaseServicesSectionProps = {
    list: {
        title: string
        points: string[]
        className?: string
    }[]
    icoX: StaticImageData
    isShortList?: boolean
}

export const CaseServicesSection = ({
    list,
    icoX,
    isShortList = false,
}: CaseServicesSectionProps) => {
    const gridStyles = isShortList
        ? 'xl:grid-cols-3 md:justify-items-center'
        : 'xl:grid-cols-4 xl:justify-items-center'
    return (
        <FlexContainer className="pt-36" justifyContent="justify-center">
            <Box
                className={`grid grid-rows-[auto,1fr] lg:grid-rows-2 xl:grid-rows-1 lg:grid-cols-2 ${gridStyles}  gap-20 `}
            >
                {list.map((item, index) => (
                    <Box
                        key={index}
                        className={`px-6 md:px-0 max-w-[300px] ${item.className}`}
                    >
                        <Image
                            src={icoX}
                            alt="X letter icon"
                            className="absolute -left-2.5 md:-left-10 -top-5 w-10 md:w-auto"
                        />
                        <Text
                            variant="h5"
                            textTransform="uppercase"
                            padding="px-0"
                            className="mb-2.5"
                        >
                            {item.title}
                        </Text>
                        <ul>
                            {item.points.map((point, index) => (
                                <li key={index} className="mb-2">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </Box>
                ))}
            </Box>
        </FlexContainer>
    )
}
