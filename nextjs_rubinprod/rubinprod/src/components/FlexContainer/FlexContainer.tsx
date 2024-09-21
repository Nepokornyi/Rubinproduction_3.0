import { ReactNode } from 'react'
import {
    Direction,
    Gap,
    HorizontalAlign,
    MinHeight,
    VerticalAlign,
} from './types'

type FlexContainerProps = {
    children: ReactNode
    direction?: Direction
    minHeight?: MinHeight
    justifyContent?: HorizontalAlign
    alignItems?: VerticalAlign
    width?: string
    center?: boolean
    gap?: Gap
    className?: string
    id?: string
}

export const FlexContainer = ({
    children,
    direction = 'flex-row',
    minHeight = 'min-h-auto',
    justifyContent,
    alignItems,
    width = 'w-full',
    center = false,
    gap = 'gap-0',
    className = '',
    id,
}: FlexContainerProps) => {
    const horizontalAlignClass =
        justifyContent || (center ? 'justify-center' : '')
    const verticalAlignClass = alignItems || (center ? 'items-center' : '')

    const combinedClasses = [
        'flex',
        width,
        direction,
        horizontalAlignClass,
        verticalAlignClass,
        gap,
        minHeight,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={combinedClasses} id={id}>
            {children}
        </div>
    )
}
