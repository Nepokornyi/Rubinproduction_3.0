import React, { ReactNode } from 'react'
import { Box } from '../Box/Box'

type GradientProps = {
    children: ReactNode
}

export const Gradient = ({ children }: GradientProps) => {
    return (
        <Box className="bg-gradient-to-b from-[#0C0C0C] to-transparent md:bg-gradient-to-b md:from-[#0C0C0C] md:to-[#BF1B32] clip-path-gradient">
            {children}
        </Box>
    )
}
