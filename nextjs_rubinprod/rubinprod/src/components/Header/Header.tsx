'use client'
import React from 'react'
import Image from 'next/image'

import logo from '@/assets/img/RubinLetter.svg'
import { DesktopMenu } from './components/DesktopMenu'
import { MobileMenu } from './components/MobileMenu/MobileMenu'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { Link } from '@/navigation'
import { motion } from 'framer-motion'
import animation from './components/config/configLogo'

export const Header = () => {
    const headerStyle = useScrollHeader()

    return (
        // or add bg-[#0c0c0c] if don't use client
        <header
            className={`flex justify-between items-center w-full md:w-3/4 fixed md:absolute top-0 left-1/2 transform -translate-x-1/2 p-4 z-50   ${headerStyle} bg-[#0c0c0c] md:bg-transparent transition-colors`}
        >
            <motion.div
                variants={animation.container}
                initial="initial"
                animate="animate"
            >
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Rubinproduction Logo"
                        className="w-12 md:w-24"
                    />
                </Link>
            </motion.div>
            <DesktopMenu />
            <MobileMenu />
        </header>
    )
}
