'use client'
import React from 'react'
import Input from '@/components/Form/Input'
import { LoginSchema, LoginValueSchema } from './schema'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const LoginSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginValueSchema>({
        resolver: zodResolver(LoginSchema),
    })

    const onSubmit = async (data: LoginValueSchema) => {
        const { login } = data

        const result = await signIn('email', { login, redirect: false })

        if (result?.error) {
            alert('Failed to send magic link. Please try again.')
        } else {
            alert('Magic link sent! Check your email.')
        }
    }
    return (
        <FlexContainer minHeight="min-h-100vh" center>
            <FlexContainer
                direction="flex-col"
                gap="gap-2"
                className="px-6 lg:px-0 lg:w-1/2"
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
                        <Button className="mr-6" type="submit">
                            Log in
                        </Button>
                        <Button onClick={() => signIn('google')}>Google</Button>
                    </FlexContainer>
                </form>
            </FlexContainer>
        </FlexContainer>
    )
}
