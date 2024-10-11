import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

import firstGridImage from '@/assets/img/scooty/imagesShowreel/firstGridItem.png'
import secondGridImage from '@/assets/img/scooty/imagesShowreel/secondGridItem.png'
import thirdGridImage from '@/assets/img/scooty/imagesShowreel/thirdGridItem.png'
import fourthGridImage from '@/assets/img/scooty/imagesShowreel/fourthGridItem.png'
import fifthGridImage from '@/assets/img/scooty/imagesShowreel/fifthGridItem.png'
import sixthGridImage from '@/assets/img/scooty/imagesShowreel/sixthGridItem.png'
import Image from 'next/image'
import { Box } from '@/components/Box/Box'
import { RevealBlock } from '@/components/Reveal/RevealBlock'

export const ScootyShowReelSection = () => {
    return (
        <FlexContainer className="h-screen clip-path-container">
            <Box className="grid gap-4 grid-cols-4 md:grid-cols-5 grid-rows-5 md:grid-rows-4 w-full">
                <div className="col-span-2 row-span-2">
                    <RevealBlock blockColor="bg-[#d7f000]" delay={0.25}>
                        <Image
                            src={firstGridImage}
                            alt="scooty guy with package"
                            className="w-full h-full object-cover"
                        />
                    </RevealBlock>
                </div>
                <div className="md:col-span-1 md:row-span-2 col-span-2 row-span-1">
                    <RevealBlock blockColor="bg-[#d7f000]" delay={0.45}>
                        <Image
                            src={secondGridImage}
                            alt="scooty driving"
                            className="w-full h-full object-cover"
                        />
                    </RevealBlock>
                </div>
                <div className="col-span-2 row-span-2">
                    <RevealBlock blockColor="bg-[#d7f000]" delay={0.1}>
                        <Image
                            src={thirdGridImage}
                            alt="delivery on scooter"
                            className="w-full h-full object-cover"
                        />
                    </RevealBlock>
                </div>
                <div className="col-span-2 row-auto md:row-span-3">
                    <RevealBlock blockColor="bg-[#d7f000]" delay={0.35}>
                        <Image
                            src={fourthGridImage}
                            alt="scooter"
                            className="w-full h-full object-cover"
                        />
                    </RevealBlock>
                </div>
                <div className="col-span-2 row-span-2">
                    <RevealBlock blockColor="bg-[#d7f000]" delay={0.15}>
                        <Image
                            src={fifthGridImage}
                            alt="guy checking delivery"
                            className="w-full h-full object-cover"
                        />
                    </RevealBlock>
                </div>
                <div className="col-span-2 md:col-span-1 row-span-2 md:row-span-2">
                    <RevealBlock blockColor="bg-[#d7f000]" delay={0.5}>
                        <Image
                            src={sixthGridImage}
                            alt="guy with scooter"
                            className="w-full h-full object-cover"
                        />
                    </RevealBlock>
                </div>
            </Box>
        </FlexContainer>
    )
}
