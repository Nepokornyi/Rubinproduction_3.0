import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'
import { Reveal } from '../../../../components/animations/reveal/Reveal'
import { MutableRefObject, useEffect, useRef } from 'react'

import marketingFirst from '../../../../assets/video/gameChanger/topMarketing.mp4'
import marketingSecond from '../../../../assets/video/gameChanger/middleMarketing.mp4'
import marketingThird from '../../../../assets/video/gameChanger/bottomMarketing.mp4'
import { useTranslation } from 'react-i18next'

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
    color: #7055ec;
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
    const { t } = useTranslation()

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
                            Marketing
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
                                <source src={marketingFirst} />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </Reveal>
                        <Reveal
                            removeRepeatedReveal={false}
                            y={15}
                            delay={0.15}
                        >
                            <Text
                                $paddingOverride="0"
                                $textTransform="uppercase"
                                variant="button"
                            >
                                top funnel
                            </Text>
                            <br />
                            <Text $paddingOverride="0" variant={'p'}>
                                {t('gameChangerCase.marketing.top')}
                            </Text>
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
                                <source src={marketingSecond} />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </Reveal>
                        <Reveal removeRepeatedReveal={false} y={15} delay={0.3}>
                            <Text
                                $paddingOverride="0"
                                $textTransform="uppercase"
                                variant="button"
                            >
                                middle funnel
                            </Text>
                            <br />
                            <Text $paddingOverride="0" variant={'p'}>
                                {t('gameChangerCase.marketing.middle')}
                            </Text>
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
                                <source src={marketingThird} />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </Reveal>
                        <Reveal
                            removeRepeatedReveal={false}
                            y={15}
                            delay={0.45}
                        >
                            <Text
                                $paddingOverride="0"
                                $textTransform="uppercase"
                                variant="button"
                            >
                                bottom funnel
                            </Text>
                            <br />
                            <Text $paddingOverride="0" variant={'p'}>
                                {t('gameChangerCase.marketing.bottom')}
                            </Text>
                        </Reveal>
                    </ContentContainer>
                </FlexContainer>
            </MarketingContainer>
        </StyledFlexContainer>
    )
}
