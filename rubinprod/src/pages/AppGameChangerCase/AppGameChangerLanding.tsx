import { motion } from 'framer-motion'
import { GameChangerMainSection } from './GameChangerMainSection/GameChangerMainSection'
import { GameChangerAboutSection } from './GameChangerAboutSection/GameChangerAboutSection'
import { GameChangerShowReelSection } from './GameChangerShowReelSection/GameChangerShowReelSection'
import { GameChangerServicesSection } from './GameChangerServicesSection/GameChangerServicesSection'
import { ContactSection } from '../AppMainLanding/ContactSection/ContactSection'
import { GameChangerFeedbackSection } from './GameChangerFeedbackSection/GameChangerFeedbackSection'

export const AppGameChangerLanding = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <GameChangerMainSection />
            <GameChangerAboutSection />
            <GameChangerShowReelSection variant="first" />
            <GameChangerServicesSection />
            {/* marketing */}
            <GameChangerShowReelSection variant="second" />
            {/* marketing */}
            <GameChangerFeedbackSection />
            <ContactSection color={'#7055EC'} />
        </motion.div>
    )
}
