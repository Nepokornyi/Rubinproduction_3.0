import { MainSection } from './MainSection/MainSection'
import { AboutSection } from './AboutSection/AboutSection'
import { ShowReelSection } from './ShowReelSection/ShowReelSection'
import { WorkSection } from './WorkSection/WorkSection'
import { ContactSection } from './ContactSection/ContactSection'
import { Footer } from '../../components/Footer/Footer'
import { Gradient } from '../../components/Gradient/Gradient'
import { motion } from 'framer-motion'

export const AppMainLanding = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <MainSection />
            <AboutSection />
            <ShowReelSection />
            <Gradient>
                <WorkSection />
                <ContactSection />
            </Gradient>
            <Footer />
        </motion.div>
    )
}
