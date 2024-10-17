import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import React from 'react'
import { ContactSection } from '../components/ContactSection/ContactSection'
import { EliteVoyageMainSection } from './EliteVoyagePage/EliteVoyageMainSection/EliteVoyageMainSection'
import { EliteVoyageAboutSection } from './EliteVoyagePage/EliteVoyageAboutSection/EliteVoyageAboutSection'
import { EliteVoyageShowReelTopSection } from './EliteVoyagePage/EliteVoyageShowReelSection/EliteVoyageShowReelTopSection'
import { EliteVoyageShowReelBottomSection } from './EliteVoyagePage/EliteVoyageShowReelSection/EliteVoyageShowReelBottomSection'
import { EliteVoyageServicesSection } from './EliteVoyagePage/EliteVoyageServicesSection/EliteVoyageServicesSection'
import { EliteVoyageTravelSection } from './EliteVoyagePage/EliteVoyageTravelSection/EliteVoyageTravelSection'
import { EliteVoyageRecruitmentSection } from './EliteVoyagePage/EliteVoyageRecruitmentSection/EliteVoyageRecruitmentSection'
import { EliteVoyageEmployeeSection } from './EliteVoyagePage/EliteVoyageEmployeeSection/EliteVoyageEmployeeSection'
import { EliteVoyageFeedbackSection } from './EliteVoyagePage/EliteVoyageFeedbackSection/EliteVoyageFeedbackSection'

export default function EliteVoyage() {
    return (
        <>
            <Header isCase />
            <EliteVoyageMainSection />
            <EliteVoyageAboutSection />
            <EliteVoyageShowReelTopSection />
            <EliteVoyageServicesSection />
            <EliteVoyageTravelSection />
            <EliteVoyageShowReelBottomSection />
            <EliteVoyageRecruitmentSection />
            <EliteVoyageEmployeeSection />
            <EliteVoyageFeedbackSection />
            <ContactSection color="eliteVoyage" />
            <Footer />
        </>
    )
}
