'use client'

import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { getCurrentLocale } from '@/helpers/getCurrentLocale'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ConfirmPage() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const hasFetched = useRef(false)

    useEffect(() => {
        if (hasFetched.current) return

        const token = searchParams.get('token')
        const email = searchParams.get('email')
        const provider = searchParams.get('provider')

        const currentLocale = getCurrentLocale(pathname, 1)

        if (provider === 'google') {
            hasFetched.current = true
            fetch(`/api/auth/confirm?provider=google`)
                .then(async (response) => {
                    if (response.redirected) {
                        router.replace(response.url)
                    } else {
                        router.push(`/${currentLocale}/error`)
                    }
                })
                .catch(() => {
                    router.push(`/${currentLocale}/error`)
                })
        } else if (token && email) {
            hasFetched.current = true
            fetch(
                `/api/auth/confirm?token=${encodeURIComponent(
                    token
                )}&email=${encodeURIComponent(email)}`
            )
                .then(async (response) => {
                    if (response.redirected) {
                        router.replace(response.url)
                    } else {
                        router.push(`/${currentLocale}/error`)
                    }
                })
                .catch(() => {
                    router.push(`/${currentLocale}/error`)
                })
        } else {
            router.push(`/${currentLocale}/error`)
        }
    }, [searchParams, pathname, router])

    return (
        <FlexContainer minHeight="min-h-screen" center>
            <Text variant="h3">Processing your confirmation request...</Text>
        </FlexContainer>
    )
}
