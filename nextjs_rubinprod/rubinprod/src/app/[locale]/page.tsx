import React from 'react'
import { MainSection } from './MainPage/MainSection/MainSection'
import { AboutSection } from './MainPage/AboutSection/AboutSection'
import { Gradient } from '@/components/Gradient/Gradient'
import { ShowReelSection } from './MainPage/ShowReelSection/ShowReelSection'
import { WorkSection } from './MainPage/WorkSection/WorkSection'
import { ContactSection } from './MainPage/ContactSection/ContactSection'
import { Footer } from '@/components/Footer/Footer'

export default function MainLanding() {
    return (
        <div className="animation-container">
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
