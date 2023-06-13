import React, { useEffect, useState } from 'react'
import ArrowLeft from '@/public/common/ArrowLeft.svg';
import Image from 'next/image';

function ScrollToTop() {

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (window.pageYOffset > 1000) {
                setShowArrow(true)
            } else {
                setShowArrow(false)
            }
        })
    })

    const scrollHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <button
            className={showArrow ? "scrollToTop" : "scrollToTop scrollToTop_hidden"}
            onClick={scrollHandler}
        >
            <ArrowLeft />
        </button>
    )
}

export default ScrollToTop