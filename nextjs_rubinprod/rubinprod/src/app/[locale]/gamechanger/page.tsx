import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ContactSection } from '../components/ContactSection/ContactSection'
import { GameChangerMainSection } from './GameChangerPage/GameChangerMainSection/GameChangerMainSection'
import { GameChangerAboutSection } from './GameChangerPage/GameChangerAboutSection/GameChangerAboutSection'
import { GameChangerShowReelSectionTop } from './GameChangerPage/GameChangerShowReelSection/GameChangerShowReelSectionTop'
import { GameChangerServicesSection } from './GameChangerPage/GameChangerServicesSection/GameChangerServicesSection'
import { GameChangerFeedbackSection } from './GameChangerPage/GameChangerFeedbackSection/GameChangerFeedbackSection'
import { GameChangerShowReelSectionBottom } from './GameChangerPage/GameChangerShowReelSection/GameChangerShowReelSectionBottom'
import { GameChangerMarketingSection } from './GameChangerPage/GameChangerMarketingSection/GameChangerMarketingSection'

export default function GameChanger() {
    return (
        <>
            <Header isCase />
            <GameChangerMainSection />
            <GameChangerAboutSection />
            <GameChangerShowReelSectionTop />
            <GameChangerServicesSection />
            <GameChangerMarketingSection />
            <GameChangerShowReelSectionBottom />
            <div>MotionDesign</div>
            <GameChangerFeedbackSection />
            <ContactSection color="gameChanger" />
            <Footer />
        </>
    )
}
