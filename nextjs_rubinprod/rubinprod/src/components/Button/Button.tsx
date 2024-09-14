import React, { ReactNode } from 'react'
import { Text } from '../Text/Text'
import { buttonVariants, ButtonVariantsList } from './types'

type ButtonProps = {
    children: ReactNode
    blockColor?: ButtonVariantsList
}

export const Button = ({ children, blockColor = 'default' }: ButtonProps) => {
    return (
        <button
            className={`w-full bg-transparent relative text-left border-2 p-4 ${buttonVariants[blockColor]}`}
        >
            <Text
                textTransform="uppercase"
                className="relative pointer-events-none"
                variant="button"
            >
                {children}
            </Text>
        </button>
    )
}
