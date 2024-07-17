import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styled from 'styled-components'
import jsonp from 'jsonp'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, formSchema } from '../const'
import { Button } from '../../../../components/Button/Button'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import Input from '../../../../components/Input/Input'
import { useTranslation } from 'react-i18next'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import {
    Reveal,
    RevealProps,
} from '../../../../components/animations/reveal/Reveal'
import { useDialogState } from '../../../../helpers/useDialogState'
import { OverlayEmail } from '../../../../components/Overlay/OverlayEmail'
import { AppLandingVariants } from '../../../../components/Header/Header'

type ContactFormProps = {
    color?: string
    variant?: AppLandingVariants
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
    border-color: ${(props) => props.$borderColor && props.$borderColor};
`

const StyledInput = styled(Input)`
    width: 100%;
    margin: 0;
    &:focus {
        border-bottom: 2px solid ${(props) => props.$transitionColor};
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

export const ContactForm = ({
    color = '#0C0C0C',
    variant,
}: ContactFormProps) => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isLargeDesktopLayout = useBreakpointBiggerThan('lg')

    const { showDialog, handleOpenDialog, handleCloseDialog } = useDialogState()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const isMainVariant = variant === 'main'
    const buttonHover = isMainVariant
        ? isDesktopLayout
            ? color
            : '#d91e37'
        : color

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit: SubmitHandler<FormSchema> = (data) => {
        setIsSubmitting(true)
        const url =
            'https://rubinproduction.us22.list-manage.com/subscribe/post?u=9b8f316816399a95e33302c49&amp;id=9fd54cbf57&amp;f_id=00afd1e1f0'

        jsonp(
            `${url}&EMAIL=${data.email}&PHONE=${data.phone}`,
            { param: 'c' },
            (err, data) => {
                setIsSubmitting(false)
                if (err) {
                    setError('root', {
                        message: 'Something went wrong',
                    })
                } else {
                    const { msg, result } = data
                    if (result === 'success') {
                        handleOpenDialog()
                        reset()
                        console.log('data sent', data)
                    } else {
                        setError('root', {
                            message: msg,
                        })
                    }
                }
            }
        )
    }

    return (
        <>
            <OverlayEmail open={showDialog} onClose={handleCloseDialog} />

            <StyledForm
                onSubmit={handleSubmit(onSubmit)}
                $isDesktopLayout={isLargeDesktopLayout}
            >
                <FlexContainer direction="column" gap={'10px'}>
                    <StyledReveal x={-35}>
                        <StyledInput
                            {...register('email')}
                            type={'email'}
                            placeholder="Email"
                            $transitionColor={buttonHover}
                            $isDesktopLayout={isDesktopLayout}
                            error={errors.email?.message}
                        />
                    </StyledReveal>
                    <StyledReveal x={-50}>
                        <StyledInput
                            {...register('phone')}
                            type={'tel'}
                            placeholder="Phone"
                            $transitionColor={buttonHover}
                            $isDesktopLayout={isDesktopLayout}
                            error={errors.phone?.message}
                        />
                    </StyledReveal>
                    <Reveal x={-80} removeRepeatedReveal={false}>
                        <StyledButton
                            $isDesktopLayout={isDesktopLayout}
                            $borderColor={buttonHover}
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
