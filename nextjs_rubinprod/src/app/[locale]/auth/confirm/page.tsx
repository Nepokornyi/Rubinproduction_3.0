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

        const token = searchParams.get('token')

        const currentLocale = getCurrentLocale(pathname, 1)

        if (!token) {
            router.push(`/${currentLocale}/error`)
            return
        }

        hasFetched.current = true

        fetch(`/api/auth/confirm?token=${encodeURIComponent(token)}`)
            .then(async (response) => {
                if (response.redirected) {
                    router.replace(response.url)
                } else {
                    router.push(`/${currentLocale}/error`)
                }
            })
            .catch((err) => {
                router.push(`/${currentLocale}/error`)
            })
    }, [searchParams, pathname, router])

    return <div>Processing your confirmation request...</div>
}
