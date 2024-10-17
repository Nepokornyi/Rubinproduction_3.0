import React from 'react'
import {
    CaseVideoRow,
    CaseVideoRowProps,
} from '@/app/[locale]/components/CaseVideoRow/CaseVideoRow'
import { useTranslations } from 'next-intl'

export const GameChangerMarketingSection = () => {
    const t = useTranslations('GameChangerCase.marketing')

    const config: CaseVideoRowProps[] = [
        {
            src: '/video/gamechanger/marketing/topMarketing.mp4',
            title: 'Top Funnel',
            description: t('top'),
        },
        {
            src: '/video/gamechanger/marketing/middleMarketing.mp4',
            title: 'Middle Funnel',
            description: t('middle'),
        },
        {
            src: '/video/gamechanger/marketing/bottomMarketing.mp4',
            title: 'Bottom Funnel',
            description: t('bottom'),
        },
    ]

    return <CaseVideoRow title="Marketing" accent="Videos" config={config} />
}
