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
    isCase?: boolean
}

export const ParallaxText = ({ children, isCase }: ParallaxTextProps) => {
    // case styling
    const textVariant = isCase ? 'h5' : 'p'
    const textFont = isCase ? 'font-grunges' : ''
    const textStyles = isCase ? 'text-[#6E6E6E]' : ''

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
    const transformFactor = isCase ? caseTransform : mainTransform

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

    const numberOfElements = 8

    return (
        <FlexContainer className="whitespace-nowrap flex-nowrap overflow-hidden">
            <motion.div
                style={{ x: transformFactor }}
                className="flex whitespace-nowrap flex-nowrap gap-[325px]"
            >
                {[...Array(numberOfElements)].map((_, index) => (
                    <Text
                        key={index}
                        variant={textVariant}
                        textTransform="uppercase"
                        fontWeight="font-semibold"
                        fontFamily={textFont}
                        className={textStyles}
                    >
                        {children}
                    </Text>
                ))}
            </motion.div>
        </FlexContainer>
    )
}
