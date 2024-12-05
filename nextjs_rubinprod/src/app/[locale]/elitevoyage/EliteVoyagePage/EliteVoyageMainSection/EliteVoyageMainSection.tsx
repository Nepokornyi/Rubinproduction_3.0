import { CaseMainSection } from '@/app/[locale]/components/CaseMainSection/CaseMainSection'
import React from 'react'

import background from '@/assets/img/elitevoyage/EliteVoyageBackground.png'
import logo from '@/assets/img/elitevoyage/EliteVoyageLogo.svg'

export const EliteVoyageMainSection = () => {
    return (
        <CaseMainSection
            background={background}
            logo={logo}
            altBackground="gamechanger background image"
            altLogo="gamechanger logo"
        />
    )
}
