import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Image from 'next/image'
import React from 'react'

import socialMobile from '@/assets/img/scooty/ScootySocialMobile.png'
import { Text } from '@/components/Text/Text'

import instagram1 from '@/assets/img/scooty/instagramGrid/instagram1.png'
import instagram2 from '@/assets/img/scooty/instagramGrid/instagram2.png'
import instagram3 from '@/assets/img/scooty/instagramGrid/instagram3.png'
import instagram4 from '@/assets/img/scooty/instagramGrid/instagram4.png'
import instagram5 from '@/assets/img/scooty/instagramGrid/instagram5.png'
import instagram6 from '@/assets/img/scooty/instagramGrid/instagram6.png'
import instagram7 from '@/assets/img/scooty/instagramGrid/instagram7.png'
import instagram8 from '@/assets/img/scooty/instagramGrid/instagram8.png'
import instagram9 from '@/assets/img/scooty/instagramGrid/instagram9.png'
import { RevealBlock } from '@/components/Reveal/RevealBlock'

export const ScootySocialsSection = () => {
    return (
        <FlexContainer
            className="pt-36 pb-24 flex-col xl:flex-row gap-y-36"
            center
        >
            <FlexContainer center direction="flex-col">
                <Text
                    variant="instagram"
                    textTransform="uppercase"
                    className="relative mb-20 md:mb-10"
                >
                    Instagram
                    <Text
                        variant="h2"
                        fontFamily="font-grunges"
                        className="text-[#d7f000] absolute top-12 md:top-0 -right-12 md:-right-32"
                    >
                        Grid
                    </Text>
                </Text>

                <Box className="grid gap-2 px-6 grid-cols-3 grid-rows-3">
                    <RevealBlock blockColor="bg-[#d7f000]">
                        <Image src={instagram1} alt="delivery guy" />
                    </RevealBlock>
                    <RevealBlock delay={0} blockColor="bg-[#d7f000]">
                        <Image src={instagram2} alt="delivery guy" />
                    </RevealBlock>
                    <RevealBlock delay={0.2} blockColor="bg-[#d7f000]">
                        <Image src={instagram3} alt="delivery guy" />
                    </RevealBlock>
                    <RevealBlock delay={0.1} blockColor="bg-[#d7f000]">
                        <Image src={instagram4} alt="scooter" />
                    </RevealBlock>
                    <RevealBlock delay={0.5} blockColor="bg-[#d7f000]">
                        <Image src={instagram5} alt="delivery with package" />
                    </RevealBlock>
                    <RevealBlock delay={0.4} blockColor="bg-[#d7f000]">
                        <Image src={instagram6} alt="courier on scooter" />
                    </RevealBlock>
                    <RevealBlock delay={0.3} blockColor="bg-[#d7f000]">
                        <Image src={instagram7} alt="courier next to scooter" />
                    </RevealBlock>
                    <RevealBlock delay={0.8} blockColor="bg-[#d7f000]">
                        <Image src={instagram8} alt="courier riding scooter" />
                    </RevealBlock>
                    <RevealBlock delay={0.4} blockColor="bg-[#d7f000]">
                        <Image src={instagram9} alt="courier delivering food" />
                    </RevealBlock>
                </Box>
            </FlexContainer>
            <FlexContainer className="justify-center 2xl:justify-start">
                <Image src={socialMobile} alt="scooty social media" />
            </FlexContainer>
        </FlexContainer>
    )
}
