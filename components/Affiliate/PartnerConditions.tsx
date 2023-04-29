import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import ArrowRight from "@/public/assets/ArrowRight.svg";
import Required from '../Required';
import RequiredCard from '../Required/RequiredCard';

import { partnerConditions } from '@/data/partner-conditions';
import Button from '../Button';

const animation = (delay: number) => {
    return {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: delay
        },
    }
}

function PartnerConditions() {
    return (
        <div className="partnerconditions">
            <div className="affiliate-container">
                <div className="required">
                    <div className="required__text partnerconditions__info">
                        <motion.h2 {...animation(0.4)} className="required__main_header partnerconditions__title">
                            What is required for beginners to start in an affiliate program?
                        </motion.h2>
                        <motion.p {...animation(0.6)} className="required__main_text partnerconditions__text">
                            To become a successful partner, you'll need to have a strong online presence, such as a blog, social media account, or website, where you can effectively promote services. Engage with your audience by creating high-quality, relevant content that showcases the value and benefits of the offerings. Be consistent and authentic in your approach, and utilize marketing tools like banners, promotional materials, and your unique referral link. As you drive traffic and conversions, you'll not only help grow the brand but also earn commissions for your work.
                        </motion.p>

                        <motion.div {...animation(0.7)} className="partnerconditions__btn">
                            <Button />
                        </motion.div>
                    </div>
                    <div className="required__cards">
                        {partnerConditions.map((item, index) => (
                            <motion.div {...animation(index / 5)} className="required__card" key={index}>
                                <RequiredCard {...item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerConditions