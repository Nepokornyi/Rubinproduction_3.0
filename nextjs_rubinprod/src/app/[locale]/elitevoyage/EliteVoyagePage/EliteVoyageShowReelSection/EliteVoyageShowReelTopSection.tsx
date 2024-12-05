import React from 'react'
import {
    CaseShowReel,
    CaseShowReelProps,
} from '@/app/[locale]/components/CaseShowReel/CaseShowReel'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'

import firstGridImage from '@/assets/img/elitevoyage/showreelTop/firstGridItem.png'
import secondGridImage from '@/assets/img/elitevoyage/showreelTop/secondGridItem.png'
import thirdGridImage from '@/assets/img/elitevoyage/showreelTop/thirdGridItem.png'
import fourthGridImage from '@/assets/img/elitevoyage/showreelTop/fourthGridItem.png'
import fifthGridImage from '@/assets/img/elitevoyage/showreelTop/fifthGridItem.png'
import sixthGridImage from '@/assets/img/elitevoyage/showreelTop/sixthGridItem.png'

const config: CaseShowReelProps[] = [
    {
        image: firstGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'guy with camera',
        color: 'bg-[#B9965A]',
        delay: 0.25,
    },
    {
        image: secondGridImage,
        className: 'md:col-span-1 md:row-span-2 col-span-2 row-span-1',
        alt: 'game changer patches',
        color: 'bg-[#B9965A]',
        delay: 0.45,
    },
    {
        image: thirdGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'game changer patches',
        color: 'bg-[#B9965A]',
        delay: 0.1,
    },
    {
        image: fourthGridImage,
        className: 'col-span-2 row-auto md:row-span-3',
        alt: 'game changer patches',
        color: 'bg-[#B9965A]',
        delay: 0.35,
    },
    {
        image: fifthGridImage,
        className: 'col-span-2 row-span-2',
        alt: 'guy checking camera',
        color: 'bg-[#B9965A]',
        delay: 0.15,
    },
    {
        image: sixthGridImage,
        className: 'col-span-2 md:col-span-1 row-span-2 md:row-span-2',
        alt: 'guy shooting patches',
        color: 'bg-[#B9965A]',
        delay: 0.5,
    },
]

export const EliteVoyageShowReelTopSection = () => {
    return (
        <FlexContainer className="h-screen clip-path-container">
            <CaseShowReel config={config} />
        </FlexContainer>
    )
}
