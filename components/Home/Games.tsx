import React from 'react'
import Image from 'next/image'
import Button from '../UI/Button'
import {motion} from 'framer-motion';

// data
import { games } from '@/data/games'

// animations
import { smoothFromBottom, smoothShow } from '@/data/animations';

function Games() {
  return (
    <div className="games">
        <h1 className="games__title">Play your favorite games</h1>
        <div className="games__list">
            {games.map((item, index) => (
                <motion.div {...smoothShow(0.8, index / 5)} className="games__item" key={item.id}>
                    <Image src={item.img} alt="game" />
                </motion.div>
            ))}
        </div>
        <div className="games__proposal">
            <p className="games__proposal-text">Find others to play with in seconds! You’ll get matched with equally ranked and like-minded gamers to improve your skill and learn from the best.</p>
            <Button />
        </div>
    </div>
  )
}

export default Games