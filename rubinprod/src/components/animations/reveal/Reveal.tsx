import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Box } from '../../layout/Box'
import styled from 'styled-components'
import { CSS } from 'styled-components/dist/types'

export type RevealProps = {
    children: React.ReactNode
    style?: CSS.Properties
    delay?: number
    x?: number
    y?: number
    removeRepeatedReveal?: boolean
}

const MotionContainer = styled(Box)``

export const Reveal = ({
    children,
    x,
    y,
    style,
    delay = 0.25,
    removeRepeatedReveal = true,
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
        <MotionContainer
            as={motion.div}
            ref={ref}
            style={style}
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
        >
            {children}
        </MotionContainer>
    )
}
