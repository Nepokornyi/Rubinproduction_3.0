import Image from 'next/image'
import React from 'react'

import background from '@/assets/img/scooty/scootyBackground.png'
import { Box } from '@/components/Box/Box'
import { ScootyLogo } from './ScootyLogo'

export const ScootyMainSection = () => {
    return (
        <Box className="h-screen overflow-hidden md:items-center items-start clip-path-case">
            <Image
                src={background}
                alt="scooty background picture"
                fill
                objectFit="cover"
                className="blur-sm md:blur-none"
            />
            <ScootyLogo />
        </Box>
    )
}
