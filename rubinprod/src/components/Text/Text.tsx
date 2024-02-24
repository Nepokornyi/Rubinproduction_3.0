import { ReactNode } from 'react'
import styled from 'styled-components'
import {
    FontFamily,
    FontWeight,
    TextAlign,
    TextTransform,
    VariantStyles,
    variantStyles,
} from './const'

type TextProps = {
    children: ReactNode
    fontFamily?: FontFamily
    variant?: VariantStyles
    color?: string
    fontWeight?: FontWeight
    textTransform?: TextTransform
    textAlign?: TextAlign
}

const StyledText = styled.div<TextProps>`
    font-family: ${(props) => props.fontFamily || 'Montserrat, sans-serif'};
    color: ${(props) => props.color || '#fff'};
    font-weight: ${(props) => props.fontWeight || '400'};
    text-transform: ${(props) => props.textTransform || 'none'};
    text-align: ${(props) => props.textAlign || 'inherit'};
    ${(props) => props.variant && variantStyles[props.variant]}
`

export const Text = ({ children, ...props }: TextProps) => {
    return <StyledText {...props}>{children}</StyledText>
}
