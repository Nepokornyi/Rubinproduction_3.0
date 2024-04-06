export const revealContainerVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0 },
}
export const revealColorBlockVariants = {
    hidden: { left: 0 },
    visible: { left: '100%' },
}

export const getRevealContainerTransition = (delay = 0) => ({
    duration: 0.65,
    delay,
})
export const getRevealColorBlockTransition = (delay = 0) => ({
    duration: 0.65,
    delay,
})
