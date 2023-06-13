import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/UI/Button'

// images
import AffiliateImage from '@/public/affiliate/homepage.png';

// animations
import { smoothFromBottom } from '@/data/animations'

function AboutAffiliate() {
    return (
        <>
            <motion.div {...smoothFromBottom(0.6, 0.2)} className="aboutaffiliate">
                <div className="aboutaffiliate__textblock">
                    <h1 className="aboutaffiliate__title">Cyberyal Affliate Program</h1>
                    <p className="aboutaffiliate__text">Embrace the opportunity to earn with Cyberyal Gaming Platform's affiliate program, designed to empower you with valuable resources and tools to effectively promote the platform. As you drive traffic to Cyberyal, you'll reap the benefits of impressive conversion rates and substantial payouts. With our comprehensive support, including eye-catching banners, compelling promotional materials, and your unique referral link, you'll be well-equipped to engage your audience and monetize your influence. So, join the Cyberyal success story and turn your passion for gaming into a lucrative venture, all while expanding the platform's thriving community.</p>
                        <div className="aboutaffiliate__button">
                            <Button />
                        </div>
                </div>
                <div className="aboutaffiliate__imgblock">
                    <div
                        className="aboutaffiliate__imgblock_inner"
                        style={{
                            background: `url('${AffiliateImage.src}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    />
                </div>
            </motion.div>
            <div
                className="aboutaffiliate__mobile-imgblcok"
                style={{
                    background: `url('${AffiliateImage.src}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            />
        </>
    )
}

export default AboutAffiliate