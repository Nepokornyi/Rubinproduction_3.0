import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import React from 'react'

import scootyCase from '@/assets/img/portfolio/scootyCase.png'

export const DesktopGrid = () => {
    return (
        <>
            <Box className="grid w-3/4 grid-cols-2 gap-12 mb-6">
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

            <Box className="grid w-3/4 grid-cols-2 grid-flow-dense gap-12">
                <div>
                    <Image src={scootyCase} alt="scooty case" />
                </div>
                <div>
                    <Image src={scootyCase} alt="scooty case" />
                </div>
                <div>
                    <Image src={scootyCase} alt="scooty case" />
                </div>
                <div>
                    <Image src={scootyCase} alt="scooty case" />
                </div>
                <div>
                    <Image src={scootyCase} alt="scooty case" />
                </div>
                <div>
                    <Image src={scootyCase} alt="scooty case" />
                </div>
            </Box>
        </>
    )
}
