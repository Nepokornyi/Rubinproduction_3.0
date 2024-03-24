import { motion } from 'framer-motion'

import styled from 'styled-components'
import { Box } from '../../../../components/layout/Box'
import { useBreakpointBiggerThan } from '../../../../helpers/useCurrentBreakpoint'
import { LayoutFlexContainerProps } from '../../../../components/layout/types'

// TODO: Add proper position later, when
const StyledBox = styled(Box)<LayoutFlexContainerProps>`
    position: absolute;
    top: ${(props) => (props.$isDesktopLayout ? 'auto' : '15px')};
    right: ${(props) => (props.$isDesktopLayout ? 'auto' : '-62.5px')};
    bottom: ${(props) => (props.$isDesktopLayout ? '-150px' : 'auto')};
    left: ${(props) => (props.$isDesktopLayout ? '-62.5px' : 'auto')};
    z-index: -1;
`

const StyledSvg = styled.svg`
    width: 125px;
    height: 125px;
    fill: none;
`

const animationProps = {
    rotate: 360,
    transition: {
        repeat: Infinity,
        duration: 5,
        ease: 'linear',
    },
}

export const AnimatedCircleText = () => {
    const isDesktopLayout = useBreakpointBiggerThan('md')

    return (
        <StyledBox $isDesktopLayout={isDesktopLayout}>
            <StyledSvg
                as={motion.svg}
                animate={animationProps}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="circlePath"
                    d="M100,20 a80,80 0 1,0 0,160 a80,80 0 1,0 0,-160"
                />

                <text fill="#fff">
                    <textPath
                        xlinkHref="#circlePath"
                        startOffset="50%"
                        textAnchor="middle"
                        letterSpacing={'5px'}
                        wordSpacing={'10px'}
                        style={{ fontSize: '20px' }}
                    >
                        Since 2018 Since 2018
                    </textPath>
                </text>
            </StyledSvg>
        </StyledBox>
    )
}
