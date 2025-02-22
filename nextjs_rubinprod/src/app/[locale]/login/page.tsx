'use client'

import { LoginSection } from './LoginPage/components/LoginSection'
import { Header } from '@/components/Header/Header'

export default function Authentication() {
    return (
        <div className="animation-container">
            <Header />
            <LoginSection />
        </div>
    )
}
