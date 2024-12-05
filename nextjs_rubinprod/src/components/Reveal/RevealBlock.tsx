'use client'
import { useAnimation, useInView } from 'framer-motion'
import React, { ReactNode, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
    getRevealColorBlockTransition,
    getRevealContainerTransition,
    revealColorBlockVariants,
    revealContainerVariants,
} from './config'

type RevealBlockProps = {
    children: ReactNode
    blockColor?: string
    delay?: number
    className?: string
}

export const RevealBlock = ({
    children,
    blockColor = 'bg-[#d91e37]',
    delay,
    className = '',
}: RevealBlockProps) => {
    const ref = useRef(null)

    const isInView = useInView(ref)
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        } else {
            mainControls.start('hidden')
            slideControls.start('hidden')
        }
    }, [isInView, mainControls, slideControls])

    return (
        <motion.div
            ref={ref}
            variants={revealContainerVariants}
            initial="hidden"
            animate={mainControls}
            transition={getRevealContainerTransition(delay)}
            className={`flex items-center w-full h-full ${className}`}
        >
            {children}
            <motion.div
                variants={revealColorBlockVariants}
                initial="hidden"
                animate={slideControls}
                transition={getRevealColorBlockTransition(delay)}
                className={`absolute top-0 bottom-0 left-0 right-0 ${blockColor} z-50`}
            />
        </motion.div>
    )
}
