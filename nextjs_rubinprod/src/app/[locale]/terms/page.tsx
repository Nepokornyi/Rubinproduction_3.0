import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import React from 'react'
import { PrivacyTermsTitle } from '../components/PrivacyTerms/PrivacyTermsTitle'
import { PrivacyTermsParagraph } from '../components/PrivacyTerms/PrivacyTermsParagraph'
import { PrivacyTermsHeaderConfig } from '@/components/Header/components/const'

export default function Terms() {
    return (
        <>
            <Header config={PrivacyTermsHeaderConfig} />
            <FlexContainer
                direction="flex-col"
                gap="gap-10"
                className="pt-32 md:px-[15%]"
            >
                <PrivacyTermsTitle
                    title="Terms of Service"
                    lastUpdated="Last Updated: 2 March 2025"
                />

                <PrivacyTermsParagraph title="1. Introduction">
                    Welcome to rubinproduction! These Terms of Service govern
                    your use of rubinproduction.eu (the “Service”). By accessing
                    or using the Service, you agree to these terms.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="2. Account Registration">
                    <ul className="list-disc list-inside">
                        <li>You must be at least 18 years old to register.</li>
                        <li>
                            You are responsible for maintaining your account
                            security.
                        </li>
                        <li>You agree not to share your login credentials.</li>
                    </ul>
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="3. Subscription and Payments">
                    <ul className="list-disc list-inside">
                        <li>
                            Access to exclusive content requires a paid
                            subscription through Stripe.
                        </li>
                        <li>
                            Payments are processed securely by Stripe, and we do
                            not store your credit card information.
                        </li>
                        <li>
                            <strong>Refunds:</strong> Subscriptions are
                            non-refundable, except as required by law.
                        </li>
                        <li>You may cancel your subscription at any time.</li>
                    </ul>
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="4. User Conduct">
                    By using our Service, you agree to:
                    <ul>
                        <li>✅ Use the Service for lawful purposes only.</li>
                        <li>
                            ❌ Not attempt to hack, disrupt, or abuse the
                            system.
                        </li>
                        <li>
                            ❌ Not share exclusive content outside the platform.
                        </li>
                    </ul>
                    We reserve the right to suspend or terminate accounts that
                    violate these rules.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="5. Intellectual Property">
                    All content on the platform (videos, articles, etc.) is
                    owned by Rubinproduction. Users may not reproduce,
                    distribute, or modify content without permission.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="6. Limitation of Liability">
                    We are not responsible for:
                    <ul className="list-disc list-inside">
                        <li>Any service interruptions or data loss.</li>
                        <li>
                            Third-party services like Stripe or Google OAuth.
                        </li>
                    </ul>
                    Use of the Service is at your own risk.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="7. Termination">
                    We may suspend or terminate your account if:
                    <ul className="list-disc list-inside">
                        <li>You violate these Terms.</li>
                        <li>You abuse the Service.</li>
                    </ul>
                    You may cancel your account at any time.
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="8. Governing Law">
                    These Terms are governed by the laws of Czech Republic
                </PrivacyTermsParagraph>

                <PrivacyTermsParagraph title="9. Changes to Terms">
                    We may update these Terms at any time. The latest version
                    will always be available at rubinproduction.eu/terms
                </PrivacyTermsParagraph>
            </FlexContainer>
            <Footer />
        </>
    )
}
