import { Box } from '@/components/Box/Box'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

const hoverShadowBoxEffect =
    'cursor-pointer duration-500 ease-in-out transition-shadow hover:shadow-[rgba(217,30,55,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px]'

const hoverLogoEffect =
    'transition-opacity duration-500 ease-in-out opacity-50 group-hover:opacity-100'

export const DesktopGridLayout = ({ children }: { children: ReactNode }) => (
    <Box className="hidden md:grid w-[80%] md:max-w-[470px] lg:max-w-[1100px] md:grid-cols-1 lg:grid-cols-2 lg:gap-x-12 grid-flow-dense auto-rows-auto">
        {children}
    </Box>
)

export const MobileGridLayout = ({ children }: { children: ReactNode }) => (
    <Box className="md:hidden w-full h-full">{children}</Box>
)

export const ExpandedLeftGridItem = ({
    link,
    logo,
    alt,
}: {
    link: StaticImageData
    logo: StaticImageData
    alt: string
}) => (
    <Box
        className={`group row-span-2 h-auto lg:h-[65%] xl:h-[75%] ${hoverShadowBoxEffect}`}
    >
        <Image
            src={link}
            alt={alt}
            className="lg:absolute top-0 left-0 w-full h-full"
            style={{ objectFit: 'cover' }}
        />
        <Image
            src={logo}
            alt={alt}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${hoverLogoEffect}`}
        />
    </Box>
)

export const RightGridItem = ({
    link,
    logo,
    alt,
}: {
    link: StaticImageData
    logo: StaticImageData
    alt: string
}) => (
    <Box className={`z-20 group mt-10 ${hoverShadowBoxEffect}`}>
        <Image src={link} alt={alt} />
        <Image
            src={logo}
            alt={alt}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${hoverLogoEffect}`}
        />
    </Box>
)

export const BottomGridItem = ({ children }: { children: ReactNode }) => (
    <Box className="z-10 mt-10 lg:mt-0 lg:transform lg:translate-y-[-35%]">
        {children}
    </Box>
)
