import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { WorkSectionTitle } from './components/WorkSectionTitle'
import { WorkSectionGrid } from './components/WorkSectionGrid'

export const WorkSection = () => {
    return (
        <FlexContainer
            id="portfolio"
            center
            direction="flex-col"
            className="pt-12"
        >
            <WorkSectionTitle />
            <WorkSectionGrid />
        </FlexContainer>
    )
}
