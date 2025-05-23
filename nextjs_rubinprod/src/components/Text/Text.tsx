import { ReactNode } from 'react'
import {
    FontFamily,
    FontHeight,
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
    fontHeight?: FontHeight
    textTransform?: TextTransform
    textAlign?: TextAlign
    padding?: string
    className?: string
    onClick?: () => void
}

export const Text = ({
    children,
    dangerousText,
    fontFamily = '',
    variant = 'p',
    fontWeight = '',
    textTransform = 'none',
    textAlign = 'inherit',
    padding = 'px-6 md:px-0',
    className = '',
    onClick,
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
        'inline-block',
    ].join(' ')

    const content = dangerousText ? (
        <span
            className={combinedClasses}
            dangerouslySetInnerHTML={{ __html: dangerousText }}
            onClick={onClick}
        />
    ) : (
        <span className={combinedClasses} onClick={onClick}>
            {children}
        </span>
    )

    return <>{content}</>
}
