'use client'
import { motion } from 'framer-motion'
import React from 'react'

import config from './config/configIcon'
import { useDialogState } from '@/hooks/useDialogState'

export const MobileMenu = () => {
    const { container, lines, animations } = config

    const { showDialog, toggleDialog, handleCloseDialog } = useDialogState()

    return (
        <motion.div
            style={{ width: container.width, height: container.height }}
            className="relative md:hidden cursor-pointer z-10"
            variants={animations.container}
            onClick={() => toggleDialog()}
            initial="initial"
            animate="animate"
        >
            {animations.lines.map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        className="w-full h-1.5 bg-white"
                        style={{
                            height: lines.size,
                        }}
                        variants={animations.lines[index]}
                        initial="initial"
                        animate={showDialog ? 'opened' : 'initial'}
                    />
                )
            })}
        </motion.div>
    )
}
