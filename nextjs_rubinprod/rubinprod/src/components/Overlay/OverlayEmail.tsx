import React, { ReactNode } from 'react'
import { Overlay } from './Overlay'
import { motion } from 'framer-motion'
import { Text } from '../Text/Text'
import icoMail from '@/assets/img/icoMail.svg'
import Image from 'next/image'
import {
    containerVariants,
    linkVariants,
} from '../Header/components/MobileMenu/config/configDropdown'

type OverlayEmailProps = {
    open: boolean
    onClose: () => void
}

const lines = [0, 1, 2]

const AnimationBox = ({ children }: { children: ReactNode }) => (
    <motion.div className="overflow-hidden flex justify-center items-center">
        {children}
    </motion.div>
)

export const OverlayEmail = ({ open, onClose }: OverlayEmailProps) => {
    const renderButton = (
        <div
            className="cursor-pointer h-2 flex justify-center flex-col"
            onClick={() => onClose()}
        >
            {lines.map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        className="w-8 h-1 bg-white"
                        style={{
                            height: 1,
                        }}
                    />
                )
            })}
        </div>
    )

    return (
        <Overlay open={open} button={renderButton} zIndex="z-50">
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
            >
                <AnimationBox>
                    <motion.div variants={linkVariants}>
                        <Image src={icoMail} alt="email icon" />
                    </motion.div>
                </AnimationBox>
                <AnimationBox>
                    <motion.div variants={linkVariants}>
                        <Text
                            variant="h3"
                            textTransform="uppercase"
                            textAlign="text-center"
                            fontWeight="font-semibold"
                        >
                            Thanks you for your inquiry!
                        </Text>
                    </motion.div>
                </AnimationBox>
                <AnimationBox>
                    <motion.div variants={linkVariants}>
                        <Text
                            variant="p"
                            textAlign="text-center"
                            padding="px-6 py-2"
                        >
                            We have received your message. Our team will get
                            back to you shortly.
                        </Text>
                    </motion.div>
                </AnimationBox>
            </motion.div>
        </Overlay>
    )
}
