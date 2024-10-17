import {
    CaseVideoRow,
    CaseVideoRowProps,
} from '@/app/[locale]/components/CaseVideoRow/CaseVideoRow'
import React from 'react'

export const EliteVoyageRecruitmentSection = () => {
    const config: CaseVideoRowProps[] = [
        {
            src: '/video/elitevoyage/recruit/leftRecruit.mp4',
        },
        {
            src: '/video/elitevoyage/recruit/middleRecruit.mp4',
        },
        {
            src: '/video/elitevoyage/recruit/rightRecruit.mp4',
        },
    ]

    return <CaseVideoRow title="Travel" accent="Videos" config={config} />
}
