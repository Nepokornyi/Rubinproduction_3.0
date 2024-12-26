import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginValueSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendMagicLink } from './actions'
import { usePathname } from 'next/navigation'
import { UnionLocales } from '@/intl.config'

export const LoginForm = () => {
    const currentLocale = usePathname()
        .split('/')
        .filter(Boolean)[0] as UnionLocales

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginValueSchema>({
        resolver: zodResolver(LoginSchema),
    })

    const onSubmit = async (data: LoginValueSchema) => {
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
                throw new Error(errorData.message)
            }

            reset()
        } catch (error: any) {
            alert(error.message || 'An error occurred.')
        }
    }

    return (
        <FlexContainer
            width="w-full md:w-1/2"
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
                    <Button type="submit" className="mr-6">
                        Log in
                    </Button>
                </FlexContainer>
            </form>
        </FlexContainer>
    )
}
