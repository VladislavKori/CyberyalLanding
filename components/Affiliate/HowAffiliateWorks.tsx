import React from 'react'
import { motion } from 'framer-motion'

import { howaffiliateworks } from '@/data/howaffiliateworks'

const animation = (delay: number) => {
    return {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: delay / 10
        },
    }
}

function HowAffiliateWorks() {
  return (
    <div className="affiliate-container">
      <div className="haw">
        <h1 className="haw__title">How our affiliate campaign works</h1>
        <ul className="haw__list">
          {howaffiliateworks.map((item) => (
            <React.Fragment key={item.id}>
              <motion.li {...animation(item.id)} className="haw__item">
                <div className="haw__circle">
                  <h1 className="haw__circle-title">{item.id}</h1>
                </div>
                <h1 className="haw__item-title">{item.title}</h1>
                <p className="haw__item-text">{item.text}</p>
              </motion.li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HowAffiliateWorks