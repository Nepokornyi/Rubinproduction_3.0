import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import { useTranslations } from 'next-intl'
import React from 'react'

export const ContactSectionForm = () => {
    const t = useTranslations('ContactPage')

    return (
        <form className="md:max-w-[550px] w-full lg:w-[40%]">
            <FlexContainer
                direction="flex-col"
                gap="gap-2"
                className="px-6 lg:px-0"
            >
                <Input placeholder="email" />
                <Input placeholder="phone" />
                <FlexContainer className="my-4">
                    <Button className="md:border-none mr-6 md:bg-black">
                        {t('submit')}
                    </Button>
                </FlexContainer>
            </FlexContainer>
        </form>
    )
}
