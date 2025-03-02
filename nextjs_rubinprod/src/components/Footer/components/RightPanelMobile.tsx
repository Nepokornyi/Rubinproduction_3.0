import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import { Text } from '@/components/Text/Text'
import { useTranslations } from 'next-intl'
import React from 'react'

export const RightPanelMobile = () => {
    const t = useTranslations('Footer')

    const LinkList = [
        {
            href: '/privacy',
            text: t('navigation.privacy'),
        },
        {
            href: '/terms',
            text: t('navigation.terms'),
        },
    ]

    return (
        <>
            {LinkList.map((link, index) => (
                <LinkTransition key={index} href={link.href}>
                    <Text
                        textTransform="uppercase"
                        className="text-[#6e6e6e] hover:text-white transition-colors"
                        padding="px-6 my-2"
                    >
                        {link.text}
                    </Text>
                </LinkTransition>
            ))}
        </>
    )
}
