import { forwardRef } from 'react'
import styled from 'styled-components'
import { Text } from '../Text/Text'
import { InputProps } from './types'

const StyledInput = styled.input`
    background-color: transparent;
    margin: 15px 25px;
    border: none;
    border-bottom: 2px solid white;
    &:focus {
        outline: none;
        border-bottom: 2px solid #d91e37;
    }
`

export const StyledError = styled(Text)`
    color: #d91e37;
`

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, ...props }, ref) => {
        return (
            <>
                <StyledInput ref={ref} {...props} />
                {error && <StyledError variant="p">{error}</StyledError>}
            </>
        )
    }
)

Input.displayName = 'Input'

export default Input
