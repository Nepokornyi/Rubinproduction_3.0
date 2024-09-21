// import { useTranslations } from 'next-intl'
import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import Image from 'next/image'

import logo from '@/assets/img/RubinLetter.svg'

export const Header = () => {
    // const t = useTranslations('Component')

    return (
        <FlexContainer
            justifyContent="justify-between"
            alignItems="items-center"
            className="fixed md:absolute top-0 left-0 px-2 py-4 z-10 md:bg-transparent transition-colors"
        >
            <Image src={logo} alt="Rubinproduction Logo" />
            <nav>
                <ul className="list-none flex gap-4 mr-3 overflow-hidden">
                    <li className="cursor-pointer relative">O nas</li>
                    <li className="cursor-pointer relative">Portfolio</li>
                    <li className="cursor-pointer relative">DE</li>
                    <li className="cursor-pointer relative">CZ</li>
                </ul>
            </nav>
        </FlexContainer>
    )
}
