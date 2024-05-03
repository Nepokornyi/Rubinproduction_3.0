import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import showReel from '../../../assets/video/showreel.mp4'
import showReelSmall from '../../../assets/video/showreel_small.mp4'
import { Reveal } from '../../../components/animations/reveal/Reveal'
import { useEffect, useRef, useState } from 'react'
import { IoIosVolumeHigh, IoIosVolumeOff } from 'react-icons/io'
import { Box } from '../../../components/layout/Box'
import { Variants, motion } from 'framer-motion'

const StyledFlexContainer = styled(FlexContainer)`
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
`

const StyledShowReel = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`

const Icon = styled(Box)`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 1;
    opacity: 0;
`

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
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const videoRef = useRef<HTMLVideoElement>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    const showReelSource = isDesktopLayout ? showReel : showReelSmall

    const [isMuted, setIsMuted] = useState(true)

    // Reload video when source changes
    useEffect(() => {
        videoRef.current?.load()
    }, [showReelSource])

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement) return

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                // Pause the video if it's not intersecting
                if (!entry.isIntersecting) {
                    videoElement.pause()
                } else {
                    videoElement.play()
                }
            },
            {
                threshold: 0.25, // Trigger when 50% of the video is visible
            }
        )

        observer.observe(videoElement)
        observerRef.current = observer

        // Clean up observer on component unmount
        return () => {
            observer.disconnect()
        }
    }, [])

    const handleVideoSound = () => {
        if (!videoRef.current) return
        const currentlyMuted = videoRef.current.muted
        videoRef.current.muted = !currentlyMuted
        setIsMuted(!currentlyMuted)
    }

    const renderSoundIcon = isMuted ? (
        <IoIosVolumeOff onClick={handleVideoSound} />
    ) : (
        <IoIosVolumeHigh onClick={handleVideoSound} />
    )

    return (
        <StyledFlexContainer alignItems="center" justifyContent="center">
            <Reveal
                style={{ height: '100vh', width: '100%' }}
                delay={0.5}
                removeRepeatedReveal={false}
            >
                <Icon
                    as={motion.div}
                    variants={soundVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {renderSoundIcon}
                </Icon>
                <StyledShowReel
                    ref={videoRef}
                    onClick={handleVideoSound}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={showReelSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </StyledShowReel>
            </Reveal>
        </StyledFlexContainer>
    )
}
