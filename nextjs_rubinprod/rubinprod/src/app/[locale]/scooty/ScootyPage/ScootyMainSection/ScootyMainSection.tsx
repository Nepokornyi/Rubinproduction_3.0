import React from 'react'

import background from '@/assets/img/scooty/scootyBackground.png'
import logo from '@/assets/img/scooty/ScootyLogo.svg'
import { CaseMainSection } from '@/app/[locale]/components/CaseMainSection/CaseMainSection'

export const ScootyMainSection = () => {
    return (
        <CaseMainSection
            background={background}
            logo={logo}
            altBackground="scooty background image"
            altLogo="scooty logo"
        />
    )
}
