import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import React from 'react'
import { PrivacyTermsTitle } from '../components/PrivacyTerms/PrivacyTermsTitle'
import { PrivacyTermsParagraph } from '../components/PrivacyTerms/PrivacyTermsParagraph'

export default function Privacy() {
    return (
        <>
            <Header />
            <FlexContainer
                direction="flex-col"
                gap="gap-10"
                className="pt-32 md:px-[15%]"
            >
                <PrivacyTermsTitle
                    title="Privacy Policy"
                    lastUpdated="Last Updated: 2 March 2025"
                />
                <PrivacyTermsParagraph title="1. Introduction">
                    Welcome to Rubinproduction. This Privacy Policy explains how
                    we collect, use, disclose, and protect your personal
                    information when you use our website. By using our Service,
                    you agree to the collection and use of information in
                    accordance with this policy.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="2. Information We Collect">
                    We collect the following types of personal information when
                    you use our Service:
                    <ul className="list-disc list-inside">
                        <li>
                            <strong> Account Information:</strong> When you
                            register using email or Google OAuth, we collect
                            your email address, full name, and profile picture
                            (if provided by Google).
                        </li>
                        <li>
                            <strong>Payment Information:</strong> If you
                            subscribe to our exclusive content, payment
                            processing is handled by Stripe. We do not store
                            your credit card details, but we receive transaction
                            details from Stripe.
                        </li>
                        <li>
                            <strong>Cookies and Tracking Technologies:</strong>
                            We use cookies to manage user authentication and
                            session persistence.
                        </li>
                    </ul>
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="3. How We Use Your Information">
                    We use your information to:
                    <ul className="list-disc list-inside">
                        <li>Provide and manage your user account.</li>
                        <li>Process subscriptions and payments via Stripe.</li>
                        <li>Send important account-related notifications.</li>
                        <li>Improve the Service and protect against fraud.</li>
                    </ul>
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="4. How We Share Your Information">
                    We do not sell your personal data. However, we may share
                    your information with:
                    <ul className="list-disc list-inside">
                        <li>
                            <strong> Supabase:</strong> To store user
                            authentication and profile data.
                        </li>
                        <li>
                            <strong> Stripe: </strong> To process payments
                            securely.
                        </li>
                        <li>
                            <strong> Google OAuth: </strong> If you sign in
                            using your Google account.
                        </li>
                    </ul>
                    We may also disclose your data to comply with legal
                    obligations or protect our rights.
                </PrivacyTermsParagraph>
                <PrivacyTermsParagraph title="5. Cookies and Tracking">
                    We use cookies to:
                    <ul className="list-disc list-inside">
                        <li>Keep you logged in.</li>
                        <li>Secure your session.</li>
                        <li>Track user interactions (e.g., login events).</li>
                    </ul>
                    You can disable cookies in your browser, but some features
                    may not work properly.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="6. Your Rights">
                    Depending on your location, you may have the right to:
                    <ul className="list-disc list-inside">
                        <li>
                            <strong> Request access </strong> to your data.
                        </li>
                        <li>
                            <strong> Delete or modify </strong> your account.
                        </li>
                        <li>
                            <strong> Withdraw </strong>consent for certain uses.
                        </li>
                    </ul>
                    To request data deletion, contact us at
                    <strong> info@rubinproduction.eu </strong>
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="7. Data Security">
                    We implement security measures to protect your data.
                    However, no method of transmission over the Internet is 100%
                    secure.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="8. Changes to This Privacy Policy">
                    We may update this Privacy Policy from time to time. The
                    latest version will always be available on
                    rubinproduction.com/privacy.
                </PrivacyTermsParagraph>
            </FlexContainer>
            <Footer />
        </>
    )
}
