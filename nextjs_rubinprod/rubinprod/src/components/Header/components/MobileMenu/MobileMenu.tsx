import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

import { useDialogState } from '@/hooks/useDialogState'
import { Overlay } from '@/components/Overlay/Overlay'
import { containerVariants, linkVariants } from './config/configDropdown'
import { Box } from '@/components/Box/Box'
import { Hamburger } from './Hamburger'
import { Text } from '@/components/Text/Text'
import { Link, usePathname, useRouter } from '@/navigation'
import { LanguageSelection } from './LanguageSelection'
import { useTranslations } from 'next-intl'
import { OverlaySocials } from './Socials'

type MobileMenuProps = {
    variant?: 'main' | 'case'
}

export const MobileMenu = ({ variant = 'main' }: MobileMenuProps) => {
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
            href: '#portfolio',
            position: '-right-6',
            numeration: numerationBase + 1,
        },
        {
            label: t('contact'),
            href: '#contact',
            position: '-left-6',
            numeration: numerationBase + 2,
        },
    ]

    const { showDialog, toggleDialog, handleCloseDialog } = useDialogState()

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (window.location.hash) {
            // @ts-ignore
            router.replace(pathname, undefined, { shallow: false })
        }

        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 0)
    }, [router])

    const renderButton = (
        <Hamburger open={showDialog} toggleOpen={toggleDialog} />
    )

    const numerationBase = variant === 'main' ? 1 : 2

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
                        {variant === 'case' && (
                            <Box className="overflow-hidden text-center my-4">
                                <motion.li variants={linkVariants}>
                                    <Link
                                        href="/"
                                        className="no-underline relative"
                                        onClick={handleCloseDialog}
                                    >
                                        <Text>{t('home')}</Text>
                                        <Text className="absolute bottom-0 -right-5">
                                            {'1'.padStart(2, '0')}
                                        </Text>
                                    </Link>
                                </motion.li>
                            </Box>
                        )}

                        {menuItems(numerationBase).map((item) => (
                            <Box
                                key={item.label}
                                className="overflow-hidden text-center my-4"
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
                                            fontWeight="font-bold"
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
                    <Box className="overflow-hidden text-center my-4">
                        <LanguageSelection />
                    </Box>
                    <div className="absolute bottom-12 left-0 w-full overflow-hidden text-center">
                        <OverlaySocials variants={linkVariants} />
                    </div>
                </motion.div>
            </Overlay>
        </>
    )
}
