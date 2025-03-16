import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Box } from '@/components/Box/Box'
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
import { Text } from '@/components/Text/Text'
import { FcGoogle } from 'react-icons/fc'

import './style.css'
import { LinkTransition } from '@/components/LinkTransition/LinkTransition'

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
            setSubmissionMessage(
                'Zkontroluj si prosím svüj mail. Poslali jsme ti odkaz.'
            )
            handleOpenDialog()
            reset()
        } catch (error: any) {
            setSubmissionStatus('error')
            setSubmissionMessage(error.message)
            handleOpenDialog()
        }
    }

    const handleGoogleAuth = async () => {
        try {
            setSubmissionStatus('loading')
            const response = await fetch(`/api/auth/google-login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ locale: currentLocale }),
            })

            const result = await response.json()

            if (response.ok && result.redirectUrl) {
                window.open(result.redirectUrl, '_self')
            } else {
                setSubmissionStatus('error')
                setSubmissionMessage(
                    result.message || 'Something went wrong. Please try again.'
                )
                handleOpenDialog()
            }
        } catch (err: any) {
            setSubmissionStatus('error')
            setSubmissionMessage(err.message || 'Unexpected error occurred.')
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
                width="w-full max-w-[410px] md:max-w-[450px]"
                direction="flex-col"
                gap="gap-2"
                className="px-6 py-16 xl:py-32 xl:border border-transparent form-border-gradient xl:bg-gradient-to-b from-transparent via-[#210000] to-transparent"
            >
                <Text variant="button" padding="px-0" textTransform="uppercase">
                    {t('login')}
                </Text>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        placeholder="tvůj e-mail"
                        color="login"
                        {...register('login')}
                        error={errors.login?.message}
                    />
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-4"
                        className="pr-6"
                    >
                        <Button
                            type="submit"
                            isDisabled={submissionStatus === 'loading'}
                        >
                            {t('login_button')}
                        </Button>
                    </FlexContainer>
                </form>
                <Text fontWeight="font-semibold" padding="px-0">
                    {t('alternative_login')}
                </Text>
                <FlexContainer gap="gap-2" alignItems="items-center">
                    <Box
                        className="border border-white p-2 rounded-sm hover:bg-[rgba(217,30,55,0.3)] cursor-pointer duration-500"
                        onClick={handleGoogleAuth}
                    >
                        <FcGoogle fontSize={36} />
                    </Box>
                </FlexContainer>
                <Text variant="disclaimer" padding="px-0">
                    Registrací souhlasím se{' '}
                    <LinkTransition href="/terms" className="text-[#d91e37]">
                        smluvními podmínkami{' '}
                    </LinkTransition>
                    a zásadami ochrany{' '}
                    <LinkTransition href="privacy" className="text-[#d91e37]">
                        osobních údajů{' '}
                    </LinkTransition>
                    Rubinproduction.
                </Text>
            </FlexContainer>
        </>
    )
}
