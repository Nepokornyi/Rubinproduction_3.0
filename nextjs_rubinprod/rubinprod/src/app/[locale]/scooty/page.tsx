import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import React from 'react'
import { ScootyMainSection } from './ScootyPage/ScootyMainSection/ScootyMainSection'

export default function Scooty() {
    return (
        <>
            <Header isCase />
            <ScootyMainSection />
            <>ScootyAboutSection</>
            <>ScootyShowReelSection</>
            <>ScootyServicesSection</>
            <>ScootySocialsSection</>
            <>ScootyClipSection</>
            <>ScootySolutionSection</>
            <>ScootyFeedbackSection</>
            <>ScootyContactSection</>
            <Footer />
        </>
    )
}
