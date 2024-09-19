import { ReactNode, useEffect } from 'react'
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
    dangerousText?: string
    fontFamily?: FontFamily
    variant?: VariantStyles
    fontWeight?: FontWeight
    textTransform?: TextTransform
    textAlign?: TextAlign
    padding?: string
    className?: string
}

export const Text = ({
    children,
    dangerousText,
    fontFamily = 'font-montserrat',
    variant,
    fontWeight = 'font-normal',
    textTransform = 'none',
    textAlign = 'inherit',
    padding = 'p-0',
    className = '',
}: TextProps) => {
    const variantClass = variant ? variantStyles[variant] : ''
    const combinedClasses = [
        variantClass,
        textTransform !== 'none' ? textTransform : '',
        textAlign !== 'inherit' ? textAlign : '',
        fontWeight,
        fontFamily,
        padding,
        className,
    ].join(' ')

    const content = dangerousText ? (
        <span
            className={combinedClasses}
            dangerouslySetInnerHTML={{ __html: dangerousText }}
        />
    ) : (
        <span className={combinedClasses}>{children}</span>
    )

    return <>{content}</>
}
