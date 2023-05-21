import React, { useState } from 'react'
import { motion } from "framer-motion";
import { faqdata } from '@/data/faq'
import FAQItem from './FAQItem'

const animation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
    }
}

function FAQ() {
    return (
        <div className="faq">
            <div className="affiliate-container">
                <motion.div {...animation} className="faq__inside">
                    <h1 className="faq__title">Frequently asked questions</h1>
                    {/* <p className="faq__subtitle">Everything you need to know about the product and billing.</p> */}

                    {faqdata.map((item, index) => (
                        <React.Fragment key={index}>
                            <FAQItem {...item} />
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default FAQ