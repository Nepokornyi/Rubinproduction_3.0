import { Box } from '@/components/Box/Box'
import { RevealBlock } from '@/components/Reveal/RevealBlock'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export type CaseShowReelProps = {
    image: StaticImageData
    className: string
    alt: string
    color: string
    delay: number
}

export const CaseShowReel = ({ config }: { config: CaseShowReelProps[] }) => {
    return (
        <Box className="grid gap-4 grid-cols-4 md:grid-cols-5 grid-rows-5 md:grid-rows-4 w-full">
            {config.map((item) => (
                <div className={item.className} key={item.alt}>
                    <RevealBlock blockColor={item.color} delay={item.delay}>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                        />
                    </RevealBlock>
                </div>
            ))}
        </Box>
    )
}
