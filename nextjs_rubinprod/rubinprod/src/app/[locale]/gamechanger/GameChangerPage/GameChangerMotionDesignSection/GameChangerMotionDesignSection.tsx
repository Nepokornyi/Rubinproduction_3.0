import React from 'react'
import {
    CaseVideoRow,
    CaseVideoRowProps,
} from '@/app/[locale]/components/CaseVideoRow/CaseVideoRow'

export const GameChangerMotionDesignSection = () => {
    const config: CaseVideoRowProps[] = [
        {
            src: '/video/gamechanger/motion/firstMotion.mp4',
        },
        {
            src: '/video/gamechanger/motion/secondMotion.mp4',
        },
        {
            src: '/video/gamechanger/motion/thirdMotion.mp4',
        },
    ]
    return (
        <CaseVideoRow
            title="Integrated"
            accent="Motion Design"
            config={config}
        />
    )
}
