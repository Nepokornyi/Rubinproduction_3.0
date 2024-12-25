'use client'

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

        const token_hash = searchParams.get('token_hash')
        const type = searchParams.get('type')
        const next = searchParams.get('next') ?? '/'

        const currentLocale = getCurrentLocale(pathname, 1)

        if (!token_hash || !type) {
            router.push(`/${currentLocale}/error`)
            return
        }

        hasFetched.current = true

        fetch(
            `/api/auth/confirm?token_hash=${encodeURIComponent(
                token_hash
            )}&type=${encodeURIComponent(type)}&next=${encodeURIComponent(
                next
            )}`
        )
            .then(async (response) => {
                if (response.redirected) {
                    router.replace(response.url)
                } else {
                    console.error('Was error in Page component?', response)
                    router.push(`/${currentLocale}/error`)
                }
            })
            .catch((err) => {
                console.error('Error confirming OTP:', err)
                router.push(`/${currentLocale}/error`)
            })
    }, [searchParams, pathname, router])

    return <div>Processing your confirmation request...</div>
}
