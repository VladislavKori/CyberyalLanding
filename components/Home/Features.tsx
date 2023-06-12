import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

// components
import Board from "../Board";

// data
import { features } from '@/data/features';

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
        <h1 className="features__title">Over 10,000 registrations in the first month! Experience the thrill of competition now</h1>
        <h1 className="features__subtitle">Sign up Today!</h1>
        <span className="features__blur"></span>
      </div>

      <div className="features__list">
        {features.map(item => (
          <div className="features__item" key={item.id}>
            <div className="features__icon-wrapper">
              {item.icon()}
            </div>
            <h2 className="features__item-title">{item.title}</h2>
            <p className="features__item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features