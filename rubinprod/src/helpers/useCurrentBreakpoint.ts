import { useEffect, useState } from 'react'
import {
    Breakpoints,
    breakpoints,
} from '../components/layout/breakpoints/breakpoints'

const calculateBreakpoint = () => {
    const width = window.innerWidth
    if (width < 576) return 'xs'
    if (width < 768) return 'sm'
    if (width < 992) return 'md'
    if (width < 1200) return 'lg'
    return 'xl'
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
