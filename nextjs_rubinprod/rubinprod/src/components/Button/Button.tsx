import React, { ReactNode } from 'react'
import { Text } from '../Text/Text'
import { buttonVariants, ButtonVariantsList } from './types'
import { HoverButtonEffect } from './components/HoverButtonEffect'
import { Arrow } from '../Arrow/Arrow'

type ButtonProps = {
    children: ReactNode
    blockColor?: ButtonVariantsList
    className?: string
}

export const Button = ({
    children,
    blockColor = 'default',
    className = '',
}: ButtonProps) => {
    // TODO: resolve padding override
    return (
        // added text-lg because it wouldn't propagate from Text component (fallback to font-size: 100%)
        <button
            className={`w-full text-lg bg-transparent relative text-left border-2 p-4 ${buttonVariants[blockColor]} ${className}`}
        >
            <HoverButtonEffect />
            <Text
                textTransform="uppercase"
                className="relative pointer-events-none"
                padding="px-0"
                variant="button"
            >
                {children}
            </Text>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <Arrow />
            </div>
        </button>
    )
}
