import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { DesktopGrid } from './components/DesktopGrid'

export const WorkSection = () => {
    return (
        <FlexContainer center direction="flex-col" className="pt-12">
            <DesktopGrid />
        </FlexContainer>
    )
}
