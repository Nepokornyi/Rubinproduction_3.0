import React from 'react'
import { CaseServicesSection } from '@/app/[locale]/components/CaseServicesSection/CaseServicesSection'
import { useTranslations } from 'next-intl'

import icoX from '@/assets/img/elitevoyage/icoX.svg'

export const EliteVoyageServicesSection = () => {
    const t = useTranslations('EliteVoyageCase.services')

    const list = [
        {
            title: 'Full-cycle Production',
            points: [t('production1'), t('production2'), t('production3')],
        },
        {
            title: 'Brand Identity',
            points: [t('brand1'), t('brand2'), t('brand3')],
        },
        {
            title: 'Social Media Content',
            points: [t('social1'), t('social2'), t('social3'), t('social4')],
            className: 'md:col-span-2 xl:col-span-1',
        },
    ]

    return <CaseServicesSection icoX={icoX} list={list} isShortList />
}
