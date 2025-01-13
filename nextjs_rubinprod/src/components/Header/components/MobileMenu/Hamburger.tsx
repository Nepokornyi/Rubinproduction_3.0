import React from 'react'
import { motion } from 'framer-motion'
import configIcon from './config/configIcon'

export const Hamburger = ({
    open,
    toggleOpen,
}: {
    open: boolean
    toggleOpen: () => void
}) => {
    const { container, lines, animations } = configIcon

    return (
        <motion.div
            style={{ width: container.width, height: container.height }}
            className="relative md:hidden cursor-pointer z-50"
            variants={animations.container}
            onClick={() => toggleOpen()}
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
                        animate={open ? 'opened' : 'initial'}
                    />
                )
            })}
        </motion.div>
    )
}
