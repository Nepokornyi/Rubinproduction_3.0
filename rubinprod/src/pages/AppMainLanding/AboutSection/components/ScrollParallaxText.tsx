import {
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    motion,
    wrap,
} from 'framer-motion'
import { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'

type ScrollParallaxTextProps = {
    children: ReactNode
    baseVelocity?: number
}

const StyledParallaxContainer = styled(Box)`
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    overflow: hidden;
    margin: 0;
`

const StyledScroller = styled(Box)`
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
`

export const ScrollParallaxText = ({
    children,
    baseVelocity = 6.5,
}: ScrollParallaxTextProps) => {
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

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

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
        <StyledParallaxContainer>
            <StyledScroller
                as={motion.div}
                className={'scroller'}
                style={{ x }}
            >
                <Text textTransform="uppercase" fontWeight="600">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="600">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="600">
                    {children}
                </Text>
                <Text textTransform="uppercase" fontWeight="600">
                    {children}
                </Text>
            </StyledScroller>
        </StyledParallaxContainer>
    )
}
