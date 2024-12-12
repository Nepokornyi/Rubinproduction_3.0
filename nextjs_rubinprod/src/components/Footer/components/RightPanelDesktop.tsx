import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

export const RightPanelDesktop = () => {
    const t = useTranslations('Footer')

    const LinkList = [
        {
            href: '/',
            text: t('navigation.home'),
            className: 'col-start-3 row-start-1',
        },
        {
            href: '#about',
            text: t('navigation.about'),
            className: 'col-start-1 row-start-2',
        },
        {
            href: '#contact',
            text: t('navigation.contact'),
            className: 'col-start-2 row-start-2',
        },
        {
            href: '#portfolio',
            text: t('navigation.portfolio'),
            className: 'col-start-3 row-start-2',
        },
        {
            href: 'https://www.behance.net/who1snick',
            text: t('socials.behance'),
            className: 'col-start-1 row-start-3',
        },
        {
            href: 'https://www.instagram.com/who1snick',
            text: t('socials.instagram'),
            className: 'col-start-2 row-start-3',
        },
        {
            href: 'https://www.youtube.com/@who1snick466/videos',
            text: t('socials.youtube'),
            className: 'col-start-3 row-start-3',
        },
    ]

    return (
        <>
            {LinkList.map((link, index) => (
                <LinkTransition
                    key={index}
                    href={link.href}
                    className={link.className}
                >
                    <Text
                        textTransform="uppercase"
                        className="text-[#6e6e6e] hover:text-white transition-colors"
                        padding="px-6"
                    >
                        {link.text}
                    </Text>
                </LinkTransition>
            ))}
        </>
    )
}
