import { Text } from '@/components/Text/Text'
import { usePathname, useRouter } from '@/navigation'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import React from 'react'
import { linkVariants } from './config/configDropdown'
import { getSleep } from '@/helpers/getSleep'
import { headerLanguages } from '../const'

type LanguageSelectionProps = {
    variant: 'desktop' | 'mobile'
    handleClick?: () => void
}

export const LanguageSelection = ({
    variant,
    handleClick,
}: LanguageSelectionProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()
    const currentLocale = params?.locale || 'cz'

    const otherLanguages = headerLanguages.filter(
        (lang) => lang != params.locale
    )

    const handleLanguageChange = async (lang: string) => {
        handleClick?.()
        if (variant === 'mobile') await getSleep(1000)
        //@ts-ignore
        router.replace({ pathname, params }, { locale: lang })
    }

    const renderMobileLanguages = () =>
        headerLanguages.map((lang) => (
            <motion.div
                key={lang}
                variants={linkVariants}
                onClick={() => handleLanguageChange(lang)}
                className={'my-5'}
            >
                <Text
                    variant="button"
                    textTransform="uppercase"
                    className={`${
                        currentLocale === lang ? 'text-[#d91e37]' : 'text-white'
                    } cursor-pointer`}
                >
                    {lang}
                </Text>
            </motion.div>
        ))

    const renderDesktopLanguage = () =>
        otherLanguages.map((lang) => (
            <div
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className="cursor-pointer relative duration-300 hover:text-[#d91e37] hover:scale-105"
            >
                <Text variant="nav">{lang}</Text>
            </div>
        ))

    return (
        <>
            {variant === 'mobile' && (
                <div className="flex items-center justify-center">
                    {renderMobileLanguages()}
                </div>
            )}
            {variant === 'desktop' && (
                <li className="flex gap-4 items-center">
                    {renderDesktopLanguage()}
                </li>
            )}
        </>
    )
}
