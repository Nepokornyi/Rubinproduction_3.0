import { Box } from '@/components/Box/Box'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { CaseLogo } from './CaseLogo'

type CaseMainSectionProps = {
    background: StaticImageData
    logo: StaticImageData
    altBackground: string
    altLogo: string
}

export const CaseMainSection = ({
    background,
    logo,
    altBackground,
    altLogo,
}: CaseMainSectionProps) => {
    return (
        <Box className="h-screen overflow-hidden md:items-center items-start clip-path-case">
            <Image
                src={background}
                alt={altBackground}
                fill
                className="blur-sm md:blur-none object-cover"
            />
            <CaseLogo logo={logo} alt={altLogo} />
        </Box>
    )
}
