import { Arrow } from '@/components/Arrow/Arrow'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

export const AboutSectionDescription = () => {
    const t = useTranslations('AboutPage')

    return (
        <FlexContainer
            width="w-auto"
            className="mb-16 flex-col-reverse md:flex-row"
        >
            <FlexContainer
                alignItems="items-center"
                width="w-auto"
                className="justify-center md:justify-end gap-3 my-16 md:my-0 md:ml-24"
            >
                <Text
                    textTransform="uppercase"
                    className="px-1 tracking-widest"
                >
                    {t('clients_left')}
                </Text>
                <div className="md:order-last">
                    <Arrow direction="down" />
                </div>
                <Text
                    textTransform="uppercase"
                    className="px-1 md:mr-2 tracking-widest"
                >
                    {t('clients_right')}
                </Text>
            </FlexContainer>
            <FlexContainer width="w-auto">
                <Text className="md:max-w-96 md:mx-6" variant="p">
                    {t('description')}
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}
