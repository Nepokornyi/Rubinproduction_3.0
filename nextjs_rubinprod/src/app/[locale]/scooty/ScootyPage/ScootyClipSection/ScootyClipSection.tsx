'use client'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React, { useEffect, useRef } from 'react'

export const ScootyClipSection = () => {
    const desktopVideoRef = useRef<HTMLVideoElement>(null)
    const mobileVideoRef = useRef<HTMLVideoElement>(null)

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
        if (videoType === 'desktop' && mobileVideoRef.current) {
            mobileVideoRef.current.muted = true
        } else if (videoType === 'mobile' && desktopVideoRef.current) {
            desktopVideoRef.current.muted = true
        }
    }

    return (
        <FlexContainer className="clip-path-container">
            {/* Desktop video */}
            <video
                ref={desktopVideoRef}
                onPlay={() => handleVideoPlay('desktop')}
                autoPlay
                muted
                loop
                playsInline
                className="hidden md:block w-full h-full object-cover"
            >
                <source src="/video/scooty/showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mobile video */}
            <video
                ref={mobileVideoRef}
                onPlay={() => handleVideoPlay('mobile')}
                autoPlay
                muted
                loop
                playsInline
                className="block md:hidden w-full h-full object-cover"
            >
                <source
                    src="/video/scooty/showreel_small.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </FlexContainer>
    )
}
