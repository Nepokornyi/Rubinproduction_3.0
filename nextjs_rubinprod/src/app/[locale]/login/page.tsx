'use client'

import { Footer } from '@/components/Footer/Footer'
import { LoginAbout } from './LoginPage/LoginAbout/LoginAbout'
import { LoginSection } from './LoginPage/LoginSection/LoginSection'

export default function Authentication() {
    return (
        <div className="animation-container">
            <LoginSection />
            <LoginAbout />
            <Footer />
        </div>
    )
}
