import React, { ReactNode } from 'react'

type BoxProps = {
    children: ReactNode
    className?: string
}

export const Box = ({ children, className = '' }: BoxProps) => {
    return <div className={`relative ${className}`}>{children}</div>
}
