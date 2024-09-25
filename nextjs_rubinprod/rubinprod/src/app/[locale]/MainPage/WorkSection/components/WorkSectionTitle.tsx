import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { DesktopGridLayout, MobileGridLayout } from './GridElements'

const DesktopTitle = () => (
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
                    variant="h3"
                    fontFamily="font-grunges"
                    className="absolute md:top-4 lg:top-2 md:-left-20"
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

const MobileTitle = () => (
    <MobileGridLayout>
        <FlexContainer direction="flex-col" className="col-start-2">
            <Text
                fontWeight="font-bold"
                variant="h4"
                textTransform="uppercase"
                className="relative"
            >
                <Text
                    variant="h4"
                    textTransform="uppercase"
                    fontFamily="font-grunges"
                >
                    Our
                </Text>
                Portfolio
            </Text>
            <Text>
                Nevytváříme pouze videoobsah - pro každý projekt vyvíjíme
                jedinečný marketingový přístup.
            </Text>
        </FlexContainer>
    </MobileGridLayout>
)

export const WorkSectionTitle = () => {
    return (
        <>
            <DesktopTitle />
            <MobileTitle />
        </>
    )
}
