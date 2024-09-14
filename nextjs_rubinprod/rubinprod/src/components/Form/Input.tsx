import { forwardRef, InputHTMLAttributes } from 'react'
import { Text } from '../Text/Text'
import { InputVariants, InputVariantsList } from './types'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    color?: InputVariantsList
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, color = 'default', ...props }, ref) => {
        return (
            <>
                <input
                    className={`bg-transparent mx-6 pb-2.5 my-4 border-b-2 border-white text-lg focus:outline-none focus:border-b-2 focus:ring-0 placeholder:uppercase placeholder-opacity-30 placeholder:font-semibold ${InputVariants[color]} transition-colors`}
                    ref={ref}
                    {...props}
                />
                {error && <Text>{error}</Text>}
            </>
        )
    }
)

Input.displayName = 'Input'

export default Input
