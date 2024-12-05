'use client'
import { Button } from '@/components/Button/Button'
import { ButtonVariantsList } from '@/components/Button/types'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import { useDialogState } from '@/hooks/useDialogState'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, formSchema } from './schema'
import { OverlayEmail } from '@/components/Overlay/OverlayEmail'
import { useState } from 'react'
import { ResponseStatus } from './const'
import { trackEvent } from '@/helpers/facebookPixel'

type ContactSectionFormProps = {
    theme?: ButtonVariantsList
}

export const ContactSectionForm = ({
    theme = 'form',
}: ContactSectionFormProps) => {
    const t = useTranslations('ContactPage')

    const [submissionStatus, setSubmissionStatus] =
        useState<ResponseStatus>('idle')
    const [submissionMessage, setSubmissionMessage] = useState('')
    const { showDialog, handleOpenDialog, handleCloseDialog } = useDialogState()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FormSchema) => {
        setSubmissionStatus('loading')
        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (response.ok) {
                trackEvent('SubmitApplication', {
                    email: data.email,
                    phone: data.phone,
                })

                setSubmissionStatus('success')
                setSubmissionMessage('Thank you for your submission')
                reset()
                handleOpenDialog()
            } else {
                setSubmissionStatus('error')
                setSubmissionMessage(result.error || 'Something went wrong')
                handleOpenDialog()
            }
        } catch (error) {
            setSubmissionStatus('error')
            setSubmissionMessage('Something went wrong')
            handleOpenDialog()
        }
    }

    return (
        <>
            <OverlayEmail
                open={showDialog}
                onClose={handleCloseDialog}
                message={submissionMessage}
                responseStatus={submissionStatus}
            />
            <form
                className="md:max-w-[550px] w-full lg:w-[40%]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FlexContainer
                    direction="flex-col"
                    gap="gap-2"
                    className="px-6 lg:px-0"
                >
                    <Input
                        {...register('email')}
                        type="email"
                        placeholder="email"
                        error={errors.email?.message}
                        color={theme}
                    />
                    <Input
                        {...register('phone')}
                        type="tel"
                        placeholder="phone"
                        error={errors.phone?.message}
                        color={theme}
                    />
                    <FlexContainer className="my-4">
                        <Button
                            blockColor={theme}
                            type="submit"
                            className="mr-6"
                            isDisabled={submissionStatus === 'loading'}
                        >
                            {t('submit')}
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </form>
        </>
    )
}
