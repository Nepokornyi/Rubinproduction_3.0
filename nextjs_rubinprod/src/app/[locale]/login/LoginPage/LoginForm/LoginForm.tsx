import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Input from '@/components/Form/Input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginValueSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { login, signup } from './actions'
import { usePathname } from 'next/navigation'

export const LoginForm = () => {
    const [isSignup, setIsSignup] = useState(false)
    const currentLocale = usePathname().split('/').filter(Boolean)[0]

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginValueSchema>({
        resolver: zodResolver(LoginSchema),
    })

    const onSubmit = async (data: LoginValueSchema) => {
        try {
            const formData = new FormData()
            formData.append('locale', currentLocale)
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value)
            })

            if (isSignup) {
                await signup(formData)
            } else {
                await login(formData)
            }
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
                <Input
                    placeholder="password"
                    type="password"
                    color="login"
                    {...register('password')}
                    error={errors.password?.message}
                />
                <FlexContainer direction="flex-col" gap="gap-4">
                    <Button
                        type="submit"
                        onClick={() => setIsSignup(false)}
                        className="mr-6"
                    >
                        Log in
                    </Button>
                    <Button
                        type="submit"
                        onClick={() => setIsSignup(true)}
                        className="text-center cursor-pointer"
                    >
                        Signup
                    </Button>
                </FlexContainer>
            </form>
        </FlexContainer>
    )
}
