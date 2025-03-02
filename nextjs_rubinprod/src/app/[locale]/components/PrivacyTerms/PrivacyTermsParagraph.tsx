import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React, { ReactNode } from 'react'

type PrivacyTermsParagraphProps = {
    title: string
    children: ReactNode
}

export const PrivacyTermsParagraph = ({
    title,
    children,
}: PrivacyTermsParagraphProps) => {
    return (
        <FlexContainer direction="flex-col" gap="gap-4">
            <Text variant="button">{title}</Text>
            <Text>{children}</Text>
        </FlexContainer>
    )
}
