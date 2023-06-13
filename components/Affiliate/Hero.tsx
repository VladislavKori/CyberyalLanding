import React from 'react'
import Image from 'next/image'
import Modal from "react-modal";
import { motion } from "framer-motion";

import ArrowRight from "../../public/assets/ArrowRight.svg";
import Button from '@/components/UI/Button';

const animation = (delay: number) => {
    return {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.2 + delay / 10,
        }
    }
}

function Hero() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="affiliate-hero"
            >
                <div className='affiliate-container'>
                    <div className="affiliate-hero__inside">
                        <motion.h1 {...animation(1)} className="affiliate-hero__title">Cyberyal Affilate program</motion.h1>
                        <motion.p {...animation(2)} className="affiliate-hero__subtitle">Earn commissions promoting product </motion.p>
                        <motion.div {...animation(3)} className="affiliate-hero__btn">
                            <Button />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Hero