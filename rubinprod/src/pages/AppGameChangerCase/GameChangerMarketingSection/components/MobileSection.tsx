import styled from 'styled-components'
import { FlexContainer } from '../../../../components/layout/FlexContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RevealBlock } from '../../../../components/animations/reveal/RevealBlock'
import { SwiperCustomNavigation } from '../../../../components/layout/Carousel/components/SwiperCustomNavigation'

import marketingFirst from '../../../../assets/img/gameChanger/marketing/marketingFirst.png'
import marketingSecond from '../../../../assets/img/gameChanger/marketing/marketingSecond.png'
import marketingThird from '../../../../assets/img/gameChanger/marketing/marketingThird.png'
import { Text } from '../../../../components/Text/Text'
import { Box } from '../../../../components/layout/Box'

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
                            <SwiperSlideBackground src={marketingFirst} />
                        </RevealBlock>
                        <Text
                            $paddingOverride="0 15px"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            top funnel
                        </Text>
                        <br />
                        <Text $paddingOverride="0 15px 50px 15px" variant={'p'}>
                            To attract the audience and pull potential buyers in
                            at the beginning of their journey
                        </Text>
                    </FlexContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <FlexContainer direction="column" gap="10px">
                        <RevealBlock delay={0.25} blockColor="#7055ec">
                            <SwiperSlideBackground src={marketingSecond} />
                        </RevealBlock>
                        <Text
                            $paddingOverride="0 15px"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            middle funnel
                        </Text>
                        <br />
                        <Text $paddingOverride="0 15px 50px 15px" variant={'p'}>
                            To show benefits of the product and continue to
                            build trust among your prospects
                        </Text>
                    </FlexContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <FlexContainer direction="column" gap="10px">
                        <RevealBlock delay={0.25} blockColor="#7055ec">
                            <SwiperSlideBackground src={marketingThird} />
                        </RevealBlock>
                        <Text
                            $paddingOverride="0 15px"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            bottom funnel
                        </Text>
                        <br />
                        <Text $paddingOverride="0 15px 50px 15px" variant={'p'}>
                            To help buyers do away with any lingering objections
                            they may have towards your solution through the
                            explainer and UGC content
                        </Text>
                    </FlexContainer>
                </SwiperSlide>

                <SwiperCustomNavigation />
            </StyledSwiper>
        </StyledFlexContainer>
    )
}
