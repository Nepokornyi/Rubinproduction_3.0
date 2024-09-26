'use client'
import { Text } from '@/components/Text/Text'
import { usePathname, useRouter } from '@/navigation'
import { useParams } from 'next/navigation'
import React from 'react'

export const DesktopMenu = () => {
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()
    const languages = ['en', 'de', 'cz']

    const otherLanguages = languages.filter((lang) => lang !== params.locale)

    const handleLanguageChange = (lang: string) => {
        const nextLocale = lang
        //@ts-ignore
        router.replace({ pathname, params }, { locale: nextLocale })
    }

    return (
        <nav className="hidden md:block">
            <ul className="list-none flex gap-4 overflow-hidden">
                <li className="cursor-pointer relative">
                    <Text variant="nav">O nas</Text>
                </li>
                <li className="cursor-pointer relative">
                    <Text variant="nav">Portfolio</Text>
                </li>
                {otherLanguages.map((lang) => (
                    <li
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className="cursor-pointer relative"
                    >
                        <Text variant="nav">{lang}</Text>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
