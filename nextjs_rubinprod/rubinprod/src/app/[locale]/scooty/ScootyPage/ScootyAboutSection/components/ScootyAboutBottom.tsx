import { Arrow } from '@/components/Arrow/Arrow'
import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Reveal } from '@/components/Reveal/Reveal'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

const services = [
    { text: 'Web Development' },
    { text: 'Schooting' },
    { text: 'Animation' },
    { text: 'Instagram Feed' },
]

export const ScootyAboutBottom = () => {
    const t = useTranslations('ScootyCase')

    const clientChallenge = [
        {
            title: 'Client',
            text: t.rich('client', {
                strong: (children) => <strong>{children}</strong>,
            }),
        },
        {
            title: 'Challenge',
            text: t.rich('challenge', {
                strong: (children) => <strong>{children}</strong>,
            }),
        },
    ]

    const renderServices = services.map((service, index) => (
        <Text
            key={index}
            variant="h5"
            textTransform="uppercase"
            className="py-2"
        >
            {service.text}
        </Text>
    ))

    const renderClientChallenge = clientChallenge.map((item, index) => (
        <Box key={index} className="col-span-2 md:col-span-1">
            <Text
                variant="nav"
                className="mb-4 md:mb-6 text-[#D7F000] md:text-white font-semibold md:font-normal"
            >
                {item.title}
            </Text>
            <Text className="mb-8">{item.text}</Text>
        </Box>
    ))

    return (
        <>
            <FlexContainer
                direction="flex-col"
                className="relative col-span-2 md:col-span-1 px-6 md:px-0 mb-20"
            >
                <div className="absolute md:hidden h-full bottom-0 -left-0 px-6">
                    <Reveal
                        y={-35}
                        removeRepeatedReveal={false}
                        className="h-full"
                    >
                        <Arrow direction="down" isFullHeight />
                    </Reveal>
                </div>

                <Text variant="nav" className="mb-4 md:mb-6">
                    Services
                </Text>
                {renderServices}
            </FlexContainer>
            {renderClientChallenge}
        </>
    )
}
