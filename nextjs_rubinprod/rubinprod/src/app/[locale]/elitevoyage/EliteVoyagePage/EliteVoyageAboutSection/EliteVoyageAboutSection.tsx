import React from 'react'
import { CaseAboutSection } from '@/app/[locale]/components/CaseAboutSection/CaseAboutSection'
import {
    CaseAboutBottomProps,
    CaseAboutTopProps,
} from '@/app/[locale]/components/CaseAboutSection/types'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { useTranslations } from 'next-intl'

import logo from '@/assets/img/elitevoyage/EliteVoyageLogoBrown.svg'

const topConfig: CaseAboutTopProps = {
    logo: logo,
    leftContent: 'Client',
    leftTitle: 'Elite Voyage',
    rightContent: 'Industry',
    rightTitle: 'Travel Agency',
}

export const EliteVoyageAboutSection = () => {
    const t = useTranslations('EliteVoyageCase')

    const bottomConfig: CaseAboutBottomProps = {
        services: [
            { text: 'Social Media' },
            { text: 'Advertising' },
            { text: 'Motion Design' },
            { text: 'Product' },
            { text: 'Photography' },
        ],
        clientChallenge: [
            {
                title: 'Client',
                text: t.rich('client', {
                    strong: (children) => <strong>{children}</strong>,
                }),
            },
            {
                title: 'Challenge',
                text: t.rich('challenge', {
                    strong: (children) => <strong>{children}</strong>,
                }),
            },
        ],
        color: 'text-[#B9965A]',
    }

    return (
        <FlexContainer id="about" center>
            <CaseAboutSection
                topConfig={topConfig}
                bottomConfig={bottomConfig}
            />
        </FlexContainer>
    )
}
