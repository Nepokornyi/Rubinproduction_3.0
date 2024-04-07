import { AnimatePresence, motion, useCycle } from 'framer-motion'
import styled from 'styled-components'
import { Box } from '../../layout/Box'
import config from './config/configIcon'
import { FlexContainer } from '../../layout/FlexContainer'
import { Text } from '../../Text/Text'
import { HashLink as Link } from 'react-router-hash-link'

import {
    containerVariants,
    linkVariants,
    menuVariants,
} from './config/configDropdown'
import { Reveal } from '../../animations/reveal/Reveal'
import { AppLandingVariants } from '../Header'

type HamburgerMenuProps = {
    variants?: AppLandingVariants
}

const HamburgerContainer = styled(Box)`
    position: relative;
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
    background-color: #0c0c0c;
    opacity: 1;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    transform-origin: top;
`

const LinkAnimationBox = styled(Box)`
    overflow: hidden;

    a {
        text-decoration: none;
    }
`

export const HamburgerMenu = ({ variants }: HamburgerMenuProps) => {
    const { container, lines, animations } = config
    const [open, toggleOpen] = useCycle(false, true)

    return (
        <>
            <Reveal delay={0.5}>
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
                                    {variants === 'case' && (
                                        <LinkAnimationBox>
                                            <motion.li variants={linkVariants}>
                                                <Link to="/" smooth>
                                                    <Text variant="h3">
                                                        Home
                                                    </Text>
                                                </Link>
                                            </motion.li>
                                        </LinkAnimationBox>
                                    )}
                                    <LinkAnimationBox>
                                        <motion.li variants={linkVariants}>
                                            <Link
                                                to="#about"
                                                smooth
                                                onClick={() => toggleOpen()}
                                            >
                                                <Text variant="h3">About</Text>
                                            </Link>
                                        </motion.li>
                                    </LinkAnimationBox>
                                    <LinkAnimationBox>
                                        <motion.li variants={linkVariants}>
                                            <Link
                                                to="#portfolio"
                                                smooth
                                                onClick={() => toggleOpen()}
                                            >
                                                <Text variant="h3">
                                                    Portfolio
                                                </Text>
                                            </Link>
                                        </motion.li>
                                    </LinkAnimationBox>
                                    <LinkAnimationBox>
                                        <motion.li variants={linkVariants}>
                                            <Text variant="h3">Rus/Ger</Text>
                                        </motion.li>
                                    </LinkAnimationBox>
                                </motion.ul>
                            </FlexContainer>
                        </Navigation>
                    )}
                </AnimatePresence>
            </Reveal>
        </>
    )
}
