import { MainSection } from './MainSection/MainSection'
import { AboutSection } from './AboutSection/AboutSection'
import { ShowReelSection } from './ShowReelSection/ShowReelSection'
import { WorkSection } from './WorkSection/WorkSection'
import { ContactSection } from './ContactSection/ContactSection'
import { Footer } from '../../components/Footer/Footer'
import { Gradient } from '../../components/Gradient/Gradient'

export const AppMainLanding = () => {
    return (
        <>
            <MainSection />
            <AboutSection />
            <ShowReelSection />
            <Gradient>
                <WorkSection />
                <ContactSection />
            </Gradient>
            <Footer />
        </>
    )
}
