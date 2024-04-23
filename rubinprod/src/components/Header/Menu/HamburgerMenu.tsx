import { motion, useCycle } from 'framer-motion'
import styled from 'styled-components'
import { Box } from '../../layout/Box'
import config from './config/configIcon'
import { Text } from '../../Text/Text'
import { HashLink as Link } from 'react-router-hash-link'

import { containerVariants, linkVariants } from './config/configDropdown'
import { Reveal } from '../../animations/reveal/Reveal'
import { AppLandingVariants } from '../Header'
import { Overlay } from '../../Overlay/Overlay'

type HamburgerIconProps = {
    open: boolean
    toggleOpen: () => void
}

type HamburgerMenuProps = {
    variants?: AppLandingVariants
}

const HamburgerContainer = styled(Box)`
    position: relative;
    cursor: pointer;
    z-index: 100;
`
const Line = styled(Box)`
    width: 100%;
    border-radius: 100px;
    background-color: white;
`

const LinkAnimationBox = styled(Box)`
    overflow: hidden;

    a {
        text-decoration: none;
    }
`

export const renderHamburger = ({ open, toggleOpen }: HamburgerIconProps) => {
    const { container, lines, animations } = config

    return (
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
    )
}

export const HamburgerMenu = ({ variants }: HamburgerMenuProps) => {
    const [open, toggleOpen] = useCycle(false, true)

    const button = renderHamburger({ open, toggleOpen })

    return (
        <>
            <Reveal delay={0.5}>
                {button}
                {/* Animate Presence continues animation on component unmount */}
                <Overlay open={open} zIndex={10}>
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
                                        <Text variant="h3">Home</Text>
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
                                    <Text variant="h3">Portfolio</Text>
                                </Link>
                            </motion.li>
                        </LinkAnimationBox>
                        <LinkAnimationBox>
                            <motion.li variants={linkVariants}>
                                <Text variant="h3">Rus/Ger</Text>
                            </motion.li>
                        </LinkAnimationBox>
                    </motion.ul>
                </Overlay>
            </Reveal>
        </>
    )
}
