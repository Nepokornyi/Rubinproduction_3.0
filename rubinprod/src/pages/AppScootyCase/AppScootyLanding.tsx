import { motion } from 'framer-motion'
import { ScootyMainSection } from './ScootyMainSection/ScootyMainSection'
import { Footer } from '../../components/Footer/Footer'
import { ScootyAboutSection } from './ScootyAboutSection/ScootyAboutSection'
import { ScootyShowReelSection } from './ScootyShowReelSection/ScootyShowReelSection'
import { ScootyServicesSection } from './ScootyServicesSection/ScootyServicesSection'
import { ScootySocialsSection } from './ScootySocialsSection/ScootySocialsSection'
import { ScootyClipSection } from './ScootyClipSection/ScootyClipSection'
import { ScootySolutionSection } from './ScootySolutionSection/ScootySolutionSection'

export const AppScootyLanding = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <ScootyMainSection />
            <ScootyAboutSection />
            <ScootyShowReelSection />
            <ScootyServicesSection />
            <ScootySocialsSection />
            <ScootyClipSection />
            <ScootySolutionSection />
            <>ScootyFeedback</>
            <>ScootyContact</>
            <Footer />
        </motion.div>
    )
}
