import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../../../components/Button/Button'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import Input from '../../../../components/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, formSchema } from '../const'
import { Checkbox } from '../../../../components/Input/Checkbox'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'

const StyledForm = styled.form<LayoutFlexContainerProps>`
    width: ${(props) => (props.$isDesktopLayout ? '40%' : '100%')};
`

const StyledButton = styled(Button)<LayoutFlexContainerProps>`
    background-color: ${(props) => props.$isDesktopLayout && 'black'};
    border: ${(props) => props.$isDesktopLayout && 'none'};
`

export const ContactForm = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isLargeDesktopLayout = useBreakpointBiggerThan('lg')

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
        <StyledForm
            $isDesktopLayout={isLargeDesktopLayout}
            onSubmit={handleSubmit(onSubmit)}
        >
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

                <StyledButton
                    $isDesktopLayout={isDesktopLayout}
                    disabled={isSubmitting}
                    type={'submit'}
                >
                    {t('contactPage.submit')}
                </StyledButton>
            </FlexContainer>
        </StyledForm>
    )
}
