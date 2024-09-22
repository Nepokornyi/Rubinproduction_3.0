import { Arrow } from '@/components/Arrow/Arrow'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const AboutSectionDescription = () => {
    return (
        <FlexContainer width="w-auto" className="flex-col-reverse md:flex-row">
            <FlexContainer
                alignItems="items-center"
                width="w-auto"
                className="justify-center md:justify-end gap-3 my-16 md:my-0 md:ml-24"
            >
                <Text
                    textTransform="uppercase"
                    className="px-1 tracking-widest"
                >
                    Nasi
                </Text>
                <div className="md:order-last">
                    <Arrow direction="down" />
                </div>
                <Text
                    textTransform="uppercase"
                    className="px-1 md:mr-2 tracking-widest"
                >
                    Klienti
                </Text>
            </FlexContainer>
            <FlexContainer width="w-auto">
                <Text className="md:max-w-96 md:mx-6" variant="p">
                    Náš přístup je založen na kreativitě a inovaci, což dává
                    naší práci jedinečný charakter. Do každého snímku vkládáme
                    vášeň a odborné znalosti, abychom zajistili, že váš příběh
                    bude rezonovat s vaším publikem.
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}
