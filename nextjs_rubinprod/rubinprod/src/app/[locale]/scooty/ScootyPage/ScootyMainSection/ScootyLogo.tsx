'use client'
import React from 'react'
import { motion } from 'framer-motion'
import animation from '@/components/Header/components/config/configLogo'
import Image from 'next/image'
import logo from '@/assets/img/scooty/ScootyLogo.svg'

export const ScootyLogo = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
                variants={animation.container}
                initial="initial"
                animate="animate"
            >
                <Image
                    src={logo}
                    alt="scooty logo"
                    className="w-56 md:w-64 lg:w-auto"
                />
            </motion.div>
        </div>
    )
}
