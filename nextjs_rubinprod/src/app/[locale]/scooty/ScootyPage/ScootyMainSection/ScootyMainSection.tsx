import React from 'react'
import { CaseMainSection } from '@/app/[locale]/components/CaseMainSection/CaseMainSection'

import background from '@/assets/img/scooty/ScootyBackground.png'
import logo from '@/assets/img/scooty/ScootyLogo.svg'

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
