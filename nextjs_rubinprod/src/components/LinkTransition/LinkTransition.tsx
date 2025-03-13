'use client'

import { Link, usePathname, useRouter } from '@/navigation'
import React, { MouseEvent, ReactNode, useEffect, useState } from 'react'

type TransitionLinkProps = {
    children: ReactNode
    href: string
    className?: string
}

export const LinkTransition = ({
    children,
    href,
    className,
}: TransitionLinkProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const [isNavigating, setIsNavigating] = useState(false)

    useEffect(() => {
        if (document.body.classList.contains('page-transition')) {
            document.body.classList.remove('page-transition')
        }
        setIsNavigating(false)
    }, [pathname])

    const handleTransition = (e: MouseEvent) => {
        e.preventDefault()

        if (isNavigating) return
        setIsNavigating(true)

        const [targetPath] = href.split('#')
        const currentPath = pathname.replace(/\/$/, '')
        const nextPath = targetPath?.replace(/\/$/, '') || ''

        if (currentPath === nextPath || href.startsWith('#')) {
            router.push(href)
            setIsNavigating(false)
            return
        }

        const body = document.body
        body.classList.add('page-transition')

        setTimeout(() => {
            router.push(href)
        }, 500)
    }

    return (
        <Link href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    )
}
