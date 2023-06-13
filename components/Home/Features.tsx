import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

// data
import { advantages } from '@/data/advantages';

// animations
import { smoothFromBottom } from '@/data/animations';

function Features() {
  return (
    <div className="features">

      <div className="features__online">
        <div className="features__counter">
          <span className="features__online-point"></span>
          <p className="features__online-text">1223 Players online</p>
        </div>
        <div className="features__right">
          <p className="features__text">“Already joined the world of esports on our Сyberyal Gaming Platform”</p>
        </div>
      </div>
      
      <div className="features__text-block">
        <motion.h1 {...smoothFromBottom(1)} className="features__title">Over 10,000 registrations in the first month! Experience the thrill of competition now</motion.h1>
        <motion.h1 {...smoothFromBottom(1)} className="features__subtitle">Sign up Today!</motion.h1>
        <span className="features__blur"></span>
      </div>

      <div className="features__list">
        {advantages.map((item, index) => (
          <motion.div {...smoothFromBottom(1, index / 5)} className="features__item" key={item.id}>
            <div className="features__icon-wrapper">
              {item.icon()}
            </div>
            <h2 className="features__item-title">{item.title}</h2>
            <p className="features__item-text">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features