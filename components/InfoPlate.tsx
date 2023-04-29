import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

interface InfoPlateProps {
    children: JSX.Element
    icon?: string
    title: string
    text: string
    direction?: 'left' | 'right',
    buttonOn?: boolean
}

const animation = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.2,
    }
}

function InfoPlate({ children, icon, title, text, direction = 'left', buttonOn = false }: InfoPlateProps) {
    return (
        <>
            <motion.div
                {...animation}
                className={direction == 'left' ? "infoplate" : "infoplate infoplate__right"}
            >
                <div className="infoplate__textblock">
                    {icon ? (
                        <Image
                            src={icon}
                            className="infoplate__icon"
                            alt={title + '-icon'}
                        />
                    ) : null}
                    <h1 className="infoplate__title">{title}</h1>
                    <p className="infoplate__text">{text}</p>
                    {buttonOn ? (
                        <div className="infoplate__btn">
                            <Button />
                        </div>
                    ) : null}
                </div>
                <div className="infoplate__imgblock">
                    <div className={direction != "left" ? "infoplate__img" : "infoplate__img_right"}>
                        {children}
                    </div>
                </div>
            </motion.div>
            <div className="infoplate__mobile-imgblcok">
                {children}
            </div>
        </>
    )
}

export default InfoPlate