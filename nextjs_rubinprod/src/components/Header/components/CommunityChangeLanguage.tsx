import { Text } from '@/components/Text/Text'
import { usePathname, useRouter } from '@/navigation'
import { useParams } from 'next/navigation'
import React from 'react'

export const CommunityChangeLanguage = () => {
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
        <>
            {otherLanguages.map((lang) => (
                <Text
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="cursor-pointer"
                    variant="nav"
                >
                    {lang}
                </Text>
            ))}
        </>
    )
}
