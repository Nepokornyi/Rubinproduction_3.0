import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import React from 'react'
import { ScootyMainSection } from './ScootyPage/ScootyMainSection/ScootyMainSection'
import { ScootyAboutSection } from './ScootyPage/ScootyAboutSection/ScootyAboutSection'

export default function Scooty() {
    return (
        <>
            <Header isCase />
            <ScootyMainSection />
            <ScootyAboutSection />
            <div>ScootyShowReelSection</div>
            <div>ScootyServicesSection</div>
            <div>ScootySocialsSection</div>
            <div>ScootyClipSection</div>
            <div>ScootySolutionSection</div>
            <div>ScootyFeedbackSection</div>
            <div>ScootyContactSection</div>
            <Footer />
        </>
    )
}
