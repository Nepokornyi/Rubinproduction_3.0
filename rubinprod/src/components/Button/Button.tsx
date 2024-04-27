import { ButtonHTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Text } from '../Text/Text'
import { ArrowRight } from '../Arrow/Arrow'
import { Spinner } from '../Spinner/Spinner'
import { motion, useAnimation, useInView } from 'framer-motion'
import {
    MotionColorBlock,
    MotionContainer,
} from '../animations/reveal/RevealBlock'
import {
    getRevealColorBlockTransition,
    getRevealContainerTransition,
    revealColorBlockVariants,
    revealContainerVariants,
} from '../animations/reveal/config'
import { Reveal } from '../animations/reveal/Reveal'
import { HoverButtonEffect } from './HoverButtonEffect'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    transitionDelay?: number
    removeRepeatedReveal?: boolean
    blockColor?: string
}

const StyledArrowRight = styled(ArrowRight)`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`
const StyledButton = styled.button`
    width: 100%;
    background-color: transparent;
    position: relative;
    text-align: left;
    border: 2px solid #d91e37;
    padding: 15px;
    margin: 15px 75px 0 25px;
    cursor: pointer;
`
const StyledText = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
    padding: ${(props) => props.$paddingOverride};
    pointer-events: none;
`

export const Button = ({
    children,
    removeRepeatedReveal = true,
    transitionDelay = 0,
    blockColor,
    ...props
}: ButtonProps) => {
    const ref = useRef(null)

    const isInView = useInView(ref)
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        } else {
            if (removeRepeatedReveal) return
            mainControls.start('hidden')
            slideControls.start('hidden')
        }
    }, [isInView, mainControls, slideControls, removeRepeatedReveal])

    const isDisabled = props.disabled
    const renderContent = isDisabled ? (
        <Spinner />
    ) : (
        <StyledText
            $textTransform="uppercase"
            $paddingOverride="0px"
            variant="button"
        >
            {children}
        </StyledText>
    )

    return (
        <>
            <MotionContainer
                as={motion.div}
                ref={ref}
                variants={revealContainerVariants}
                initial="hidden"
                animate={mainControls}
                transition={getRevealContainerTransition(transitionDelay)}
            >
                <StyledButton {...props}>
                    <HoverButtonEffect color={blockColor} />
                    {renderContent}
                    <Reveal
                        style={{
                            position: 'absolute',
                            right: '-35px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                        delay={transitionDelay + 0.65}
                        x={-35}
                    >
                        <StyledArrowRight />
                    </Reveal>
                    <MotionColorBlock
                        as={motion.div}
                        variants={revealColorBlockVariants}
                        initial="hidden"
                        animate={slideControls}
                        $blockColor={blockColor}
                        transition={getRevealColorBlockTransition(
                            transitionDelay + 0.15
                        )}
                    />
                </StyledButton>
            </MotionContainer>
        </>
    )
}
