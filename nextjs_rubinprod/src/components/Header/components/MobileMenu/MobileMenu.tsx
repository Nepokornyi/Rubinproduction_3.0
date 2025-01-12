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

export const MobileMenu = ({ isCase = false }: { isCase?: boolean }) => {
    const t = useTranslations('Header.menu')

    const menuItems = (numerationBase: number) => [
        {
            label: t('about'),
            href: '#about',
            position: '-left-6',
            numeration: numerationBase,
        },
        {
            label: t('portfolio'),
            href: '/#portfolio',
            position: '-right-6',
            numeration: numerationBase + 1,
        },
        {
            label: t('contact'),
            href: '#contact',
            position: '-left-6',
            numeration: numerationBase + 2,
        },
        {
            label: t('community'),
            href: '/community',
            position: '-right-6',
            numeration: numerationBase + 3,
        },
    ]

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

    const renderButton = (
        <Hamburger open={showDialog} toggleOpen={toggleDialog} />
    )

    const numerationBase = isCase ? 2 : 1

    return (
        <>
            {renderButton}
            <Overlay open={showDialog}>
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="open"
                    exit="initial"
                >
                    <motion.ul>
                        {isCase && (
                            <Box className="overflow-hidden text-center py-2 z-20">
                                <motion.li variants={linkVariants}>
                                    <Link
                                        href="/"
                                        className="no-underline relative"
                                        onClick={handleCloseDialog}
                                    >
                                        <Text
                                            variant="h2"
                                            textTransform="uppercase"
                                        >
                                            {t('home')}
                                        </Text>
                                        <Text className="absolute bottom-0 -right-6">
                                            {'1'.padStart(2, '0')}
                                        </Text>
                                    </Link>
                                </motion.li>
                            </Box>
                        )}

                        {menuItems(numerationBase).map((item) => (
                            <Box
                                key={item.label}
                                className="overflow-hidden text-center py-2 z-20"
                            >
                                <motion.li variants={linkVariants}>
                                    <Link
                                        href={item.href}
                                        className="no-underline relative"
                                        onClick={handleCloseDialog}
                                    >
                                        <Text
                                            variant="h2"
                                            textTransform="uppercase"
                                        >
                                            {item.label}
                                        </Text>
                                        <Text
                                            className={`absolute bottom-0 ${item.position}`}
                                        >
                                            {item.numeration
                                                .toString()
                                                .padStart(2, '0')}
                                        </Text>
                                    </Link>
                                </motion.li>
                            </Box>
                        ))}
                    </motion.ul>
                    <Box className="overflow-hidden text-center py-2">
                        <LanguageSelection handleClick={handleCloseDialog} />
                    </Box>
                    <div className="absolute bottom-12 left-0 w-full overflow-hidden text-center">
                        <OverlaySocials variants={linkVariants} />
                    </div>
                </motion.div>
            </Overlay>
        </>
    )
}
