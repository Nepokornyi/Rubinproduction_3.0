import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ContactSection } from '../components/ContactSection/ContactSection'
import { GameChangerMainSection } from './GameChangerPage/GameChangerMainSection/GameChangerMainSection'
import { GameChangerAboutSection } from './GameChangerPage/GameChangerAboutSection/GameChangerAboutSection'
import { GameChangerShowReelSection } from './GameChangerPage/GameChangerShowReelSection/GameChangerShowReelSection'

export default function GameChanger() {
    return (
        <>
            <Header isCase />
            <GameChangerMainSection />
            <GameChangerAboutSection />
            <GameChangerShowReelSection />
            <div>GameChangerServicesSection</div>
            <div>Marketing</div>
            <div>GameChangerShowReelSection</div>
            <div>MotionDesign</div>
            <div>GameChangerFeedbackSection</div>
            <ContactSection color="gameChanger" />
            <Footer />
        </>
    )
}
