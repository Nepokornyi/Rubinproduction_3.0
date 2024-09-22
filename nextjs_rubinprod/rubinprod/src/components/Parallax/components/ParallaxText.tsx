'use client'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap,
} from 'framer-motion'
import { ReactNode, useRef } from 'react'
type ParallaxTextProps = {
    children: ReactNode
}

export const ParallaxText = ({ children }: ParallaxTextProps) => {
    const baseVelocity = 2.5
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    })

    const mainTransform = useTransform(baseX, (v) => `${wrap(-10, -50, v)}%`)
    const caseTransform = useTransform(baseX, (v) => `${wrap(-35, -73.55, v)}%`)

    // There's a correlation between wrapping values and amount of text elements rendered

    const directionFactor = useRef<number>(1)
    useAnimationFrame((_t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <FlexContainer className="whitespace-nowrap flex-nowrap overflow-hidden">
            <motion.div
                style={{ x: mainTransform }}
                className="flex whitespace-nowrap flex-nowrap gap-[325px]"
            >
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="font-semibold">
                    {children}
                </Text>
            </motion.div>
        </FlexContainer>
    )
}
