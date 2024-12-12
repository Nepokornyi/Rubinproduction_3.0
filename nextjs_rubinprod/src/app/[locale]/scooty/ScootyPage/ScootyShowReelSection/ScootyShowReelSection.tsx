import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

import firstGridImage from '@/assets/img/scooty/imagesShowreel/firstGridItem.png'
import secondGridImage from '@/assets/img/scooty/imagesShowreel/secondGridItem.png'
import thirdGridImage from '@/assets/img/scooty/imagesShowreel/thirdGridItem.png'
import fourthGridImage from '@/assets/img/scooty/imagesShowreel/fourthGridItem.png'
import fifthGridImage from '@/assets/img/scooty/imagesShowreel/fifthGridItem.png'
import sixthGridImage from '@/assets/img/scooty/imagesShowreel/sixthGridItem.png'

import {
    CaseShowReel,
    CaseShowReelProps,
} from '@/app/[locale]/components/CaseShowReel/CaseShowReel'

const config: CaseShowReelProps[] = [
    {
        image: firstGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'scooty guy with package',
        color: 'bg-[#d7f000]',
        delay: 0.25,
    },
    {
        image: secondGridImage,
        className: 'md:col-span-1 md:row-span-2 col-span-2 row-span-1',
        alt: 'scooty driving',
        color: 'bg-[#d7f000]',
        delay: 0.45,
    },
    {
        image: thirdGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'delivery on scooter',
        color: 'bg-[#d7f000]',
        delay: 0.1,
    },
    {
        image: fourthGridImage,
        className: 'col-span-2 row-auto md:row-span-3',
        alt: 'scooter',
        color: 'bg-[#d7f000]',
        delay: 0.35,
    },
    {
        image: fifthGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'guy checking delivery',
        color: 'bg-[#d7f000]',
        delay: 0.15,
    },
    {
        image: sixthGridImage,
        className: 'col-span-2 md:col-span-1 row-span-2 md:row-span-2',
        alt: 'guy with scooter',
        color: 'bg-[#d7f000]',
        delay: 0.5,
    },
]

export const ScootyShowReelSection = () => {
    return (
        <FlexContainer className="h-screen clip-path-container">
            <CaseShowReel config={config} />
        </FlexContainer>
    )
}
