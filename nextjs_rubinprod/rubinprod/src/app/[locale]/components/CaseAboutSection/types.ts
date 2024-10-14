import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type CaseAboutTopProps = {
    logo: StaticImageData
    leftTitle: string | ReactNode
    leftContent: string | ReactNode
    rightTitle: string | ReactNode
    rightContent: string | ReactNode
}

export type CaseAboutBottomProps = {
    services: { text: string | ReactNode }[]
    clientChallenge: { title: string | ReactNode; text: string | ReactNode }[]
}
