import { forwardRef, InputHTMLAttributes } from 'react'
import { Text } from '../Text/Text'
import {
    ErrorVariants,
    ErrorVariantsList,
    InputVariants,
    InputVariantsList,
} from './types'
import { FlexContainer } from '../FlexContainer/FlexContainer'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    color?: InputVariantsList
    errorColor?: ErrorVariantsList
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            error,
            color = 'default',
            errorColor = 'default',
            className,
            ...props
        },
        ref
    ) => {
        return (
            <FlexContainer direction="flex-col" gap={'gap-1'} className="my-4">
                <input
                    className={`bg-transparent pb-2.5 border-b-2 border-white text-lg focus:outline-none focus:border-b-2 focus:ring-0 placeholder:uppercase placeholder-opacity-30 placeholder:font-semibold ${InputVariants[color]} ${className} transition-colors`}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <Text
                        fontWeight="font-semibold"
                        padding="px-0"
                        className={ErrorVariants[errorColor]}
                    >
                        {error}
                    </Text>
                )}
            </FlexContainer>
        )
    }
)

Input.displayName = 'Input'

export default Input
