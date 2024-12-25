import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import { Text } from '@/components/Text/Text'
import { usePathname, useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import React from 'react'

export const DesktopMenu = ({ isCase = false }: { isCase?: boolean }) => {
    const t = useTranslations('Header.menu')
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
                {isCase && (
                    <LinkTransition
                        href="/"
                        className="cursor-pointer relative"
                    >
                        <Text variant="nav">{t('home')}</Text>
                    </LinkTransition>
                )}
                <LinkTransition
                    href="#about"
                    className="cursor-pointer relative"
                >
                    <Text variant="nav">{t('about')}</Text>
                </LinkTransition>
                <LinkTransition
                    href="/#portfolio"
                    className="cursor-pointer relative"
                >
                    <Text variant="nav">{t('portfolio')}</Text>
                </LinkTransition>
                <LinkTransition
                    href="/community"
                    className="cursor-pointer relative"
                >
                    <Text variant="nav">{t('community')}</Text>
                </LinkTransition>
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
