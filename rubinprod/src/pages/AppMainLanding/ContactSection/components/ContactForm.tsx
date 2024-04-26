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
import emailjs from '@emailjs/browser'
import { useDialogState } from '../../../../helpers/useDialogState'
import { OverlayEmail } from '../../../../components/Overlay/OverlayEmail'

type ContactFormProps = {
    color?: string
}

type ButtonProps = LayoutFlexContainerProps & {
    $borderColor: string
}

const StyledForm = styled.form<LayoutFlexContainerProps>`
    width: ${(props) => (props.$isDesktopLayout ? '40%' : '100%')};
    max-width: ${(props) => props.$isDesktopLayout && '550px'};
`

const StyledButton = styled(Button)<ButtonProps>`
    background-color: ${(props) => props.$isDesktopLayout && '#0C0C0C'};
    border-color: ${(props) => props.$isDesktopLayout && props.$borderColor};
`

const StyledInput = styled(Input)`
    width: 100%;
    margin: 0;
    &:focus {
        border-bottom: 2px solid
            ${(props) =>
                props.$isDesktopLayout ? props.$transitionColor : '#d91e37'};
    }
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

export const ContactForm = ({ color = '#0C0C0C' }: ContactFormProps) => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isLargeDesktopLayout = useBreakpointBiggerThan('lg')

    const { showDialog, handleOpenDialog, handleCloseDialog } = useDialogState()
    const buttonHover = isDesktopLayout ? color : '#d91e37'

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit: SubmitHandler<FormSchema> = async (data) => {
        try {
            const templateParams = {
                email: data.email,
                phone: data.phone,
            }
            await emailjs.send(
                'service_8lcm3qw',
                'template_13uaodo',
                templateParams,
                'KJ0DMbdu2V3mz40mc'
            )
            handleOpenDialog()
            reset()
        } catch (error) {
            setError('root', {
                message: 'Something went wrong',
            })
        }
    }

    return (
        <>
            <OverlayEmail open={showDialog} onClose={handleCloseDialog} />

            <StyledForm
                id="contact-form"
                $isDesktopLayout={isLargeDesktopLayout}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FlexContainer direction="column" gap={'10px'}>
                    <StyledReveal x={-35}>
                        <StyledInput
                            {...register('email')}
                            type={'text'}
                            placeholder="Email"
                            $transitionColor={color}
                            $isDesktopLayout={isDesktopLayout}
                            error={errors.email?.message}
                        />
                    </StyledReveal>
                    <StyledReveal x={-50}>
                        <StyledInput
                            {...register('phone')}
                            type={'tel'}
                            placeholder="Phone"
                            $transitionColor={color}
                            $isDesktopLayout={isDesktopLayout}
                            error={errors.phone?.message}
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
                            $borderColor={color}
                            blockColor={buttonHover}
                            disabled={isSubmitting}
                            type={'submit'}
                        >
                            {t('contactPage.submit')}
                        </StyledButton>
                    </Reveal>
                </FlexContainer>
            </StyledForm>
        </>
    )
}
