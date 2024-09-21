'use client'

import { useEffect, useState } from 'react'

export const useScrollHeader = () => {
    const [headerStyle, setHeaderStyle] = useState<string>('bg-transparent')

    useEffect(() => {
        const handleScroll = () => {
            const newStyle =
                window.scrollY > 100 ? 'bg-[#0C0C0C]' : 'bg-transparent'
            setHeaderStyle(newStyle)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return headerStyle
}
