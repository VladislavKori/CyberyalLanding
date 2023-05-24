import React, { useEffect, useState } from 'react'
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

    const [faqrows, setFaqrows] = useState<Array<any>>(faqdata.map(item => {
        const newObj = {...item, active: false}
        return newObj;
    }))

    function changeActiveRow(id: number | null) {
        if (null) {
            setFaqrows(faqrows.map(item => {item.active = false; return item}))
        } else {
            setFaqrows(faqrows.map(item => {item.active = false; return item}))
            setFaqrows(faqrows.map((item, index) => {
                if (index == id) {
                    item.active = true;
                    return item
                } 
                return item;
            }))
        }
    }

    return (
        <div className="faq">
            <div className="affiliate-container">
                <motion.div {...animation} className="faq__inside">
                    <h1 className="faq__title">Frequently asked questions</h1>
                    {/* <p className="faq__subtitle">Everything you need to know about the product and billing.</p> */}

                    {faqrows.map((item, index) => (
                        <React.Fragment key={index}>
                            <FAQItem {...item} index={index} changeActiveRow={changeActiveRow} />
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default FAQ