import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'

import { ScootyAboutTop } from './components/ScootyAboutTop'
import { ScootyAboutBottom } from './components/ScootyAboutBottom'

export const ScootyAboutSection = () => {
    return (
        <FlexContainer center>
            <Box className="grid md:w-11/12 xl:w-3/4 2xl:w-3/5 grid-rows-[auto,1fr]  grid-cols-2 md:grid-cols-3 gap-x-14 pt-36 pb-24 ">
                <ScootyAboutTop />
                <ScootyAboutBottom />
            </Box>
        </FlexContainer>
    )
}
