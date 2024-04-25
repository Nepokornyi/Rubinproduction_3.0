import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0)
        }, 325)

        return () => clearTimeout(timer)
    }, [pathname])

    return null
}
