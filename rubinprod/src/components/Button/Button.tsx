import { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { Text } from '../Text/Text'
import { ArrowRight } from '../Arrow/Arrow'
import { Spinner } from '../Spinner/Spinner'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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

export const Button = ({ children, ...props }: ButtonProps) => {
    const isDisabled = props.disabled
    const renderContent = isDisabled ? (
        <Spinner />
    ) : (
        <Text textTransform="uppercase" variant="button">
            {children}
        </Text>
    )

    return (
        <StyledButton {...props}>
            {renderContent}
            <StyledArrowRight />
        </StyledButton>
    )
}
