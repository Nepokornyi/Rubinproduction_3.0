'use client'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Variants } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosVolumeHigh, IoIosVolumeOff } from 'react-icons/io'
import { motion } from 'framer-motion'

const soundVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
        },
    },
    hidden: {
        opacity: 0,
    },
}

export const ShowReelSection = () => {
    const desktopVideoRef = useRef<HTMLVideoElement>(null)
    const mobileVideoRef = useRef<HTMLVideoElement>(null)

    const [isMuted, setIsMuted] = useState(true) // Unified mute state
    const [currentPlaying, setCurrentPlaying] = useState<
        'desktop' | 'mobile' | null
    >(null)

    useEffect(() => {
        const desktopVideoElement = desktopVideoRef.current
        const mobileVideoElement = mobileVideoRef.current

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLVideoElement
                    if (!entry.isIntersecting) {
                        target.pause()
                    } else {
                        target.play()
                    }
                })
            },
            {
                threshold: 0.25,
            }
        )

        if (desktopVideoElement) observer.observe(desktopVideoElement)
        if (mobileVideoElement) observer.observe(mobileVideoElement)

        return () => {
            if (desktopVideoElement) observer.unobserve(desktopVideoElement)
            if (mobileVideoElement) observer.unobserve(mobileVideoElement)
        }
    }, [])

    const handleVideoPlay = (videoType: 'desktop' | 'mobile') => {
        setCurrentPlaying(videoType)
        if (videoType === 'desktop' && mobileVideoRef.current) {
            mobileVideoRef.current.muted = true
        } else if (videoType === 'mobile' && desktopVideoRef.current) {
            desktopVideoRef.current.muted = true
        }
    }

    const handleSoundToggle = () => {
        setIsMuted((prev) => !prev)
        if (desktopVideoRef.current && currentPlaying === 'desktop') {
            desktopVideoRef.current.muted = !desktopVideoRef.current.muted
        }
        if (mobileVideoRef.current && currentPlaying === 'mobile') {
            mobileVideoRef.current.muted = !mobileVideoRef.current.muted
        }
    }

    return (
        <FlexContainer center className="relative clip-path-container">
            {/* Sound control icon (unified) */}
            <motion.div
                className="absolute bottom-12 text-4xl"
                variants={soundVariants}
                initial="hidden"
                animate="visible"
            >
                {isMuted ? (
                    <IoIosVolumeOff onClick={handleSoundToggle} />
                ) : (
                    <IoIosVolumeHigh onClick={handleSoundToggle} />
                )}
            </motion.div>

            {/* Desktop video */}
            <video
                ref={desktopVideoRef}
                onPlay={() => handleVideoPlay('desktop')}
                onClick={() => handleSoundToggle()}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="hidden md:block w-full h-full object-cover cursor-pointer"
            >
                <source src="/video/showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mobile video */}
            <video
                ref={mobileVideoRef}
                onPlay={() => handleVideoPlay('mobile')}
                onClick={() => handleSoundToggle()}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="block md:hidden w-full h-full object-cover cursor-pointer"
            >
                <source src="/video/showreel_small.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </FlexContainer>
    )
}
