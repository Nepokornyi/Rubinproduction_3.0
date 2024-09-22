'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type HoverButtonEffectProps = {
    color?: string
}

export const HoverButtonEffect = ({
    color = '#d91e37',
}: HoverButtonEffectProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const [hovered, setHovered] = useState(false)
    const [gradientPos, setGradientPos] = useState({ x: 0, y: 25 })
    const [lastGradientPos, setLastGradientPos] = useState(50)
    const hoverBackgroundControls = useAnimation()

    useEffect(() => {
        if (!hovered) {
            const startX = lastGradientPos
            const startY = gradientPos.y
            const isCloserToLeft = startX <= 50
            const sequence = [
                `radial-gradient(175px circle at ${startX}% ${startY}px, ${color}, transparent 60%)`, // Start at last known position
                `radial-gradient(175px circle at ${
                    isCloserToLeft ? 0 : 100
                }% ${startY}px, ${color}, transparent 60%)`, // Move to the nearest edge
                `radial-gradient(175px circle at ${
                    isCloserToLeft ? 100 : 0
                }% ${startY}px, ${color}, transparent 60%)`, // Move to the far edge
                `radial-gradient(175px circle at ${startX}% ${startY}px, ${color}, transparent 60%)`, // Return to start
            ]

            hoverBackgroundControls.start({
                background: sequence,
                transition: {
                    duration: 8,
                    ease: 'easeInOut',
                    repeat: Infinity,
                },
            })
        }
    }, [
        hovered,
        hoverBackgroundControls,
        gradientPos.x,
        gradientPos.y,
        lastGradientPos,
        color,
    ])

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = event
        const { left, top } = currentTarget.getBoundingClientRect()
        requestAnimationFrame(() => {
            const newX = ((clientX - left) / currentTarget.clientWidth) * 100

            setGradientPos({
                x: clientX - left,
                y: clientY - top,
            })

            if (hovered) {
                setLastGradientPos(newX)
                hoverBackgroundControls.start({
                    background: `radial-gradient(175px circle at ${newX}% ${gradientPos.y}px, ${color}, transparent 60%)`,
                    transition: { duration: 0.35 },
                })
            }
        })
    }

    const handleMouseEnter = () => {
        hoverBackgroundControls.stop()
        setHovered(true)
    }
    const handleMouseLeave = () => {
        setHovered(false)
        setLastGradientPos((gradientPos.x / ref.current!.clientWidth) * 100)
    }

    const handleClickAnimation = () => {
        hoverBackgroundControls
            .start({
                background: `radial-gradient(675px circle at ${lastGradientPos}% ${gradientPos.y}px, ${color}, transparent 60%)`,
                transition: { duration: 0.5 },
            })
            .then(() => {
                hoverBackgroundControls.start({
                    background: `radial-gradient(175px circle at ${lastGradientPos}% ${gradientPos.y}px, ${color}, transparent 60%)`,
                    transition: { duration: 0.25 },
                })
            })
    }

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClickAnimation}
            animate={hoverBackgroundControls}
            className="w-full h-full absolute top-0 left-0"
        />
    )
}
