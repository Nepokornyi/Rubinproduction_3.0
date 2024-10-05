'use client'
import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export type RevealProps = {
    children: ReactNode
    delay?: number
    x?: number
    y?: number
    removeRepeatedReveal?: boolean
    className?: string
}

export const Reveal = ({
    children,
    x,
    y,
    delay = 0.25,
    removeRepeatedReveal = true,
    className = '',
}: RevealProps) => {
    const ref = useRef(null)

    const isInView = useInView(ref)
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        } else {
            if (removeRepeatedReveal) return
            mainControls.start('hidden')
        }
    }, [isInView, mainControls, removeRepeatedReveal])

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: {
                    opacity: 0,
                    x,
                    y,
                    transition: {
                        duration: 1.5,
                        delay,
                    },
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 1.5,
                        delay,
                    },
                },
            }}
            initial="hidden"
            animate={mainControls}
            className={`${className}`}
        >
            {children}
        </motion.div>
    )
}
