'use client'
import { Box } from '@/components/Box/Box'
import React from 'react'
import { motion } from 'framer-motion'

const animationProps = {
    rotate: 360,
    transition: {
        repeat: Infinity,
        duration: 5,
        ease: 'linear',
    },
}

const test =
    'top-4 md:top-auto -right-16 md:right-auto bottom-auto md:-bottom-40 left-auto md:-left-16'

export const AboutCircleText = () => {
    return (
        <Box className="absolute md:-top-14 lg:-top-16 md:-left-12 z-[-1]">
            <motion.svg
                animate={animationProps}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-none w-28 h-28"
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
            </motion.svg>
        </Box>
    )
}
