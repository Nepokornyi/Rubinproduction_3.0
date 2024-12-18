const containerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
        },
    },
}

const linkVariants = {
    initial: {
        y: '30vh',
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0, 0.55, 0.45, 1],
        },
    },
}

export { containerVariants, linkVariants }
