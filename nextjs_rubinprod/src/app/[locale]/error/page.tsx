'use client'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import animation from '@/components/Header/components/config/configLogo'
import { LinkTransition } from '@/components/LinkTransition/LinkTransition'
import Image from 'next/image'
import logoRed from '@/assets/img/RubinLetter.svg'
import { motion } from 'framer-motion'
import { Text } from '@/components/Text/Text'

export default function ErrorPage() {
    return (
        <div className="animation-container">
            <FlexContainer minHeight="min-h-screen" center>
                <header
                    className={`flex justify-between items-center w-full md:w-3/4 fixed md:absolute top-0 left-1/2 transform -translate-x-1/2 p-4 z-50 bg-[#0c0c0c] md:bg-transparent transition-colors`}
                >
                    <motion.div
                        variants={animation.container}
                        initial="initial"
                        animate="animate"
                    >
                        <LinkTransition href="/">
                            <Image
                                src={logoRed}
                                alt="Rubinproduction Logo"
                                className="w-12 md:w-24"
                            />
                        </LinkTransition>
                    </motion.div>
                </header>
                <Text variant="h3">Nastala chyba</Text>
            </FlexContainer>
        </div>
    )
}
