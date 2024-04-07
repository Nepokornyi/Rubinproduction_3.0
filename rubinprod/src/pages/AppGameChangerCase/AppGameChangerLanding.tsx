import { motion } from 'framer-motion'
import { GameChangerMainSection } from './GameChangerMainSection/GameChangerMainSection'
import { GameChangerAboutSection } from './GameChangerAboutSection/GameChangerAboutSection'
import { GameChangerShowReelSection } from './GameChangerShowReelSection/GameChangerShowReelSection'

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
            <GameChangerShowReelSection />
        </motion.div>
    )
}
