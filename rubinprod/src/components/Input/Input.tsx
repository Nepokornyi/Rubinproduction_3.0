import { forwardRef } from 'react'
import styled from 'styled-components'
import { Text } from '../Text/Text'
import { InputProps } from './types'
import { useBreakpointBiggerThan } from '../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../layout/types'

type StyledInputProps = LayoutFlexContainerProps & {
    $transitionColor?: string
}

const StyledInput = styled.input<StyledInputProps>`
    background-color: transparent;
    margin: 15px 25px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 2px solid white;
    font-size: clamp(12px, 2.5vw, 18px);
    &:focus {
        outline: none;
        border-bottom: 2px solid
            ${(props) =>
                props.$isDesktopLayout ? props.$transitionColor : '#d91e37'};
        transition: border-bottom 0.3s ease;
    }
    &::placeholder {
        text-transform: uppercase;
        opacity: 0.3;
        font-weight: 600;
    }
`

export const StyledError = styled(Text)`
    color: #d91e37;
`

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, ...props }, ref) => {
        const isDesktopLayout = useBreakpointBiggerThan('md')

        return (
            <>
                <StyledInput
                    $isDesktopLayout={isDesktopLayout}
                    $transitionColor={props.transitionColor}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <StyledError paddingOverride="0" variant="p">
                        {error}
                    </StyledError>
                )}
            </>
        )
    }
)

Input.displayName = 'Input'

export default Input
