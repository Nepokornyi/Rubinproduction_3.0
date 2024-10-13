import { CaseMainSection } from '@/app/[locale]/components/CaseMainSection/CaseMainSection'
import React from 'react'

import background from '@/assets/img/gamechanger/GameChangerBackground.png'
import logo from '@/assets/img/gamechanger/GameChangerLogo.svg'

export const GameChangerMainSection = () => {
    return (
        <CaseMainSection
            background={background}
            logo={logo}
            altLogo=""
            altBackground=""
        />
    )
}
