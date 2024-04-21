import { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    $transitionColor?: string
    $isDesktopLayout?: boolean
}
