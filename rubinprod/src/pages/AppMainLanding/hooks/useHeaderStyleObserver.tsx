import { RefObject, useEffect, useState } from 'react'

type UseHeaderStyleObserverProps = {
    targetRef: RefObject<HTMLDivElement>
}

export const useHeaderStyleObserver = ({
    targetRef,
}: UseHeaderStyleObserverProps) => {
    const [style, setStyle] = useState({})

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStyle({})
                } else {
                    setStyle({
                        backgroundColor: '#0C0C0C',
                        boxShadow: '0px -10px 75px -10px rgba(217,30,55,1)',
                    })
                }
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: '-100px',
            }
        )

        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)
    }, [targetRef])

    return { style }
}
