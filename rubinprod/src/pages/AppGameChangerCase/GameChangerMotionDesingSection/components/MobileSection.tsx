import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RevealBlock } from '../../../../components/animations/reveal/RevealBlock'
import { SwiperCustomNavigation } from '../../../../components/layout/Carousel/components/SwiperCustomNavigation'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'

import designFirst from '../../../../assets/video/gameChanger/firstDesign.mp4'
import designSecond from '../../../../assets/video/gameChanger/secondDesign.mp4'
import designThird from '../../../../assets/video/gameChanger/thirdDesign.mp4'

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

export const MobileSection = () => {
    return (
        <StyledFlexContainer direction="column">
            <TitleContainer>
                <RelativeText
                    $paddingOverride="0"
                    $textTransform="uppercase"
                    variant={'h2'}
                >
                    Integrated
                    <StyledText fontFamily="Grunges">Motion Design</StyledText>
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
                    {/* Quick fix to expand carousel */}
                    <FlexContainer direction="column" gap="50px">
                        <RevealBlock delay={0.25} blockColor="#7055ec">
                            <StyledShowReel autoPlay muted loop playsInline>
                                <source src={designFirst} />
                                Your browser does not support the video tag.
                            </StyledShowReel>
                        </RevealBlock>
                        <Text />
                    </FlexContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <RevealBlock delay={0.25} blockColor="#7055ec">
                        <StyledShowReel autoPlay muted loop playsInline>
                            <source src={designSecond} />
                            Your browser does not support the video tag.
                        </StyledShowReel>
                    </RevealBlock>
                </SwiperSlide>

                <SwiperSlide>
                    <RevealBlock delay={0.25} blockColor="#7055ec">
                        <StyledShowReel autoPlay muted loop playsInline>
                            <source src={designThird} />
                            Your browser does not support the video tag.
                        </StyledShowReel>
                    </RevealBlock>
                </SwiperSlide>

                <SwiperCustomNavigation />
            </StyledSwiper>
        </StyledFlexContainer>
    )
}
