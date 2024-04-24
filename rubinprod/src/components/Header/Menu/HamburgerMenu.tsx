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
import { LanguageSelection } from './LanguageSelection'
import { Socials } from '../../../pages/AppMainLanding/MainSection/components/Socials'

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
    text-align: center;
    padding: 0 5px;
    a {
        text-decoration: none;
        position: relative;
    }
`

const MenuNumeration = styled(Text)<{ $left?: string; $right?: string }>`
    position: absolute;
    bottom: 0;
    left: ${(props) => props.$left || 'auto'};
    right: ${(props) => props.$right || 'auto'};
    padding: 0 10px;
    color: white;
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

export const HamburgerMenu = ({ variants = 'case' }: HamburgerMenuProps) => {
    const [open, toggleOpen] = useCycle(false, true)

    const button = renderHamburger({ open, toggleOpen })
    const numerationBase = variants === 'main' ? 1 : 2

    return (
        <>
            <Reveal delay={0.5}>
                {button}
                {/* Animate Presence continues animation on component unmount */}
                <Overlay open={open} zIndex={10}>
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="open"
                        exit="initial"
                    >
                        <motion.ul>
                            {variants === 'case' && (
                                <LinkAnimationBox>
                                    <motion.li variants={linkVariants}>
                                        <Link to="/" smooth>
                                            <Text
                                                $textTransform="uppercase"
                                                variant="h3"
                                            >
                                                Home
                                            </Text>
                                            <MenuNumeration $right="-15px">
                                                {'1'.padStart(2, '0')}
                                            </MenuNumeration>
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
                                        <MenuNumeration $left="-10px">
                                            {numerationBase
                                                .toString()
                                                .padStart(2, '0')}
                                        </MenuNumeration>
                                        <Text
                                            $textTransform="uppercase"
                                            variant="h3"
                                        >
                                            About
                                        </Text>
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
                                        <Text
                                            $textTransform="uppercase"
                                            variant="h3"
                                        >
                                            Portfolio
                                        </Text>
                                        <MenuNumeration $right="-15px">
                                            {(numerationBase + 1)
                                                .toString()
                                                .padStart(2, '0')}
                                        </MenuNumeration>
                                    </Link>
                                </motion.li>
                            </LinkAnimationBox>
                            <LinkAnimationBox>
                                <motion.li variants={linkVariants}>
                                    <Link
                                        to="#contact"
                                        smooth
                                        onClick={() => toggleOpen()}
                                    >
                                        <MenuNumeration $left="-15px">
                                            {(numerationBase + 2)
                                                .toString()
                                                .padStart(2, '0')}
                                        </MenuNumeration>
                                        <Text
                                            $textTransform="uppercase"
                                            variant="h3"
                                        >
                                            Contact
                                        </Text>
                                    </Link>
                                </motion.li>
                            </LinkAnimationBox>
                        </motion.ul>
                        <LinkAnimationBox>
                            <LanguageSelection />
                        </LinkAnimationBox>
                    </motion.div>
                    <Socials />
                </Overlay>
            </Reveal>
        </>
    )
}
