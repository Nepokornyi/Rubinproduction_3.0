'use client'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useEffect, useState } from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { Box } from '../Box/Box'
import { menuVariants } from './config/configOverlay'

type OverlayProps = {
    children: ReactNode
    button?: ReactNode
    zIndex?: string
    open: boolean
}

export const Overlay = ({
    open,
    button,
    zIndex = 'z-10',
    children,
}: OverlayProps) => {
    const [overlayRoot, setOverlayRoot] = useState<HTMLElement | null>(null)

    // Ensure overlayRoot is only initialized after the component is mounted
    useEffect(() => {
        setOverlayRoot(document.getElementById('overlay-root'))
    }, [])

    if (!overlayRoot) return null

    const overlayElement = (
        <AnimatePresence>
            {open && (
                <motion.div
                    variants={menuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`fixed bg-[#0c0c0c] opacity-100 w-full h-full top-0 left-0 origin-top border-none ${zIndex}`}
                >
                    <FlexContainer
                        direction="flex-col"
                        center
                        minHeight="min-h-100vh"
                    >
                        {children}
                    </FlexContainer>
                    <Box className="absolute top-0 right-0 p-6 z-10">
                        {button}
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlayElement, overlayRoot)
}
