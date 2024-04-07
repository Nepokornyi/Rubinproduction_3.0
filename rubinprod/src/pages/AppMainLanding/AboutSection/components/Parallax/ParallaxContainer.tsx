import styled from 'styled-components'
import { FlexContainer } from '../../../../../components/layout/FlexContainer'
import { useEffect, useState } from 'react'
import { ScrollParallaxText } from './ScrollParallaxText'
import { AppLandingVariants } from '../../../../../components/Header/Header'

type ParallaxContainerProps = {
    isTop?: boolean
    variant?: AppLandingVariants
    text: string
}

type StyledContainerProps = {
    $rotation: number
    $isTop?: boolean
    $variant?: AppLandingVariants
}

const StyledContainer = styled(FlexContainer)<StyledContainerProps>`
    position: absolute;
    top: ${(props) => props.$isTop && 'clamp(-60px, 5vw, -30px)'};
    bottom: ${(props) => !props.$isTop && 'clamp(-60px, 5vw, -30px)'};
    transform: ${(props) => `skewY(${props.$rotation}deg)`};
    padding-top: clamp(15px, 2.5vw, 35px);
    padding-bottom: clamp(15px, 2.5vw, 35px);
    background: ${(props) =>
        props.$variant === 'main'
            ? 'linear-gradient(to right,rgba(12, 12, 12, 1),rgba(191, 27, 50, 1))'
            : 'transparent'};
    transition: transform 0.5s ease;
`

export const ParallaxContainer = ({
    isTop = true,
    variant = 'main',
    text,
}: ParallaxContainerProps) => {
    const [rotation, setRotation] = useState(-5)

    useEffect(() => {
        //TODO: On huge monitors parts of parent container are visible
        const adjustRotation = () => {
            const width = window.innerWidth
            const minWidth = 600
            const maxWidth = 1200
            const newRotation =
                -4.5 +
                (Math.min(width, maxWidth) - minWidth) *
                    (3 / (maxWidth - minWidth))

            setRotation(Math.max(-4.5, Math.min(newRotation, -1.5)))
        }

        adjustRotation()
        window.addEventListener('resize', adjustRotation)

        return () => window.removeEventListener('resize', adjustRotation)
    }, [])
    return (
        <StyledContainer $variant={variant} $isTop={isTop} $rotation={rotation}>
            <ScrollParallaxText variant={variant}>{text}</ScrollParallaxText>
        </StyledContainer>
    )
}
