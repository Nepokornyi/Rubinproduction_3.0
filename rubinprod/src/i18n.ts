import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locale/en.json'
import cz from './locale/cz.json'
import de from './locale/de.json'

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        cz: { translation: cz },
        de: { translation: de },
    },
    lng: 'cz',
    fallbackLng: 'cz',
    interpolation: {
        escapeValue: false,
    },
})

export default i18next
