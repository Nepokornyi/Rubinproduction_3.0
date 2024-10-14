import { CaseServicesSection } from '@/app/[locale]/components/CaseServicesSection/CaseServicesSection'
import { useTranslations } from 'next-intl'
import icoX from '@/assets/img/gamechanger/icoX.png'
import React from 'react'

export const GameChangerServicesSection = () => {
    const t = useTranslations('GameChangerCase.services')

    const list = [
        {
            title: 'Social media advertising',
            points: [t('social1'), t('social2'), t('social3'), t('social4')],
        },
        {
            title: 'Motion design / animations',
            points: [t('motion1'), t('motion2')],
        },
        {
            title: 'Product photography',
            points: [t('photography1'), t('photography2')],
            className: 'md:col-span-2 xl:col-span-1',
        },
    ]

    return <CaseServicesSection icoX={icoX} list={list} isShortList />
}
