import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'
import { LanguageSelection } from './MobileMenu/LanguageSelection'
import { CommunityHandlersProp } from '../handlers/communityHandlers'
import { HeaderType } from './type'

type DesktopMenuProps = {
    config?: HeaderType[]
    hasLanguageSelection: boolean
    handlers?: CommunityHandlersProp
}

const linkStyling =
    'cursor-pointer relative duration-300 hover:text-[#d91e37] hover:scale-105'

export const DesktopMenu = ({
    config,
    hasLanguageSelection,
    handlers,
}: DesktopMenuProps) => {
    const t = useTranslations('Header.menu')

    if (!config) return null

    return (
        <nav className="hidden md:block">
            <ul className="list-none flex gap-4">
                {config.map((item) => {
                    const handleClick =
                        handlers && item.onClick
                            ? handlers[item.onClick]
                            : undefined
                    return (
                        <li key={item.numeration}>
                            {item.href ? (
                                <LinkTransition
                                    href={item.href}
                                    className={linkStyling}
                                >
                                    <Text variant="nav">{t(item.label)}</Text>
                                </LinkTransition>
                            ) : (
                                <Text
                                    variant="nav"
                                    onClick={handleClick}
                                    className={linkStyling}
                                >
                                    {t(item.label)}
                                </Text>
                            )}
                        </li>
                    )
                })}
                {hasLanguageSelection && (
                    <LanguageSelection variant="desktop" />
                )}
            </ul>
        </nav>
    )
}
