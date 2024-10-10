'use client'
import { usePathname, useRouter } from '@/navigation'
import { useEffect } from 'react'

export const PageTransition = () => {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const body = document.querySelector('body')

        // Add the page-transition class before navigation
        body?.classList.add('page-transition')
        body?.classList.remove('page-transition')

        // Use a small delay to allow the transition to take effect
        setTimeout(() => {
            window.scrollTo(0, 0)
            if (window.location.hash) {
                // @ts-ignore
                router.replace(pathname, undefined, { shallow: true })
            }
        }, 500) // Sync with the animation delay

        // After the scroll and hash are handled, remove the transition
        setTimeout(() => {}, 1000) // Total delay for transition + scroll
    }, [pathname, router])

    return null
}
