'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import Image from 'next/image'

import logo from '@/assets/img/RubinLetter.svg'
import { DesktopMenu } from './components/DesktopMenu'
import { MobileMenu } from './components/MobileMenu/MobileMenu'
import { useScrollHeader } from '@/hooks/useScrollHeader'

export const Header = () => {
    const headerStyle = useScrollHeader()

    return (
        // or add bg-[#0c0c0c] if don't use client
        <FlexContainer
            justifyContent="justify-between"
            alignItems="items-center"
            width="w-full md:w-3/4"
            className={`fixed md:absolute top-0 left-1/2 transform -translate-x-1/2 p-4 z-10   ${headerStyle} transition-colors`}
        >
            <Image
                src={logo}
                alt="Rubinproduction Logo"
                className="w-12 md:w-24"
            />
            <DesktopMenu />
            <MobileMenu />
        </FlexContainer>
    )
}
