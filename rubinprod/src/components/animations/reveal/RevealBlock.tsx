import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Box } from '../../layout/Box'
import { motion, useAnimation, useInView } from 'framer-motion'
import {
    getRevealColorBlockTransition,
    getRevealContainerTransition,
    revealColorBlockVariants,
    revealContainerVariants,
} from './config'

type RevealBlockProps = {
    children: React.ReactNode
    blockColor?: string
    delay?: number
}

type MotionColorBlockProps = {
    $blockColor?: string
}

export const MotionContainer = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const MotionColorBlock = styled.div<MotionColorBlockProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) =>
        props.$blockColor ? props.$blockColor : '#d91e37'};
    z-index: 100;
`

export const RevealBlock = ({
    children,
    blockColor = '#d91e37',
    delay,
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
        <MotionContainer
            as={motion.div}
            ref={ref}
            variants={revealContainerVariants}
            initial="hidden"
            animate={mainControls}
            transition={getRevealContainerTransition(delay)}
        >
            {children}
            <MotionColorBlock
                $blockColor={blockColor}
                as={motion.div}
                variants={revealColorBlockVariants}
                initial="hidden"
                animate={slideControls}
                transition={getRevealColorBlockTransition(delay)}
            />
        </MotionContainer>
    )
}
