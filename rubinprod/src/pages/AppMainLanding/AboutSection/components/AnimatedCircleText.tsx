import { motion } from 'framer-motion'

import styled from 'styled-components'
import { Box } from '../../../../components/layout/Box'

// TODO: Add proper position later, when
const StyledBox = styled(Box)`
    position: absolute;
    top: 15px;
    right: -62.5px;
    z-index: -1;
    @media (min-width: 615px) {
        top: auto;
        right: auto;
        bottom: -150px;
        left: -62.5px;
    }
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
    return (
        <StyledBox>
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
