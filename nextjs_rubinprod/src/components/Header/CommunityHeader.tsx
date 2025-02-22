'use client'
import Image from 'next/image'
import { LinkTransition } from '../LinkTransition/LinkTransition'
import { motion } from 'framer-motion'
import animation from './components/config/configLogo'
import logoRed from '@/assets/img/RubinLetter.svg'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { CommunityDesktopMenu } from './components/CommunityDesktopMenu'
import { CommunityMobileMenu } from './components/MobileMenu/CommunityMobileMenu'

export const CommunityHeader = ({
    isSubscribed,
}: {
    isSubscribed: boolean
}) => {
    const headerStyle = useScrollHeader()

    return (
        <header
            className={`flex justify-between items-center w-full md:w-3/4 fixed md:absolute top-0 left-1/2 transform -translate-x-1/2 p-4 z-50 ${headerStyle} bg-[#0c0c0c] md:bg-transparent transition-colors`}
        >
            <motion.div
                variants={animation.container}
                initial="initial"
                animate="animate"
                className="z-50"
            >
                <LinkTransition href="/">
                    <Image
                        src={logoRed}
                        alt="Rubinproduction Logo"
                        className="w-12 md:w-24"
                    />
                </LinkTransition>
            </motion.div>
            <CommunityDesktopMenu isSubscribed={isSubscribed} />
            <CommunityMobileMenu isSubscribed={isSubscribed} />
        </header>
    )
}
