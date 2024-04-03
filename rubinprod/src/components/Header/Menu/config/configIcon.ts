const container = {
    width: 45,
    height: 30,
}

const lines = {
    size: 1.5,
}

const animations = {
    container: {
        initial: {
            y: 20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    },
    lines: [
        {
            initial: {
                y: 0,
            },
            opened: {
                y: (container.height - lines.size) / 2,
            },
        },
        {
            initial: {
                y: (container.height - lines.size) / 2,
                height: lines.size,
                opacity: 1,
            },
            opened: {
                height: 0,
                opacity: 0,
            },
        },
        {
            initial: { y: container.height - lines.size },
            opened: { y: (container.height - lines.size) / 2 },
        },
    ],
}

export default {
    container,
    lines,
    animations,
}
