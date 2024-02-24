import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locale/en.json'
import ru from './locale/ru.json'

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ru: { translation: ru },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18next
