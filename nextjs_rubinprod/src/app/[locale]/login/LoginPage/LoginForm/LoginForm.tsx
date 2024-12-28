import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginValueSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname } from 'next/navigation'
import { UnionLocales } from '@/intl.config'
import { OverlayLogin } from '@/components/Overlay/OverlayLogin'
import { useDialogState } from '@/hooks/useDialogState'
import { LoginStatus } from './const'
import { useTranslations } from 'next-intl'

export const LoginForm = () => {
    const t = useTranslations('LoginPage')
    const [submissionStatus, setSubmissionStatus] =
        useState<LoginStatus>('idle')
    const [submissionMessage, setSubmissionMessage] = useState('')
    const { showDialog, handleOpenDialog, handleCloseDialog } = useDialogState()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginValueSchema>({
        resolver: zodResolver(LoginSchema),
    })

    const currentLocale = usePathname()
        .split('/')
        .filter(Boolean)[0] as UnionLocales

    const onSubmit = async (data: LoginValueSchema) => {
        setSubmissionStatus('loading')
        try {
            const payload = {
                locale: currentLocale,
                login: data.login,
            }

            const response = await fetch(`/api/auth/magic-link`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const errorData = await response.json()
                setSubmissionStatus('error')
                setSubmissionMessage(errorData.message)
                reset()
                handleOpenDialog()
            }

            setSubmissionStatus('success')
            setSubmissionMessage('Check your email for the magic link')
            handleOpenDialog()
            reset()
        } catch (error: any) {
            setSubmissionStatus('error')
            setSubmissionMessage(error.message)
            handleOpenDialog()
        }
    }

    return (
        <>
            <OverlayLogin
                open={showDialog}
                onClose={handleCloseDialog}
                responseStatus={submissionStatus}
                message={submissionMessage}
            />
            <FlexContainer
                width="w-full md:w-1/2 max-w-[600px]"
                direction="flex-col"
                gap="gap-2"
                className="px-6 lg:px-0"
                justifyContent="justify-center"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        placeholder="login"
                        color="login"
                        {...register('login')}
                        error={errors.login?.message}
                    />
                    <FlexContainer direction="flex-col" gap="gap-4">
                        <Button
                            type="submit"
                            className="mr-6"
                            isDisabled={submissionStatus === 'loading'}
                        >
                            {t('login')}
                        </Button>
                    </FlexContainer>
                </form>
            </FlexContainer>
        </>
    )
}
