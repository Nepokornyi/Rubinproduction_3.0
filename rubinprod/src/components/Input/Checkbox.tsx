import { forwardRef } from 'react'
import styled from 'styled-components'
import { Box } from '../layout/Box'
import { InputProps } from './types'
import { useTranslation } from 'react-i18next'
import { Text } from '../Text/Text'

const StyledCheckbox = styled.input`
    background-color: transparent;
    margin: 15px 15px 15px 25px;
    &:focus {
        outline: none;
        border-bottom: 2px solid #d91e37;
    }
`

const StyledLabel = styled.label`
    text-transform: uppercase;
    opacity: 0.5;
    font-weight: 600;
    font-size: clamp(12px, 2.5vw, 18px);
`

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(
    ({ error, id, ...props }, ref) => {
        const { t } = useTranslation()
        return (
            <>
                <Box>
                    <StyledCheckbox {...props} ref={ref} />
                    {id && (
                        <StyledLabel htmlFor={id}>
                            {t('contactPage.agreement')}
                        </StyledLabel>
                    )}
                </Box>
                {error && (
                    <Text variant="p" $color="#d91e37">
                        {error}
                    </Text>
                )}
            </>
        )
    }
)

Checkbox.displayName = 'Checkbox'
