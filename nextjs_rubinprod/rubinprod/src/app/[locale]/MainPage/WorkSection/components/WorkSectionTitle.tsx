import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { DesktopGridLayout } from './GridElements'

export const WorkSectionTitle = () => {
    return (
        <DesktopGridLayout>
            <FlexContainer direction="flex-col" className="col-start-2">
                <Text
                    fontWeight="font-bold"
                    variant="h4"
                    textTransform="uppercase"
                    className="relative"
                >
                    Portfolio
                    <Text
                        variant="h4"
                        textTransform="uppercase"
                        fontFamily="font-grunges"
                        className="absolute top-0 -left-20"
                    >
                        Our
                    </Text>
                </Text>
                <Text>
                    Nevytváříme pouze videoobsah - pro každý projekt vyvíjíme
                    jedinečný marketingový přístup.
                </Text>
            </FlexContainer>
        </DesktopGridLayout>
    )
}
