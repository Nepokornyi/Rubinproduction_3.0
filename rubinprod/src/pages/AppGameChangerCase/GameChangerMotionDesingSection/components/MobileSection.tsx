import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RevealBlock } from '../../../../components/animations/reveal/RevealBlock'
import { SwiperCustomNavigation } from '../../../../components/layout/Carousel/components/SwiperCustomNavigation'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'

import marketingFirst from '../../../../assets/img/gameChanger/marketing/marketingFirst.png'
import marketingSecond from '../../../../assets/img/gameChanger/marketing/marketingSecond.png'
import marketingThird from '../../../../assets/img/gameChanger/marketing/marketingThird.png'

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

const SwiperSlideBackground = styled.img`
    width: 100%;
    height: 90%;
    object-fit: cover;
    padding: 0 15px;
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
                            <SwiperSlideBackground src={marketingFirst} />
                        </RevealBlock>
                        <Text />
                    </FlexContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <RevealBlock delay={0.25} blockColor="#7055ec">
                        <SwiperSlideBackground src={marketingSecond} />
                    </RevealBlock>
                </SwiperSlide>

                <SwiperSlide>
                    <RevealBlock delay={0.25} blockColor="#7055ec">
                        <SwiperSlideBackground src={marketingThird} />
                    </RevealBlock>
                </SwiperSlide>

                <SwiperCustomNavigation />
            </StyledSwiper>
        </StyledFlexContainer>
    )
}
