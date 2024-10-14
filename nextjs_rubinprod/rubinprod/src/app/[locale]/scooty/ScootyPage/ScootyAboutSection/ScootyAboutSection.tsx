import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

import { CaseAboutSection } from '@/app/[locale]/components/CaseAboutSection/CaseAboutSection'
import { useTranslations } from 'next-intl'
import {
    CaseAboutBottomProps,
    CaseAboutTopProps,
} from '@/app/[locale]/components/CaseAboutSection/types'

import logo from '@/assets/img/scooty/ScootyLogoGreen.svg'

const topConfig: CaseAboutTopProps = {
    logo: logo,
    leftContent: 'Client',
    leftTitle: 'Scooty',
    rightContent: 'Industry',
    rightTitle: 'Food Delivery',
}

export const ScootyAboutSection = () => {
    const t = useTranslations('ScootyCase')

    const bottomConfig: CaseAboutBottomProps = {
        services: [
            { text: 'Web Development' },
            { text: 'Schooting' },
            { text: 'Animation' },
            { text: 'Instagram Feed' },
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
