import {
    CaseFeedback,
    CaseFeedbackProps,
} from '@/app/[locale]/components/CaseFeedback/CaseFeedback'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { useTranslations } from 'next-intl'
import React from 'react'
import author from '@/assets/img/gamechanger/author.png'

export const GameChangerFeedbackSection = () => {
    const t = useTranslations('GameChangerCase')

    const config: CaseFeedbackProps = {
        img: author,
        alt: 'David portrait',
        feedback: t('feedback'),
        link: 'https://www.linkedin.com/in/david-minnivaliev-71849031a/',
        name: 'David Minnivaliev',
        position: 'Head of Post-Production',
    }

    return (
        <FlexContainer className="relative pt-36 pb-24">
            <CaseFeedback config={config} />
        </FlexContainer>
    )
}
