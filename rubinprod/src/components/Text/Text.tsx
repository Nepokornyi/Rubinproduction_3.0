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
    children?: ReactNode
    fontFamily?: FontFamily
    variant?: VariantStyles
    fontWeight?: FontWeight
    $color?: string
    $textTransform?: TextTransform
    $paddingOverride?: string
    $textAlign?: TextAlign
    className?: string
    dangerousText?: string
}

const StyledText = styled.span<TextProps>`
    font-family: ${(props) => props.fontFamily || 'Montserrat, sans-serif'};
    color: ${(props) => props.$color || '#fff'};
    font-weight: ${(props) => props.fontWeight || '400'};
    text-transform: ${(props) => props.$textTransform || 'none'};
    text-align: ${(props) => props.$textAlign || 'inherit'};
    ${(props) => props.variant && variantStyles[props.variant]}
    padding: ${(props) => props.$paddingOverride};
`

export const Text = ({
    children,
    dangerousText,
    $paddingOverride,
    ...props
}: TextProps) => {
    const paddingValue = $paddingOverride ?? '0 25px'

    const content = dangerousText ? (
        <StyledText
            $paddingOverride={paddingValue}
            dangerouslySetInnerHTML={{ __html: dangerousText }}
            {...props}
        />
    ) : (
        <StyledText $paddingOverride={paddingValue} {...props}>
            {children}
        </StyledText>
    )

    return <>{content}</>
}
