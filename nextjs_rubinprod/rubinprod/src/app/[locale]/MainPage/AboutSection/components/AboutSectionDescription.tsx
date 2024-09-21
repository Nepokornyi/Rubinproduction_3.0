import { Box } from '@/components/Box/Box'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const AboutSectionDescription = () => {
    return (
        <FlexContainer gap="gap-6" center>
            <FlexContainer gap="gap-1" justifyContent="justify-end">
                <Text textTransform="uppercase">Nasi</Text>
                <div className="w-0.5 h-6 border-l md:order-last" />
                <Text textTransform="uppercase">Klienti</Text>
            </FlexContainer>
            <FlexContainer>
                <Text className="max-w-96" variant="p">
                    Náš přístup je založen na kreativitě a inovaci, což dává
                    naší práci jedinečný charakter. Do každého snímku vkládáme
                    vášeň a odborné znalosti, abychom zajistili, že váš příběh
                    bude rezonovat s vaším publikem.
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}