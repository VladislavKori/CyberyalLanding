import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Button from '../UI/Button'
import SocialLink from '../UI/SocialLink'

// icons
import TwitterLogo from '@/public/hero/TwitterLogo.svg';
import FacebookLogo from '@/public/hero/FacebookLogo.svg';
import ShareLogo from '@/public/hero/ShareLogo.svg';

// data
import { socials } from '@/data/socials'

// animations
import { smoothFromBottom, smoothShow } from '@/data/animations'

interface InfoPlateProps {
    title: string
    text: string
    reverse?: boolean,
    img: StaticImageData
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

function InfoPlate({ title, text, img, reverse = false }: InfoPlateProps) {
    return (
        <div 
            className="infoplate"
            style={reverse ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}}
        >
            <motion.div {...smoothShow(1)} className="infoplate__img-container">
                <Image src={img} alt="img" />
            </motion.div>
            <div className="infoplate__info">
                <motion.h1 {...smoothFromBottom(0.7)} className="infoplate__title">{title}</motion.h1>
                <motion.p {...smoothFromBottom(0.7, 0.2)} className="infoplate__text">{text}</motion.p>
                <motion.div {...smoothFromBottom(0.7, 0.4)} className="infoplate__button">
                    <Button />
                </motion.div>
                <motion.div {...smoothFromBottom(0.7, 0.5)} className="infoplate__links">
                    <SocialLink link={socials.filter(item => item.title === "Twitter" )[0].link} text="Tweet it" icon={TwitterLogo} />
                    <SocialLink link={socials.filter(item => item.title === "Facebook" )[0].link} text="Share it" icon={FacebookLogo} />
                    <SocialLink link="/" text="Repost it" icon={ShareLogo} />
                </motion.div>
            </div>
        </div>
    )
}

export default InfoPlate