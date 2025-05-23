'use client'
import React from 'react'
import Image from 'next/image'

import logoRed from '@/assets/img/RubinLetter.svg'
import logoWhite from '@/assets/img/RubinLetterWhite.svg'
import { DesktopMenu } from './components/DesktopMenu'
import { MobileMenu } from './components/MobileMenu/MobileMenu'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { motion } from 'framer-motion'
import animation from './components/config/configLogo'
import { LinkTransition } from '../LinkTransition/LinkTransition'
import { CommunityHandlersProp } from './handlers/communityHandlers'
import { HeaderType } from './components/type'

type HeaderProps = {
    isWhiteLogo?: boolean
    config?: HeaderType[]
    hasLanguageSelection?: boolean
    handlers?: CommunityHandlersProp
}

export const Header = ({
    isWhiteLogo = false,
    config,
    hasLanguageSelection = true,
    handlers,
}: HeaderProps) => {
    const headerStyle = useScrollHeader()

    const logo = isWhiteLogo ? logoWhite : logoRed

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
                        src={logo}
                        alt="Rubinproduction Logo"
                        className="w-12 md:w-24"
                    />
                </LinkTransition>
            </motion.div>
            <DesktopMenu
                config={config}
                hasLanguageSelection={hasLanguageSelection}
                handlers={handlers}
            />
            <MobileMenu
                config={config}
                hasLanguageSelection={hasLanguageSelection}
                handlers={handlers}
            />
        </header>
    )
}
