import { motion } from 'framer-motion'
import { AnimatedWordsProps } from './AnimatedLink'
import { animationForContainerVariants } from './config'
import styled from 'styled-components'
import { Text } from '../../Text/Text'

const AnimatedContainer = styled.span`
    white-space: nowrap;
    position: relative;
`
const AnimatedCharacter = styled(Text)`
    position: relative;
    display: inline-block;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: clamp(14px, 2.5vw, 18px);
`

export const AnimatedWords = ({
    title,
    animation,
    isHovered,
}: AnimatedWordsProps) => {
    return (
        <AnimatedContainer
            as={motion.span}
            variants={animationForContainerVariants}
            initial="rest"
            animate={isHovered ? 'hover' : 'rest'}
        >
            {title.split('').map((character, i) =>
                character === ' ' ? (
                    <span key={i}>&nbsp;</span>
                ) : (
                    <AnimatedCharacter
                        as={motion.span}
                        variants={animation}
                        variant="nav"
                        key={i}
                    >
                        {character}
                    </AnimatedCharacter>
                )
            )}
        </AnimatedContainer>
    )
}
