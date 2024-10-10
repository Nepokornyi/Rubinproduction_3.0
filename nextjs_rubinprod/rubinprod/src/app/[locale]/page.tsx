import React from 'react'
import { MainSection } from './components/MainSection/MainSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { Gradient } from '@/components/Gradient/Gradient'
import { ShowReelSection } from './components/ShowReelSection/ShowReelSection'
import { WorkSection } from './components/WorkSection/WorkSection'
import { ContactSection } from './components/ContactSection/ContactSection'
import { Footer } from '@/components/Footer/Footer'
import { PageTransition } from '@/components/PageToTop/PageToTop'

export default function MainLanding() {
    return (
        <div className="animation-container">
            <PageTransition />
            <MainSection />
            <AboutSection />
            <ShowReelSection />
            <Gradient>
                <WorkSection />
                <ContactSection />
            </Gradient>
            <Footer />
        </div>
    )
}
