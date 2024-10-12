import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

import icoX from '@/assets/img/scooty/icoX.svg'

export const ScootyServicesSection = () => {
    const t = useTranslations('ScootyCase.services')

    const list = [
        {
            title: 'Strategy',
            points: [t('strategy1'), t('strategy2'), t('strategy3')],
        },
        {
            title: 'Conception',
            points: [t('conception1'), t('conception2'), t('conception3')],
        },
        {
            title: 'Production',
            points: [t('production1'), t('production2'), t('production3')],
        },
        { title: 'Post-Production', points: [t('postProd1'), t('postProd2')] },
    ]

    return (
        <FlexContainer className="pt-36" justifyContent="justify-center">
            <Box className="grid grid-rows-[auto,1fr] lg:grid-rows-2 xl:grid-rows-1 lg:grid-cols-2 xl:grid-cols-4 gap-20 xl:justify-items-center">
                {list.map((item, index) => (
                    <Box key={index} className="px-6 md:px-0 max-w-[300px]">
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
