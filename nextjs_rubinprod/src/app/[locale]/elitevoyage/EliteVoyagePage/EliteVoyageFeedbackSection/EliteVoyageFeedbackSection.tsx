import {
    CaseFeedback,
    CaseFeedbackProps,
} from '@/app/[locale]/components/CaseFeedback/CaseFeedback'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { useTranslations } from 'next-intl'
import React from 'react'
import author from '@/assets/img/elitevoyage/author.png'

export const EliteVoyageFeedbackSection = () => {
    const t = useTranslations('EliteVoyageCase')

    const config: CaseFeedbackProps = {
        img: author,
        alt: 'Igor portrait',
        feedback: t('feedback'),
        link: 'https://www.linkedin.com/in/igor-glinka-8391942b5/',
        name: 'Igor Glinka',
        position: 'Head of Production',
    }

    return (
        <FlexContainer className="relative pt-36 pb-24">
            <CaseFeedback config={config} />
        </FlexContainer>
    )
}
