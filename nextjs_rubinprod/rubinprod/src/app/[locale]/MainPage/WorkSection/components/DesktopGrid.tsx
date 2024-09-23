import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import React from 'react'

import scootyCase from '@/assets/img/portfolio/scootyCase.png'
import gameChangerCase from '@/assets/img/portfolio/gameChangerCase.png'
import eliteVoyageCase from '@/assets/img/portfolio/eliteVoyageCase.png'
import { Button } from '@/components/Button/Button'
import { YourProjectPlaceholder } from './YourProjectPlaceholder'

export const DesktopGrid = () => {
    return (
        <>
            <Box className="hidden md:grid w-3/4 grid-cols-2 gap-x-12 mb-6">
                <FlexContainer direction="flex-col" className="col-start-2">
                    <Text
                        fontWeight="font-bold"
                        variant="h4"
                        textTransform="uppercase"
                        className="relative"
                    >
                        Portfolio
                        <Text
                            variant="h4"
                            textTransform="uppercase"
                            fontFamily="font-grunges"
                            className="absolute top-0 -left-20"
                        >
                            Our
                        </Text>
                    </Text>
                    <Text>
                        Nevytváříme pouze videoobsah - pro každý projekt
                        vyvíjíme jedinečný marketingový přístup.
                    </Text>
                </FlexContainer>
            </Box>

            <Box className="hidden md:grid w-3/4 max-w-[1100px] grid-cols-2 gap-x-12 grid-flow-dense auto-rows-auto">
                <div className="row-span-2 h-[75%]">
                    <Image src={scootyCase} alt="scooty case" />
                </div>
                <div className="mt-10 z-2">
                    <Image src={gameChangerCase} alt="game changer case" />
                </div>
                <div className="mt-10 z-2">
                    <Image src={eliteVoyageCase} alt="elite voyage case" />
                </div>
                <div className="transform translate-y-[-35%]">
                    <YourProjectPlaceholder />
                </div>
                <div className="transform translate-y-[-35%]">
                    <Box className="flex h-full flex-col justify-end items-start z-10">
                        <Text>
                            Bez ohledu na složitost projektu vám během první
                            konzultace poskytneme odhad ceny. Pojďme společně
                            vytvořit něco skvělého!
                        </Text>
                        <Button>Work together</Button>
                    </Box>
                </div>
            </Box>
        </>
    )
}
