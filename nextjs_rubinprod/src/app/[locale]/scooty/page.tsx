import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import React from 'react'
import { ScootyMainSection } from './ScootyPage/ScootyMainSection/ScootyMainSection'
import { ScootyAboutSection } from './ScootyPage/ScootyAboutSection/ScootyAboutSection'
import { ScootyShowReelSection } from './ScootyPage/ScootyShowReelSection/ScootyShowReelSection'
import { ScootyServicesSection } from './ScootyPage/ScootyServicesSection/ScootyServicesSection'
import { ScootySocialsSection } from './ScootyPage/ScootySocialsSection/ScootySocialsSection'
import { ScootyClipSection } from './ScootyPage/ScootyClipSection/ScootyClipSection'
import { ScootySolutionSection } from './ScootyPage/ScootySolutionSection/ScootySolutionSection'
import { ScootyFeedbackSection } from './ScootyPage/ScootyFeedbackSection/ScootyFeedbackSection'
import { ContactSection } from '../components/ContactSection/ContactSection'
import { caseHeaderConfig } from '@/components/Header/components/const'

export default function Scooty() {
    return (
        <div className="animation-container">
            <Header isWhiteLogo config={caseHeaderConfig} />
            <ScootyMainSection />
            <ScootyAboutSection />
            <ScootyShowReelSection />
            <ScootyServicesSection />
            <ScootySocialsSection />
            <ScootyClipSection />
            <ScootySolutionSection />
            <ScootyFeedbackSection />
            <ContactSection color="scooty" />
            <Footer />
        </div>
    )
}
