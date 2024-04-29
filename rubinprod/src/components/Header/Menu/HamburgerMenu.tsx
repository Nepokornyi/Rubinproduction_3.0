import { motion } from 'framer-motion'
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
import { useDialogState } from '../../../helpers/useDialogState'
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation()
    const { showDialog, toggleDialog, handleCloseDialog } = useDialogState()

    const button = renderHamburger({
        open: showDialog,
        toggleOpen: toggleDialog,
    })
    const numerationBase = variants === 'main' ? 1 : 2

    return (
        <>
            <Reveal delay={0.5}>
                {button}
                {/* Animate Presence continues animation on component unmount */}
                <Overlay open={showDialog} zIndex={10}>
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
                                        <Link
                                            to="/"
                                            onClick={handleCloseDialog}
                                            smooth
                                        >
                                            <Text
                                                $textTransform="uppercase"
                                                variant="h3"
                                            >
                                                {t('header.menu.home')}
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
                                        onClick={handleCloseDialog}
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
                                            {t('header.menu.about')}
                                        </Text>
                                    </Link>
                                </motion.li>
                            </LinkAnimationBox>
                            <LinkAnimationBox>
                                <motion.li variants={linkVariants}>
                                    <Link
                                        to="/#portfolio"
                                        smooth
                                        onClick={handleCloseDialog}
                                    >
                                        <Text
                                            $textTransform="uppercase"
                                            variant="h3"
                                        >
                                            {t('header.menu.portfolio')}
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
                                        onClick={handleCloseDialog}
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
                                            {t('header.menu.contact')}
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
