'use client'
import { getSleep } from '@/helpers/getSleep'
import { Link, useRouter } from '@/navigation'
import React, { MouseEvent, ReactNode } from 'react'

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

    const handleTransition = async (e: MouseEvent) => {
        e.preventDefault()
        const body = document.querySelector('body')

        body?.classList.add('page-transition')
        await getSleep(500)

        router.push(href)

        await getSleep(500)
        body?.classList.remove('page-transition')
    }

    return (
        <Link href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    )
}
