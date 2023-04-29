
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import PlusIcon from '../../public/affiliate/plus.svg';
import MinusIcon from '../../public/affiliate/minus.svg';

interface FAQItemProps {
    title: string
    text: string
}

function FAQItem({title, text}: FAQItemProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="faq__item">
            <header className="faq__item-header">
                <h2 className="faq__item-title" onClick={() => setIsOpen(!isOpen)}>{title}</h2>
                <button onClick={() => setIsOpen(!isOpen)} className="faq__item-btn">
                    {!isOpen ? (
                        <Image src={PlusIcon} alt="plus" />
                    ) : (
                        <Image src={MinusIcon} alt="minus" />
                    )}

                </button>
            </header>
            {isOpen ? (
                <div
                    className='faq__item-body'
                >
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1,  y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.1,
                        }}
                        className='faq__item-text'
                    >
                        {text}
                    </motion.p>
                </div>
            ) : null}
        </div>
    )
}

export default FAQItem