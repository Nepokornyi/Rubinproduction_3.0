import styled from 'styled-components'
import { Box } from '../../layout/Box'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { animationForLetterOnHover, animationForLetterOnRest } from './config'
import { AnimatedWords } from './AnimatedWords'

export type AnimatedWordsProps = {
    title: string
    animation?: any
    isHovered?: boolean
}

const StyledLinkBox = styled(Box)`
    cursor: pointer;
`

const CharacterAbsoluteContainer = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
`

export const AnimatedLink = ({ title }: AnimatedWordsProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <StyledLinkBox
            as={motion.div}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatedWords
                title={title}
                animation={animationForLetterOnHover}
                isHovered={isHovered}
            />
            <CharacterAbsoluteContainer>
                <AnimatedWords
                    title={title}
                    animation={animationForLetterOnRest}
                    isHovered={isHovered}
                />
            </CharacterAbsoluteContainer>
        </StyledLinkBox>
    )
}
