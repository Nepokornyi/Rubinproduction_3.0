import { AnimatePresence, motion, useCycle } from 'framer-motion'
import styled from 'styled-components'
import { Box } from '../../layout/Box'
import config from './config'
import { FlexContainer } from '../../layout/FlexContainer'
import { Text } from '../../Text/Text'

const HamburgerContainer = styled(Box)`
    cursor: pointer;
    z-index: 2;
`
const Line = styled(Box)`
    width: 100%;
    border-radius: 100px;
    background-color: white;
`

const Navigation = styled(Box)`
    position: absolute;
    background-color: #000;
    opacity: 1;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    transform-origin: top;
`

const menuVariants = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
        },
    },
    exit: {
        scaleY: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
        },
    },
}

const containerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
        },
    },
}

const linkVariants = {
    initial: {
        y: '30vh',
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0, 0.55, 0.45, 1],
        },
    },
}

export const HamburgerMenu = () => {
    const { container, lines, animations } = config
    const [open, toggleOpen] = useCycle(false, true)

    return (
        <>
            <HamburgerContainer
                as={motion.div}
                style={{ width: container.width, height: container.height }}
                className="container"
                onClick={() => toggleOpen()}
                variants={animations.container}
                initial="initial"
                animate="animate"
            >
                {animations.lines.map((_, index) => {
                    return (
                        <Line
                            as={motion.div}
                            key={index}
                            className="line"
                            style={{
                                height: lines.size,
                            }}
                            variants={animations.lines[index]}
                            initial="initial"
                            animate={open ? 'opened' : 'initial'}
                        />
                    )
                })}
            </HamburgerContainer>

            {/* Animate Presence continues animation on component unmount */}
            <AnimatePresence>
                {open && (
                    <Navigation
                        as={motion.div}
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <FlexContainer center minHeight="100vh">
                            <motion.ul
                                variants={containerVariants}
                                initial="initial"
                                animate="open"
                                exit="initial"
                            >
                                <div style={{ overflow: 'hidden' }}>
                                    <motion.li variants={linkVariants}>
                                        <Text variant="h3">About</Text>
                                    </motion.li>
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <motion.li variants={linkVariants}>
                                        <Text variant="h3">Portfolio</Text>
                                    </motion.li>
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <motion.li variants={linkVariants}>
                                        <Text variant="h3">Rus/Ger</Text>
                                    </motion.li>
                                </div>
                            </motion.ul>
                        </FlexContainer>
                    </Navigation>
                )}
            </AnimatePresence>
        </>
    )
}
