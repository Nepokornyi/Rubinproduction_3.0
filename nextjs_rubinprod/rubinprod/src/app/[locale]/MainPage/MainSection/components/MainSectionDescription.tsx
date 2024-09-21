import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { MainSectionContacts } from './MainSectionContacts'
import { Text } from '@/components/Text/Text'

export const MainSectionDescription = () => {
    return (
        <FlexContainer
            gap="gap-1"
            justifyContent="justify-between"
            alignItems="items-center"
            className="mt-3 mb-5"
        >
            <MainSectionContacts />
            <Box className="md:max-w-[15rem] lg:max-w-[27rem]">
                <Text className="md:text-sm lg:ml-8 2xl:ml-0 inline-block">
                    Vaši vizi proměníme ve skutečnost - od konceptu až po
                    finální střih, naše odhodlání k preciznosti a kreativitě
                    zaručuje, že každý projekt předčí očekávání.
                </Text>
            </Box>
        </FlexContainer>
    )
}
