'use client'
import Image from 'next/image'
import { LinkTransition } from '../LinkTransition/LinkTransition'
import { MobileMenu } from './components/MobileMenu/MobileMenu'
import { motion } from 'framer-motion'
import animation from './components/config/configLogo'
import logoRed from '@/assets/img/RubinLetter.svg'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { CommunityDesktopMenu } from './components/CommunityDesktopMenu'

export const CommunityHeader = () => {
    const headerStyle = useScrollHeader()

    return (
        <header
            className={`flex justify-between items-center w-full md:w-3/4 fixed md:absolute top-0 left-1/2 transform -translate-x-1/2 p-4 z-50 ${headerStyle} bg-[#0c0c0c] md:bg-transparent transition-colors`}
        >
            <motion.div
                variants={animation.container}
                initial="initial"
                animate="animate"
            >
                <LinkTransition href="/">
                    <Image
                        src={logoRed}
                        alt="Rubinproduction Logo"
                        className="w-12 md:w-24"
                    />
                </LinkTransition>
            </motion.div>
            <CommunityDesktopMenu />
            <MobileMenu />
        </header>
    )
}
