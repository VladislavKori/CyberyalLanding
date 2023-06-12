import React from 'react'
import Image from 'next/image'
import Button from '../UI/Button'

// data
import { games } from '@/data/games'

function Games() {
  return (
    <div className="games">
        <h1 className="games__title">Play your favorite games</h1>
        <div className="games__list">
            {games.map(item => (
                <div className="games__item" key={item.id}>
                    <Image src={item.img} alt="game" />
                </div>
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