import { Variants } from 'framer-motion'

const loadingVariants: Variants = {
    animate: {
        x: ['-100%', '-25%', '0%', '-50%', '-100%'],
        transition: {
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
}

const dotVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        },
    },
    hidden: {
        opacity: 0,
    },
}

export { loadingVariants, dotVariants }
