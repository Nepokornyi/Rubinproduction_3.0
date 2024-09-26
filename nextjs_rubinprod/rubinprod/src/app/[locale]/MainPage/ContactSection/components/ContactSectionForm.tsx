import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import { useTranslations } from 'next-intl'
import React from 'react'

export const ContactSectionForm = () => {
    const t = useTranslations('ContactPage')

    return (
        <form className="md:max-w-[550px] w-full">
            <FlexContainer direction="flex-col">
                <Input placeholder="email" />
                <Input placeholder="phone" />
                <FlexContainer>
                    <Button className="md:border-none mx-6 mr-12 md:bg-black">
                        {t('submit')}
                    </Button>
                </FlexContainer>
            </FlexContainer>
        </form>
    )
}
