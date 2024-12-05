import {
    CaseVideoRow,
    CaseVideoRowProps,
} from '@/app/[locale]/components/CaseVideoRow/CaseVideoRow'
import React from 'react'

export const EliteVoyageEmployeeSection = () => {
    const config: CaseVideoRowProps[] = [
        {
            src: '/video/elitevoyage/employee/leftEmployee.mp4',
        },
        {
            src: '/video/elitevoyage/employee/middleEmployee.mp4',
        },
        {
            src: '/video/elitevoyage/employee/rightEmployee.mp4',
        },
    ]

    return (
        <CaseVideoRow
            title="Employee"
            accent="Spotlight Videos"
            color="text-[#B9965A]"
            config={config}
        />
    )
}
