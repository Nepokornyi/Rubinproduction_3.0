import { ReactNode } from 'react'
import styled from 'styled-components'

type ButtonProps = {
    children: ReactNode
}

const StyledButton = styled.button`
    font-size: clamp(12px, 1.5vw, 26px);
    font-weight: 600;
    border: 3px solid red;
    padding: 25px 60px 25px 35px;
    background-color: transparent;
`

export const Button = ({ children }: ButtonProps) => {
    return <StyledButton>{children}</StyledButton>
}
