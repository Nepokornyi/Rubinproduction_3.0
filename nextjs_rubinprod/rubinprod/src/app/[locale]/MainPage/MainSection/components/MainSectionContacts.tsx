import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const MainSectionContacts = () => {
    return (
        <FlexContainer
            direction="flex-col"
            gap="gap-1"
            className="items-end md:items-start absolute md:static top-0 right-0"
        >
            <a href="tel:+420773042876">
                <Text
                    variant="socials"
                    className="no-underline transition-colors text-[#6e6e6e] hover:text-white"
                >
                    +420 773 042 876
                </Text>
            </a>
            <a href="mailto:info@rubinproduction.eu">
                <Text
                    variant="socials"
                    className="no-underline transition-colors text-[#6e6e6e] hover:text-white"
                >
                    info@rubinproduction.eu
                </Text>
            </a>
        </FlexContainer>
    )
}
