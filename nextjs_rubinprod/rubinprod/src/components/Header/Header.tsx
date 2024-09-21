// import { useTranslations } from 'next-intl'
import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import Image from 'next/image'

import logo from '@/assets/img/RubinLetter.svg'
import { Text } from '../Text/Text'

export const Header = () => {
    // const t = useTranslations('Component')

    return (
        <FlexContainer
            justifyContent="justify-between"
            alignItems="items-center"
            className="fixed md:absolute top-0 left-1/2 transform -translate-x-1/2 px-2 py-4 z-10 md:bg-transparent transition-colors"
            width="w-full md:w-3/4"
        >
            <Image src={logo} alt="Rubinproduction Logo" />
            <nav className="hidden md:block">
                <ul className="list-none flex gap-4 mr-3 overflow-hidden">
                    <li className="cursor-pointer relative">
                        <Text variant="nav">O nas</Text>
                    </li>
                    <li className="cursor-pointer relative">
                        <Text variant="nav">Portfolio</Text>
                    </li>
                    <li className="cursor-pointer relative">
                        <Text variant="nav">DE</Text>
                    </li>
                    <li className="cursor-pointer relative">
                        <Text variant="nav">CZ</Text>
                    </li>
                </ul>
            </nav>
            <div className="md:hidden">Hamburger</div>
        </FlexContainer>
    )
}
