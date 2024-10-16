import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { useTranslations } from 'next-intl'
import {
    CaseFeedback,
    CaseFeedbackProps,
} from '@/app/[locale]/components/CaseFeedback/CaseFeedback'

export const ScootyFeedbackSection = () => {
    const t = useTranslations('ScootyCase')

    const config: CaseFeedbackProps = {
        alt: 'Nikita portrait',
        feedback: t('feedback'),
        link: 'https://www.linkedin.com/in/nikita-rubin-a4a04b190/',
        name: 'Nikita Rubin',
        position: 'Founder of Rubin Production',
    }

    return (
        <FlexContainer className="relative pt-36 pb-24">
            <CaseFeedback config={config} />
        </FlexContainer>
    )
}
