import { MutableRefObject, useEffect, useRef } from 'react'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { Text } from '../../../../components/Text/Text'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import styled from 'styled-components'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { Box } from '../../../../components/layout/Box'
import { Reveal } from '../../../../components/animations/reveal/Reveal'

import leftTravel from '../../../../assets/video/eliteVoyage/leftTravel.mp4'
import middleTravel from '../../../../assets/video/eliteVoyage/middleTravel.mp4'
import rightTravel from '../../../../assets/video/eliteVoyage/rightTravel.mp4'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

const MarketingContainer = styled(FlexContainer)`
    max-width: 1100px;
`

const RelativeText = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
    text-align: ${(props) => props.$textAlign};
    padding: ${(props) => props.$paddingOverride};
`

const StyledText = styled(Text)<LayoutFlexContainerProps>`
    position: absolute;
    top: ${(props) => (props.$isDesktopLayout ? '0' : 'auto')};
    right: ${(props) => (props.$isDesktopLayout ? '-245px' : '-50px')};
    bottom: ${(props) => !props.$isDesktopLayout && '-50px'};
    color: #b9965a;
`
const ContentContainer = styled(Box)`
    max-width: 345px;
`

const StyledShowReel = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`

export const DesktopSection = () => {
    const isDesktopLayout = useBreakpointBiggerThan('xl')
    const flexDirection = isDesktopLayout ? 'row' : 'column'

    const videoRef1 = useRef(null)
    const videoRef2 = useRef(null)
    const videoRef3 = useRef(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoElement = entry.target as HTMLVideoElement

                    if (entry.isIntersecting) {
                        videoElement.play()
                    } else {
                        videoElement.pause()
                    }
                })
            },
            { threshold: 0.25 }
        )

        const videos = [videoRef1.current, videoRef2.current, videoRef3.current]
        videos.forEach((video) => {
            if (video) observer.observe(video)
        })

        observerRef.current = observer

        return () => {
            videos.forEach((video) => {
                if (video) observer.unobserve(video)
            })
            observer.disconnect()
        }
    }, [])

    const handleVideoSound = (
        activeVideoRef: MutableRefObject<null | HTMLVideoElement>
    ) => {
        const videos: Array<MutableRefObject<HTMLVideoElement | null>> = [
            videoRef1,
            videoRef2,
            videoRef3,
        ]

        videos.forEach((ref) => {
            if (ref.current && ref !== activeVideoRef) {
                ref.current.muted = true // Mute other videos
            }
        })

        // Toggle the sound state for the active video
        if (activeVideoRef.current) {
            activeVideoRef.current.muted = !activeVideoRef.current.muted
        }
    }

    return (
        <StyledFlexContainer center>
            <MarketingContainer
                direction="column"
                justifyContent="center"
                gap={'50px'}
            >
                <FlexContainer center={!isDesktopLayout}>
                    <RelativeText
                        $paddingOverride="0"
                        $textTransform="uppercase"
                        $textAlign={'center'}
                        variant={'h2'}
                    >
                        <Reveal removeRepeatedReveal={false} x={20}>
                            Travel
                            <StyledText
                                $isDesktopLayout={isDesktopLayout}
                                fontFamily="Grunges"
                            >
                                Videos
                            </StyledText>
                        </Reveal>
                    </RelativeText>
                </FlexContainer>
                <FlexContainer
                    gap={'25px'}
                    direction={flexDirection}
                    center={!isDesktopLayout}
                >
                    <ContentContainer>
                        <Reveal
                            removeRepeatedReveal={false}
                            x={15}
                            delay={0.15}
                        >
                            <StyledShowReel
                                ref={videoRef1}
                                onClick={() => handleVideoSound(videoRef1)}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={leftTravel} />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </Reveal>
                    </ContentContainer>
                    <ContentContainer>
                        <Reveal removeRepeatedReveal={false} x={15} delay={0.3}>
                            <StyledShowReel
                                ref={videoRef2}
                                onClick={() => handleVideoSound(videoRef2)}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={middleTravel} />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </Reveal>
                    </ContentContainer>
                    <ContentContainer>
                        <Reveal
                            removeRepeatedReveal={false}
                            x={15}
                            delay={0.45}
                        >
                            <StyledShowReel
                                ref={videoRef3}
                                onClick={() => handleVideoSound(videoRef3)}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={rightTravel} />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </Reveal>
                    </ContentContainer>
                </FlexContainer>
            </MarketingContainer>
        </StyledFlexContainer>
    )
}
