import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import showReel from '../../../assets/video/showreel.mp4'
import showReelSmall from '../../../assets/video/showreel_small.mp4'
import { Reveal } from '../../../components/animations/reveal/Reveal'
import { useEffect, useRef } from 'react'

const StyledFlexContainer = styled(FlexContainer)`
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
`

const StyledShowReel = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ShowReelSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')
    const videoRef = useRef<HTMLVideoElement>(null)

    const showReelSource = isDesktopLayout ? showReel : showReelSmall

    // Reload video when source changes
    useEffect(() => {
        videoRef.current?.load()
    }, [showReelSource])

    return (
        <StyledFlexContainer alignItems="center" justifyContent="center">
            <Reveal
                style={{ height: '100vh' }}
                delay={0.5}
                removeRepeatedReveal={false}
            >
                <StyledShowReel ref={videoRef} autoPlay muted loop playsInline>
                    <source src={showReelSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </StyledShowReel>
            </Reveal>
        </StyledFlexContainer>
    )
}
