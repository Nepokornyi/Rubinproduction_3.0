import { motion } from 'framer-motion'
import { ScootyMainSection } from './ScootyMainSection/ScootyMainSection'
import { Footer } from '../../components/Footer/Footer'
import { ScootyAboutSection } from './ScootyAboutSection/ScootyAboutSection'
import { ScootyShowReel } from './ScootyShowReel/ScootyShowReel'

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
            <ScootyShowReel />
            <>ScootyServices</>
            <>ScootySocials</>
            <>ScootyClip</>
            <>ScootySolution</>
            <>ScootyFeedback</>
            <>ScootyContact</>
            <Footer />
        </motion.div>
    )
}
