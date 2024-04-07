import { motion } from 'framer-motion'

import { ContactSection } from '../AppMainLanding/ContactSection/ContactSection'
import { EliteVoyageMainSection } from './EliteVoyageMainSection/EliteVoyageMainSection'
import { EliteVoyageAboutSection } from './EliteVoyageAboutSection/EliteVoyageAboutSection'
import { EliteVoyageShowReelSection } from './EliteVoyageShowReelSection/EliteVoyageShowReelSection'
import { EliteVoyageServicesSection } from './EliteVoyageServicesSection/EliteVoyageServicesSection'
import { EliteVoyageTravelSection } from './EliteVoyageTravelSection/EliteVoyageTravelSection'
import { EliteVoyageRecruitmentSection } from './EliteVoyageRecruitmentSection/EliteVoyageRecruitmentSection'
import { EliteVoyageEmployeeSection } from './EliteVoyageEmployeeSection/EliteVoyageEmployeeSection'
import { EliteVoyageFeedbackSection } from './EliteVoyageFeedbackSection/EliteVoyageFeedbackSection'

export const AppEliteVoyageLanding = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <EliteVoyageMainSection />
            <EliteVoyageAboutSection />
            <EliteVoyageShowReelSection variant="first" />
            <EliteVoyageServicesSection />
            <EliteVoyageTravelSection />
            <EliteVoyageShowReelSection variant="second" />
            <EliteVoyageRecruitmentSection />
            <EliteVoyageEmployeeSection />
            <EliteVoyageFeedbackSection />
            <ContactSection color={'#B9965A'} />
        </motion.div>
    )
}
