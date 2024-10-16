import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ContactSection } from '../components/ContactSection/ContactSection'
import { GameChangerMainSection } from './GameChangerPage/GameChangerMainSection/GameChangerMainSection'
import { GameChangerAboutSection } from './GameChangerPage/GameChangerAboutSection/GameChangerAboutSection'
import { GameChangerShowReelSection } from './GameChangerPage/GameChangerShowReelSection/GameChangerShowReelSection'
import { GameChangerServicesSection } from './GameChangerPage/GameChangerServicesSection/GameChangerServicesSection'
import { GameChangerFeedbackSection } from './GameChangerPage/GameChangerFeedbackSection/GameChangerFeedbackSection'

export default function GameChanger() {
    return (
        <>
            <Header isCase />
            <GameChangerMainSection />
            <GameChangerAboutSection />
            <GameChangerShowReelSection />
            <GameChangerServicesSection />
            <div>Marketing</div>
            <div>GameChangerShowReelSection</div>
            <div>MotionDesign</div>
            <GameChangerFeedbackSection />
            <ContactSection color="gameChanger" />
            <Footer />
        </>
    )
}
