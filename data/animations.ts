const smoothShow = (duration = 1, delay = 0) => {
    return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay,
        }
    }
}

const smoothFromTop = (duration = 1, delay = 0) => {
    return {
        initial: { opacity: 0, y: -20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay,
        }
    }
}

const smoothFromBottom = (duration = 1, delay = 0) => {
    return {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay,
        }
    }
}

const smoothFromLeft = (duration = 1, delay = 0) => {
    return {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay,
        }
    }
}


export {
    smoothShow,
    smoothFromTop,
    smoothFromBottom,
    smoothFromLeft
}