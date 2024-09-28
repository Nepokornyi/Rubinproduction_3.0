import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { usePathname, useRouter } from '@/navigation'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import React from 'react'
import { linkVariants } from './config/configDropdown'

export const LanguageSelection = () => {
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()
    const languages = ['en', 'de', 'cz']
    const currentLocale = params?.locale || 'cz'

    const handleLanguageChange = (lang: string) => {
        const nextLocale = lang
        //@ts-ignore
        router.replace({ pathname, params }, { locale: nextLocale })
    }

    return (
        <FlexContainer center>
            {languages.map((lang) => (
                <motion.div
                    key={lang}
                    variants={linkVariants}
                    onClick={() => handleLanguageChange(lang)}
                    className="my-5"
                >
                    <Text
                        variant="button"
                        textTransform="uppercase"
                        className={`${
                            currentLocale === lang
                                ? 'text-[#d91e37]'
                                : 'text-white'
                        } cursor-pointer`}
                    >
                        {lang}
                    </Text>
                </motion.div>
            ))}
        </FlexContainer>
    )
}
