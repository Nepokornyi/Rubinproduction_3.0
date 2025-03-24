import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

import { useDialogState } from '@/hooks/useDialogState'
import { Overlay } from '@/components/Overlay/Overlay'
import { containerVariants, linkVariants } from './config/configDropdown'
import { Box } from '@/components/Box/Box'
import { Hamburger } from './Hamburger'
import { Text } from '@/components/Text/Text'
import { Link } from '@/navigation'
import { LanguageSelection } from './LanguageSelection'
import { useTranslations } from 'next-intl'
import { OverlaySocials } from './Socials'
import { CommunityHandlersProp } from '../../handlers/communityHandlers'
import { HeaderType } from '../type'

type MobileMenuProps = {
    config?: HeaderType[]
    hasLanguageSelection: boolean
    handlers?: CommunityHandlersProp
}

export const MobileMenu = ({
    config,
    hasLanguageSelection,
    handlers,
}: MobileMenuProps) => {
    const t = useTranslations('Header.menu')

    const { showDialog, toggleDialog, handleCloseDialog } = useDialogState()

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                handleCloseDialog()
            }
        }

        window.addEventListener('resize', handleResize)

        // Call the function on mount if already on `md` or larger
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [handleCloseDialog])

    if (!config) return null

    return (
        <>
            <Hamburger open={showDialog} toggleOpen={toggleDialog} />
            <Overlay open={showDialog} isPortal={false}>
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="open"
                    exit="initial"
                >
                    {config && (
                        <motion.ul>
                            {config.map((item) => {
                                const handleClick =
                                    handlers && item.onClick
                                        ? handlers[item.onClick]
                                        : undefined

                                return (
                                    <Box
                                        key={item.numeration}
                                        className="overflow-hidden text-center py-2 z-20"
                                    >
                                        <motion.li variants={linkVariants}>
                                            {item.href ? (
                                                <Link
                                                    href={item.href}
                                                    className="no-underline relative"
                                                    onClick={handleCloseDialog}
                                                >
                                                    <Text
                                                        variant="h2"
                                                        textTransform="uppercase"
                                                    >
                                                        {t(item.label)}
                                                    </Text>
                                                    <Text
                                                        className={`absolute bottom-0 ${item.position}`}
                                                    >
                                                        {item.numeration
                                                            .toString()
                                                            .padStart(2, '0')}
                                                    </Text>
                                                </Link>
                                            ) : (
                                                <Box
                                                    className="cursor-pointer inline-block"
                                                    onClick={handleClick}
                                                >
                                                    <Text
                                                        variant="h2"
                                                        textTransform="uppercase"
                                                    >
                                                        {t(item.label)}
                                                    </Text>
                                                    <Text
                                                        className={`absolute bottom-0 ${item.position}`}
                                                    >
                                                        {item.numeration
                                                            .toString()
                                                            .padStart(2, '0')}
                                                    </Text>
                                                </Box>
                                            )}
                                        </motion.li>
                                    </Box>
                                )
                            })}
                        </motion.ul>
                    )}
                    {hasLanguageSelection && (
                        <Box className="overflow-hidden text-center py-2">
                            <LanguageSelection
                                variant="mobile"
                                handleClick={handleCloseDialog}
                            />
                        </Box>
                    )}
                    <div className="absolute bottom-12 left-0 w-full overflow-hidden text-center">
                        <OverlaySocials variants={linkVariants} />
                    </div>
                </motion.div>
            </Overlay>
        </>
    )
}
