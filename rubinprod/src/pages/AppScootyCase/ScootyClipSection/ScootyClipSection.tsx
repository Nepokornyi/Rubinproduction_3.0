import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'

import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { useEffect, useRef } from 'react'

import showReel from '../../../assets/video/scooty/scooty.mp4'
import showReelSmall from '../../../assets/video/scooty/scooty_small.mp4'

const StyledFlexContainer = styled(FlexContainer)`
    position: relative;
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    z-index: 100;
`

const StyledShowReel = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ScootyClipSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const videoRef = useRef<HTMLVideoElement>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    const showReelSource = isDesktopLayout ? showReel : showReelSmall

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

    return (
        <StyledFlexContainer alignItems="center" justifyContent="center">
            <StyledShowReel ref={videoRef} autoPlay muted loop playsInline>
                <source src={showReelSource} type="video/mp4" />
                Your browser does not support the video tag.
            </StyledShowReel>
        </StyledFlexContainer>
    )
}
