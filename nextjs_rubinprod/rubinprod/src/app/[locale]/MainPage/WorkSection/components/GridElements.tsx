import { Box } from '@/components/Box/Box'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export const DesktopGridLayout = ({ children }: { children: ReactNode }) => (
    <Box className="hidden md:grid w-3/4 md:max-w-[470px] lg:max-w-[1100px] md:grid-cols-1 lg:grid-cols-2 lg:gap-x-12 grid-flow-dense auto-rows-auto">
        {children}
    </Box>
)

export const ExpandedLeftGridItem = ({
    link,
    alt,
}: {
    link: StaticImageData
    alt: string
}) => (
    <Box className="row-span-2 h-auto lg:h-[75%] relative">
        <Image
            src={link}
            alt={alt}
            className="lg:py-4 lg:absolute top-0 left-0 w-full h-full"
            style={{ objectFit: 'cover' }}
        />
    </Box>
)

export const RightGridItem = ({
    link,
    alt,
}: {
    link: StaticImageData
    alt: string
}) => (
    <Box className="mt-10 z-2">
        <Image src={link} alt={alt} />
    </Box>
)

export const BottomGridItem = ({ children }: { children: ReactNode }) => (
    <Box className="mt-10 lg:mt-0 lg:transform lg:translate-y-[-35%]">
        {children}
    </Box>
)
