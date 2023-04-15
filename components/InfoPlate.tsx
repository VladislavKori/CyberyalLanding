import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface InfoPlateProps {
    children: JSX.Element
    icon: string
    title: string
    text: string
    direction?: 'left' | 'right'
}

function InfoPlate({ children, icon, title, text, direction = 'left' }: InfoPlateProps) {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.2,
                }}
                className={direction == 'left' ? "infoplate" : "infoplate infoplate__right"}
            >
                <div className="infoplate__textblock">
                    <Image
                        src={icon}
                        className="infoplate__icon"
                        alt={title + '-icon'}
                    />
                    <h1 className="infoplate__title">{title}</h1>
                    <p className="infoplate__text">{text}</p>
                </div>
                <div className="infoplate__imgblock">
                    {children}
                </div>
            </motion.div>
            <div className="infoplate__mobile-imgblcok">
                {children}
            </div>
        </>
    )
}

export default InfoPlate