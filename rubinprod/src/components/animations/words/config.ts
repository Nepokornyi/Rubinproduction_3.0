export const animationForContainerVariants = {
    rest: { transition: { staggerChildren: 0.009 } },
    hover: { transition: { staggerChildren: 0.009 } },
};

export const animationForLetterOnHover = {
    rest: { y: 0 },
    hover: {
        y: -25,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: 'tween',
        },
    },
};

export const animationForLetterOnRest = {
    rest: { y: 25 },
    hover: {
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: 'tween',
        },
    },
};