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
import {
    Reveal,
    RevealProps,
} from '../../../../components/animations/reveal/Reveal'

const StyledForm = styled.form<LayoutFlexContainerProps>`
    width: ${(props) => (props.$isDesktopLayout ? '40%' : '100%')};
    max-width: ${(props) => props.$isDesktopLayout && '550px'};
`

const StyledButton = styled(Button)<LayoutFlexContainerProps>`
    background-color: ${(props) => props.$isDesktopLayout && '#0C0C0C'};
    border: ${(props) => props.$isDesktopLayout && 'none'};
`

const StyledInput = styled(Input)`
    width: 100%;
    margin: 0;
`

const StyledReveal = (props: RevealProps) => (
    <Reveal
        style={{ margin: '15px 25px' }}
        removeRepeatedReveal={false}
        {...props}
    >
        {props.children}
    </Reveal>
)

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
                <StyledReveal x={-35}>
                    <StyledInput
                        {...register('name')}
                        type={'text'}
                        placeholder="Name"
                        error={errors.name?.message}
                    />
                </StyledReveal>
                <StyledReveal x={-50}>
                    <StyledInput
                        {...register('email')}
                        type={'text'}
                        placeholder="Email"
                        error={errors.email?.message}
                    />
                </StyledReveal>
                <Reveal x={-65} removeRepeatedReveal={false}>
                    <Checkbox
                        {...register('terms')}
                        id={'termsCheckbox'}
                        type={'checkbox'}
                        error={errors.terms?.message}
                    />
                </Reveal>

                <Reveal x={-80} removeRepeatedReveal={false}>
                    <StyledButton
                        $isDesktopLayout={isDesktopLayout}
                        blockColor="#0C0C0C"
                        disabled={isSubmitting}
                        type={'submit'}
                    >
                        {t('contactPage.submit')}
                    </StyledButton>
                </Reveal>
            </FlexContainer>
        </StyledForm>
    )
}
