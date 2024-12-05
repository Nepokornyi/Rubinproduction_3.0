import React, { ReactNode } from 'react'
import { Text } from '../Text/Text'
import { buttonVariants, ButtonVariantsList } from './types'
import { HoverButtonEffect } from './components/HoverButtonEffect'
import { Arrow } from '../Arrow/Arrow'
import { Reveal } from '../Reveal/Reveal'
import { Spinner } from '../Spinner/Spinner'

type ButtonProps = {
    children: ReactNode
    blockColor?: ButtonVariantsList
    className?: string
    type?: 'button' | 'submit'
    isDisabled?: boolean
    onClick?: () => void
}

export const Button = ({
    children,
    blockColor = 'default',
    className = '',
    type = 'button',
    isDisabled = false,
    onClick,
}: ButtonProps) => {
    const renderContent = isDisabled ? <Spinner /> : children

    // TODO: resolve padding override
    return (
        // added text-lg because it wouldn't propagate from Text component (fallback to font-size: 100%)
        <button
            type={type}
            className={`w-full text-lg bg-transparent relative text-left border-2 p-4 ${buttonVariants[blockColor]} ${className}`}
            onClick={onClick}
        >
            <HoverButtonEffect color={blockColor} />
            <Text
                textTransform="uppercase"
                className="relative pointer-events-none"
                padding="px-0"
                variant="button"
            >
                {renderContent}
            </Text>
            <Reveal
                delay={0.65}
                x={-35}
                className="absolute top-1/2 -translate-y-1/2 right-0"
                removeRepeatedReveal={false}
            >
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Arrow />
                </div>
            </Reveal>
        </button>
    )
}
