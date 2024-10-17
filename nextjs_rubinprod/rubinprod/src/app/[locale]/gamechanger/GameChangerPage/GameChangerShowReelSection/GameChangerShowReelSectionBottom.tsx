import {
    CaseShowReel,
    CaseShowReelProps,
} from '@/app/[locale]/components/CaseShowReel/CaseShowReel'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

import firstGridImage from '@/assets/img/gamechanger/showreelBottom/firstGridItem.png'
import secondGridImage from '@/assets/img/gamechanger/showreelBottom/secondGridItem.png'
import thirdGridImage from '@/assets/img/gamechanger/showreelBottom/thirdGridItem.png'
import fourthGridImage from '@/assets/img/gamechanger/showreelBottom/fourthGridItem.png'
import fifthGridImage from '@/assets/img/gamechanger/showreelBottom/fifthGridItem.png'
import sixthGridImage from '@/assets/img/gamechanger/showreelBottom/sixthGridItem.png'

const config: CaseShowReelProps[] = [
    {
        image: firstGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'guy with camera',
        color: 'bg-[#7055EC]',
        delay: 0.5,
    },
    {
        image: secondGridImage,
        className: 'md:col-span-1 md:row-span-2 col-span-2 row-span-1',
        alt: 'shooting set',
        color: 'bg-[#7055EC]',
        delay: 0.1,
    },
    {
        image: thirdGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'alcohol bottles',
        color: 'bg-[#7055EC]',
        delay: 0.35,
    },
    {
        image: fourthGridImage,
        className: 'col-span-2 row-auto md:row-span-3',
        alt: 'recording patches ad',
        color: 'bg-[#7055EC]',
        delay: 0.25,
    },
    {
        image: fifthGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'cameraman at party',
        color: 'bg-[#7055EC]',
        delay: 0.45,
    },
    {
        image: sixthGridImage,
        className: 'col-span-2 md:col-span-1 row-span-2 md:row-span-2',
        alt: 'cameraman on ad set',
        color: 'bg-[#7055EC]',
        delay: 0.15,
    },
]

export const GameChangerShowReelSectionBottom = () => {
    return (
        <FlexContainer className="h-screen clip-path-container">
            <CaseShowReel config={config} />
        </FlexContainer>
    )
}
