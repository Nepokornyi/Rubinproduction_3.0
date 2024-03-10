import { ReactNode } from 'react'
import styled from 'styled-components'

type BoxProps = {
    children: ReactNode
    className?: string
}

const StyledBox = styled.div`
    position: relative;
`

export const Box = ({ children, className }: BoxProps) => {
    return <StyledBox className={className}>{children}</StyledBox>
}
