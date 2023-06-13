
import React, { useState, Dispatch, SetStateAction, useEffect } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import PlusIcon from '../../public/affiliate/plus.svg';
import MinusIcon from '../../public/affiliate/minus.svg';

interface FAQItemProps {
    title: string
    text: string
    index: number
    active: boolean
    changeActiveRow: (index: null | number) => void;
}

function FAQItem({ title, text, active, changeActiveRow, index }: FAQItemProps) {
    
    const openHandler = () => {
        if (active) { changeActiveRow(null) } else { changeActiveRow(index) }
    }

    return (
        <div className="faq__item">
            <header className="faq__item-header">
                <h2 className="faq__item-title" onClick={() => openHandler()}>{title}</h2>
                <button onClick={() => openHandler()} className="faq__item-btn">
                    {!active ? (
                        <PlusIcon />
                    ) : (
                        <MinusIcon />
                    )}

                </button>
            </header>
            {active ? (
                <div
                    className='faq__item-body'
                >
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
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