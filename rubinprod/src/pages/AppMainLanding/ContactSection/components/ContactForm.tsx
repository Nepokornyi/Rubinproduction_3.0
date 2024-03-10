import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../../../components/Button/Button'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import Input from '../../../../components/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, formSchema } from '../const'
import { Checkbox } from '../../../../components/Input/Checkbox'
import { useTranslation } from 'react-i18next'

export const ContactForm = () => {
    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit: SubmitHandler<FormSchema> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2250))
            console.log(data)
        } catch (error) {
            setError('root', {
                message: 'Something went wrong',
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FlexContainer direction="column" gap={'10px'}>
                <Input
                    {...register('name')}
                    type={'text'}
                    placeholder="Name"
                    error={errors.name?.message}
                />
                <Input
                    {...register('email')}
                    type={'text'}
                    placeholder="Email"
                    error={errors.email?.message}
                />
                <Checkbox
                    {...register('terms')}
                    id={'termsCheckbox'}
                    type={'checkbox'}
                    error={errors.terms?.message}
                />

                <Button disabled={isSubmitting} type={'submit'}>
                    {t('contactPage.submit')}
                </Button>
            </FlexContainer>
        </form>
    )
}
