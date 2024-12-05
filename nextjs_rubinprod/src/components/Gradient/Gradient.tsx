import React, { ReactNode } from 'react'
import { Box } from '../Box/Box'

type GradientProps = {
    children: ReactNode
}

export const Gradient = ({ children }: GradientProps) => {
    return (
        <Box className="bg-gradient-to-b to-transparent bottom-gradient clip-path-gradient">
            {children}
        </Box>
    )
}
