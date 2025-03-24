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
import { GameChangerMotionDesignSection } from './GameChangerPage/GameChangerMotionDesignSection/GameChangerMotionDesignSection'
import { caseHeaderConfig } from '@/components/Header/components/const'

export default function GameChanger() {
    return (
        <div className="animation-container">
            <Header isWhiteLogo config={caseHeaderConfig} />
            <GameChangerMainSection />
            <GameChangerAboutSection />
            <GameChangerShowReelSectionTop />
            <GameChangerServicesSection />
            <GameChangerMarketingSection />
            <GameChangerShowReelSectionBottom />
            <GameChangerMotionDesignSection />
            <GameChangerFeedbackSection />
            <ContactSection color="gameChanger" />
            <Footer />
        </div>
    )
}
