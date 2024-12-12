import { HTMLAttributes, forwardRef } from 'react'

interface ArrowProps extends HTMLAttributes<HTMLDivElement> {
    direction?: 'right' | 'down'
    isFullWidth?: boolean
    isFullHeight?: boolean
}

const Arrow = forwardRef<HTMLDivElement, ArrowProps>(
    (
        {
            direction = 'right',
            isFullWidth = false,
            isFullHeight = false,
            className = '',
            ...props
        },
        ref
    ) => {
        const baseClasses = 'relative block'
        const arrowTailClasses = 'absolute bg-white'

        const arrowWidth = isFullWidth ? 'w-full' : 'w-20' // Tailwind class for width
        const arrowHeight = isFullHeight ? 'h-full' : 'h-20' // Tailwind class for height

        const arrowStyles =
            direction === 'right' ? `${arrowWidth} h-1` : `${arrowHeight} w-1`

        // Arrowhead using borders for both directions
        const borderStyles =
            direction === 'right'
                ? 'border-t-2 border-r-2 border-solid border-white'
                : 'border-r-2 border-b-2 border-solid border-white'

        const headPosition =
            direction === 'right'
                ? 'right-0 top-1/2 transform -translate-y-1/2 rotate-45'
                : 'left-1/2 bottom-0 transform -translate-x-1/2 rotate-45'

        const tailPosition =
            direction === 'right'
                ? 'left-0 top-1/2 transform -translate-y-1/2'
                : 'top-0 left-1/2 transform -translate-x-1/2'

        return (
            <div
                className={`${baseClasses} ${arrowStyles} ${className}`}
                ref={ref}
                {...props}
            >
                {/* Arrow tail */}
                <div
                    className={`${arrowTailClasses} ${
                        direction === 'right' ? 'w-full h-0.5' : 'h-full w-0.5'
                    } ${tailPosition}`}
                />
                {/* Arrowhead using borders */}
                <div
                    className={`absolute w-3 h-3 ${borderStyles} ${headPosition}`}
                />
            </div>
        )
    }
)

Arrow.displayName = 'Arrow'

export { Arrow }
