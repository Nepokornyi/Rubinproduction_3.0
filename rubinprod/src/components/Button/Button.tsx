import { ReactNode } from 'react'
import styled from 'styled-components'
import { Text } from '../Text/Text'
import { ArrowRight } from './Arrow'

type ButtonProps = {
    children: ReactNode
}

const StyledArrowRight = styled(ArrowRight)`
    position: absolute;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
`

const StyledButton = styled.button`
    background-color: transparent;
    position: relative;
    text-align: left;
    border: 2px solid #d91e37;
    padding: 15px 0;
    margin: 15px 75px 0 25px;
    cursor: pointer;
`

export const Button = ({ children }: ButtonProps) => {
    return (
        <StyledButton>
            <Text textTransform="uppercase" variant="button">
                {children}
            </Text>
            <StyledArrowRight />
        </StyledButton>
    )
}
