import React from 'react'
import {
    CaseVideoRow,
    CaseVideoRowProps,
} from '@/app/[locale]/components/CaseVideoRow/CaseVideoRow'

export const EliteVoyageTravelSection = () => {
    const config: CaseVideoRowProps[] = [
        {
            src: '/video/elitevoyage/travel/leftTravel.mp4',
        },
        {
            src: '/video/elitevoyage/travel/middleTravel.mp4',
        },
        {
            src: '/video/elitevoyage/travel/rightTravel.mp4',
        },
    ]

    return <CaseVideoRow title="Travel" accent="Videos" config={config} />
}
