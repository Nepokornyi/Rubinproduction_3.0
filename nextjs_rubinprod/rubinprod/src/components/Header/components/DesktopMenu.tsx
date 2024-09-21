import { Text } from '@/components/Text/Text'
import React from 'react'

export const DesktopMenu = () => {
    return (
        <nav className="hidden md:block">
            <ul className="list-none flex gap-4 overflow-hidden">
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
    )
}
