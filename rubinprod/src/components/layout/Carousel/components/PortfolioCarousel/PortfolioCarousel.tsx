import {
    StyledFlexContainer,
    StyledLogo,
    StyledSwiper,
    StyledSwiperSlide,
    SwiperSlideBackground,
} from './StyledComponents'
import { SwiperCustomNavigation } from '../SwiperCustomNavigation'

import scooty from '../../../../../assets/img/work/scooty.png'
import gamechanger from '../../../../../assets/img/work/gamechanger.png'
import elitvoyage from '../../../../../assets/img/work/elitvoyage.jpg'
import logoScooty from '../../../../../assets/img/work/workScooty.png'
import logoGamechanger from '../../../../../assets/img/work/workGamechanger.png'
import logoEliteVoyage from '../../../../../assets/img/work/workEliteVoyage.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { RevealBlock } from '../../../../animations/reveal/RevealBlock'

// type Effect = {
//     material: ShaderMaterial
//     images: Texture[]
// }

// TODO: check for optimization in future
// TODO: big work for effects in progress

export const PortfolioCarousel = () => {
    // const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
    // const [effect, setEffect] = useState<Effect>()

    // useEffect(() => {
    //     const parent = document.querySelector('.swiper-parent') as HTMLElement
    //     const images = document.querySelectorAll('.test')

    //     const effects = SliderEffect({
    //         parent: parent,
    //         images: Array.from(images) as Element[],
    //     })
    //     setEffect(effects)
    // }, [])

    // useEffect(() => {
    //     if (effect) {
    //         const nextIndex = (currentSlideIndex + 1) % effect.images.length

    //         effect.material.uniforms.nextImage.value = effect.images[nextIndex]
    //         gsap.to(effect.material.uniforms.dispFactor, 1, {
    //             value: 1,
    //             ease: 'Expo.easeOut',
    //             onComplete: () => {
    //                 effect.material.uniforms.currentImage.value =
    //                     effect.images[currentSlideIndex]
    //                 effect.material.uniforms.dispFactor.value = 0.0
    //             },
    //         })
    //     }
    // }, [currentSlideIndex, effect])

    // const handleSlideChangeStart = (swiper: SwiperClass) => {
    //     const currentIndex = swiper.activeIndex
    //     setCurrentSlideIndex(currentIndex)
    // }

    return (
        <StyledFlexContainer>
            <StyledSwiper
                slidesPerView={1}
                spaceBetween={30}
                observeParents
                observer
                loop
            >
                <StyledSwiperSlide $isOdd>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <SwiperSlideBackground src={scooty} alt="scooty case" />
                        <StyledLogo src={logoScooty} alt="scooty logo" />
                    </RevealBlock>
                </StyledSwiperSlide>

                <StyledSwiperSlide $isOdd={false}>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <SwiperSlideBackground
                            src={gamechanger}
                            alt="gamechanger case"
                        />
                        <StyledLogo
                            src={logoGamechanger}
                            alt="gamechanger logo"
                        />
                    </RevealBlock>
                </StyledSwiperSlide>

                <StyledSwiperSlide $isOdd>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <SwiperSlideBackground
                            src={elitvoyage}
                            alt="elitvoyage case"
                        />
                        <StyledLogo
                            src={logoEliteVoyage}
                            alt="elitvoyage logo"
                        />
                    </RevealBlock>
                </StyledSwiperSlide>

                <StyledSwiperSlide $isOdd={false}>
                    <RevealBlock delay={0.25} blockColor="#0C0C0C">
                        <SwiperSlideBackground src={scooty} alt="scooty case" />
                        <StyledLogo src={logoScooty} alt="scooty logo" />
                    </RevealBlock>
                </StyledSwiperSlide>

                <SwiperCustomNavigation />
            </StyledSwiper>
        </StyledFlexContainer>
    )
}
