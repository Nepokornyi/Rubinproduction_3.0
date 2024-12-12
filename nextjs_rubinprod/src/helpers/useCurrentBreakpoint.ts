'use client'
import { useEffect, useState } from 'react'
import { Breakpoints, breakpoints } from '../breakpoints'

const calculateBreakpoint = () => {
    if (typeof window === 'undefined') {
        return 'xs'
    }

    const width = window.innerWidth
    if (width < 640) return 'xs'
    if (width < 768) return 'sm'
    if (width < 1024) return 'md'
    if (width < 1280) return 'lg'
    if (width < 1536) return 'xl'
    return '2xl'
}

export const useCurrentBreakpoint = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoints>(
        calculateBreakpoint()
    )

    useEffect(() => {
        const handleResize = () => {
            setCurrentBreakpoint(calculateBreakpoint())
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return currentBreakpoint
}

export const useBreakpointBiggerThan = (breakpoint: Breakpoints) => {
    const currentBreakpoint = useCurrentBreakpoint()
    return breakpoints[currentBreakpoint] >= breakpoints[breakpoint]
}
