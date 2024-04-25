import { Text } from '../../Text/Text'
import { motion } from 'framer-motion'
import { linkVariants } from './config/configDropdown'
import { FlexContainer } from '../../layout/FlexContainer'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const VariantsButtonContainer = styled(motion.div)<{ isActive: boolean }>`
    cursor: pointer;
    & > span {
        color: ${(props) => (props.isActive ? '#d91e37' : 'white')};
        transition: color 0.3s;
    }
`
const languageMap = ['en', 'de', 'cz']

export const LanguageSelection = () => {
    const { i18n } = useTranslation()

    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language)
    }

    return (
        <FlexContainer
            justifyContent="center"
            alignItems="center"
            minHeight="100px"
        >
            {languageMap.map((language) => (
                <VariantsButtonContainer
                    key={language}
                    variants={linkVariants}
                    onClick={() => handleChangeLanguage(language)}
                    isActive={i18n.language === language}
                >
                    <Text variant="button" $textTransform="uppercase">
                        {language}
                    </Text>
                </VariantsButtonContainer>
            ))}
        </FlexContainer>
    )
}
