import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RevealBlock } from '../../../../components/animations/reveal/RevealBlock'
import { SwiperCustomNavigation } from '../../../../components/layout/Carousel/components/SwiperCustomNavigation'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'
import { Variants, motion } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

import marketingFirst from '../../../../assets/video/gameChanger/topMarketing.mp4'
import marketingSecond from '../../../../assets/video/gameChanger/middleMarketing.mp4'
import marketingThird from '../../../../assets/video/gameChanger/bottomMarketing.mp4'
import { IoIosVolumeHigh, IoIosVolumeOff } from 'react-icons/io'
import { Reveal } from '../../../../components/animations/reveal/Reveal'
import { useTranslation } from 'react-i18next'

const StyledFlexContainer = styled(FlexContainer)`
    height: 100%;
    padding: 50px 0;
`

const RelativeText = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
`

const StyledSwiper = styled(Swiper)`
    width: 90%;
`

const TitleContainer = styled(Box)`
    padding: 0 15px 45px 15px;
`

const StyledText = styled(Text)`
    position: absolute;
    right: -50px;
    bottom: -50px;
    color: #7055ec;
`

const StyledShowReel = styled.video`
    width: 100%;
    height: 90%;
    object-fit: cover;
    padding: 0 15px;
    pointer-events: none;
`

const Icon = styled(Box)`
    position: absolute;
    bottom: 125px;
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

export const MobileSection = () => {
    const { t } = useTranslation()

    const videoRef1 = useRef(null)
    const videoRef2 = useRef(null)
    const videoRef3 = useRef(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    const [isMuted1, setIsMuted1] = useState(true)
    const [isMuted2, setIsMuted2] = useState(true)
    const [isMuted3, setIsMuted3] = useState(true)

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
        videoRef: MutableRefObject<null | HTMLVideoElement>,
        setMuteState: (state: boolean) => void
    ) => {
        const videos: Array<MutableRefObject<HTMLVideoElement | null>> = [
            videoRef1,
            videoRef2,
            videoRef3,
        ]
        const setters = [setIsMuted1, setIsMuted2, setIsMuted3]

        videos.forEach((ref, index) => {
            if (ref.current && ref !== videoRef) {
                ref.current.muted = true // Mute other videos
                setters[index](true) // Update state to reflect this
            }
        })

        // Toggle the sound state for the active video
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setMuteState(!videoRef.current.muted) // Update state based on the new mute status
        }
    }

    const renderSoundIcon1 = isMuted1 ? <IoIosVolumeHigh /> : <IoIosVolumeOff />
    const renderSoundIcon2 = isMuted2 ? <IoIosVolumeHigh /> : <IoIosVolumeOff />
    const renderSoundIcon3 = isMuted3 ? <IoIosVolumeHigh /> : <IoIosVolumeOff />

    return (
        <StyledFlexContainer direction="column">
            <TitleContainer>
                <RelativeText
                    $paddingOverride="0"
                    $textTransform="uppercase"
                    variant={'h2'}
                >
                    Marketing
                    <StyledText fontFamily="Grunges">Videos</StyledText>
                </RelativeText>
            </TitleContainer>
            <StyledSwiper
                slidesPerView={1}
                spaceBetween={30}
                observeParents
                observer
                loop
            >
                <SwiperSlide>
                    <FlexContainer direction="column" gap="10px">
                        <RevealBlock delay={0.25} blockColor="#7055ec">
                            <StyledShowReel
                                ref={videoRef1}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={marketingFirst} type="video/mp4" />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </RevealBlock>
                        <Text
                            $paddingOverride="0 15px"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            <Reveal removeRepeatedReveal={false}>
                                top funnel
                            </Reveal>
                        </Text>
                        <br />
                        <Text $paddingOverride="0 15px 50px 15px" variant={'p'}>
                            <Reveal removeRepeatedReveal={false}>
                                {t('gameChangerCase.marketing.top')}
                            </Reveal>
                        </Text>
                        <Reveal removeRepeatedReveal={false}>
                            <Icon
                                as={motion.div}
                                variants={soundVariants}
                                initial="hidden"
                                animate="visible"
                                onClick={() =>
                                    handleVideoSound(videoRef1, setIsMuted1)
                                }
                            >
                                {renderSoundIcon1}
                            </Icon>
                        </Reveal>
                    </FlexContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <FlexContainer direction="column" gap="10px">
                        <RevealBlock delay={0.25} blockColor="#7055ec">
                            <StyledShowReel
                                ref={videoRef2}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src={marketingSecond}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </RevealBlock>
                        <Text
                            $paddingOverride="0 15px"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            <Reveal removeRepeatedReveal={false}>
                                middle funnel
                            </Reveal>
                        </Text>
                        <br />
                        <Text $paddingOverride="0 15px 50px 15px" variant={'p'}>
                            <Reveal removeRepeatedReveal={false}>
                                {t('gameChangerCase.marketing.middle')}
                            </Reveal>
                        </Text>
                        <Reveal removeRepeatedReveal={false}>
                            <Icon
                                as={motion.div}
                                variants={soundVariants}
                                initial="hidden"
                                animate="visible"
                                onClick={() =>
                                    handleVideoSound(videoRef2, setIsMuted2)
                                }
                            >
                                {renderSoundIcon2}
                            </Icon>
                        </Reveal>
                    </FlexContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <FlexContainer direction="column" gap="10px">
                        <RevealBlock delay={0.25} blockColor="#7055ec">
                            <StyledShowReel
                                ref={videoRef3}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={marketingThird} type="video/mp4" />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </RevealBlock>
                        <Text
                            $paddingOverride="0 15px"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            <Reveal removeRepeatedReveal={false}>
                                bottom funnel
                            </Reveal>
                        </Text>
                        <br />
                        <Text $paddingOverride="0 15px 50px 15px" variant={'p'}>
                            <Reveal removeRepeatedReveal={false}>
                                {t('gameChangerCase.marketing.bottom')}
                            </Reveal>
                        </Text>
                        <Reveal
                            style={{
                                position: 'absolute',
                                width: '100%',
                                bottom: '10px',
                            }}
                            removeRepeatedReveal={false}
                        >
                            <Icon
                                as={motion.div}
                                variants={soundVariants}
                                initial="hidden"
                                animate="visible"
                                onClick={() =>
                                    handleVideoSound(videoRef3, setIsMuted3)
                                }
                            >
                                {renderSoundIcon3}
                            </Icon>
                        </Reveal>
                    </FlexContainer>
                </SwiperSlide>

                <SwiperCustomNavigation />
            </StyledSwiper>
        </StyledFlexContainer>
    )
}
