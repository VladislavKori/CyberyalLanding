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
            <div className="infoplate__img-container">
                <Image src={img} alt="img" />
            </div>
            <div className="infoplate__info">
                <h1 className="infoplate__title">{title}</h1>
                <p className="infoplate__text">{text}</p>
                <div className="infoplate__button">
                    <Button />
                </div>
                <div className="infoplate__links">
                    <SocialLink link="/" text="Tweet it" icon={TwitterLogo} />
                    <SocialLink link="/" text="Share it" icon={FacebookLogo} />
                    <SocialLink link="/" text="Repost it" icon={ShareLogo} />
                </div>
            </div>
        </div>
    )
}

export default InfoPlate