import { useTranslations } from 'next-intl'
import icoX from '@/assets/img/scooty/icoX.svg'
import React from 'react'

import { CaseServicesSection } from '@/app/[locale]/components/CaseServicesSection/CaseServicesSection'

export const ScootyServicesSection = () => {
    const t = useTranslations('ScootyCase.services')

    const list = [
        {
            title: 'Strategy',
            points: [t('strategy1'), t('strategy2'), t('strategy3')],
        },
        {
            title: 'Conception',
            points: [t('conception1'), t('conception2'), t('conception3')],
        },
        {
            title: 'Production',
            points: [t('production1'), t('production2'), t('production3')],
        },
        { title: 'Post-Production', points: [t('postProd1'), t('postProd2')] },
    ]

    return <CaseServicesSection icoX={icoX} list={list} />
}
