import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { MainSectionContacts } from './MainSectionContacts'

export const MainSectionDescription = () => {
    return (
        <FlexContainer
            gap="gap-1"
            justifyContent="justify-between"
            alignItems="items-center"
        >
            <MainSectionContacts />
            <Box className="max-w-96">
                Vaši vizi proměníme ve skutečnost - od konceptu až po finální
                střih, naše odhodlání k preciznosti a kreativitě zaručuje, že
                každý projekt předčí očekávání.
            </Box>
        </FlexContainer>
    )
}
