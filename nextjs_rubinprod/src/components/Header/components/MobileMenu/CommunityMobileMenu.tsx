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
import { useRouter } from 'next/navigation'

export const CommunityMobileMenu = ({
    isSubscribed,
}: {
    isSubscribed: boolean
}) => {
    const t = useTranslations('Header.menu')
    const router = useRouter()

    const { showDialog, toggleDialog, handleCloseDialog } = useDialogState()

    const handleManageSubscription = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const response = await fetch('/api/stripe/subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ locale }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.error || 'Failed to initiate subscription'
                )
            }
            const { url } = await response.json()
            router.push(url)
        } catch (error) {}
    }

    const handleSubscribe = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ locale }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.error || 'Failed to initiate checkout'
                )
            }
            const { url } = await response.json()
            router.push(url)
        } catch (error) {}
    }

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            })

            if (response.ok) {
                router.refresh()
            }
        } catch (error) {}
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                handleCloseDialog()
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [handleCloseDialog])

    const renderButton = (
        <Hamburger open={showDialog} toggleOpen={toggleDialog} />
    )

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
                        <Box className="overflow-hidden text-center py-2 z-20">
                            <motion.li
                                variants={linkVariants}
                                onClick={
                                    isSubscribed
                                        ? handleManageSubscription
                                        : handleSubscribe
                                }
                            >
                                <Box className="relative cursor-pointer">
                                    <Text
                                        variant="h2"
                                        textTransform="uppercase"
                                    >
                                        {isSubscribed ? 'předplatné' : 'portál'}
                                    </Text>
                                    <Text className="absolute bottom-0 -right-6">
                                        01
                                    </Text>
                                </Box>
                            </motion.li>
                        </Box>
                        <Box className="overflow-hidden text-center py-2 z-20">
                            <motion.li
                                variants={linkVariants}
                                onClick={handleLogout}
                            >
                                <Box className="relative cursor-pointer">
                                    <Text
                                        variant="h2"
                                        textTransform="uppercase"
                                    >
                                        odhlásit se
                                    </Text>
                                    <Text className="absolute bottom-0 -left-6">
                                        02
                                    </Text>
                                </Box>
                            </motion.li>
                        </Box>
                    </motion.ul>
                    <div className="absolute bottom-12 left-0 w-full overflow-hidden text-center">
                        <OverlaySocials variants={linkVariants} />
                    </div>
                </motion.div>
            </Overlay>
        </>
    )
}
