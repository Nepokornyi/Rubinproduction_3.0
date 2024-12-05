import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { motion } from 'framer-motion'
import React from 'react'

type OverlaySocialsProps = {
    variants: any
}

export const OverlaySocials = ({ variants }: OverlaySocialsProps) => {
    return (
        <FlexContainer
            alignItems="items-center"
            justifyContent="justify-evenly"
            className="h-full"
        >
            <motion.a
                href="https://www.instagram.com/who1snick"
                variants={variants}
            >
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Instagram
                </Text>
            </motion.a>
            <motion.a
                href="https://www.behance.net/who1snick"
                variants={variants}
            >
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Behance
                </Text>
            </motion.a>
            <motion.a
                href="https://www.youtube.com/@who1snick466/videos"
                variants={variants}
            >
                <Text
                    variant="socials"
                    className="text-[#6e6e6e] hover:text-white transition-colors"
                >
                    Youtube
                </Text>
            </motion.a>
        </FlexContainer>
    )
}
