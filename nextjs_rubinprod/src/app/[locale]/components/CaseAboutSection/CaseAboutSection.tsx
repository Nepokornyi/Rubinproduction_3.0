import { Box } from '@/components/Box/Box'
import React from 'react'
import { CaseAboutTop } from './CaseAboutTop'
import { CaseAboutBottom } from './CaseAboutBottom'
import { CaseAboutBottomProps, CaseAboutTopProps } from './types'

type CaseAboutSectionProps = {
    topConfig: CaseAboutTopProps
    bottomConfig: CaseAboutBottomProps
}

export const CaseAboutSection = ({
    topConfig,
    bottomConfig,
}: CaseAboutSectionProps) => {
    return (
        <Box className="grid md:w-11/12 xl:w-3/4 grid-rows-[auto,1fr]  grid-cols-2 md:grid-cols-3 gap-x-14 pt-36 pb-24 px-6">
            <CaseAboutTop {...topConfig} />
            <CaseAboutBottom {...bottomConfig} />
        </Box>
    )
}
