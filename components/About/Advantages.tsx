import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

// components
import Board from "@/components/Elements/Board";

// data
import { advantages } from '@/data/advantages';

// animations
import { smoothFromBottom } from '@/data/animations';

function Advantages() {
  return (
    <div className="advantages">
      <Board
        overtitle="A little about the possibilities"
        title="Mechanics"
        text="Elevate your gaming experience with robust mechanics designed for competitive play and skill improvement. Compete with others, sharpen your gaming abilities, and embrace the thrill of growth."
      />

      <div className="advantages__container">
        <div className="advantages__info">
          {advantages.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div {...smoothFromBottom(0.5, 0.2 + index / 10)} className="advantages__block">
                {item.icon()}
                <h1 className="advantages__title">{item.title}</h1>
                <p className="advantages__text">{item.text}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        <motion.div {...smoothFromBottom(0.5, 0)} className="advantages__image"></motion.div>
      </div>
    </div>
  );
}

export default Advantages