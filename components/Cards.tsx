import React from 'react'
import Image from 'next/image'

import CubokIcon from '../public/assets/cubok.png'
import StudentIcon from '../public/assets/student.png'

const Cards = () => {
    return (
        <div className="cards">
            <div className="card card_purple">
                <div className="card__inner">
                    <h1 className="card__title">Tournament</h1>
                    <Image className="card__img" src={CubokIcon} alt={'cubok'} />
                    <p className="card__text">
                        You can create or participate in 1v1 tournaments, 5x5 or 1x100. Play for money and earn
                    </p>
                </div>
            </div>
            <div className="card card_pink">
                <div className="card__inner">
                    <h1 className="card__title">education and training</h1>
                    <Image className="card__img" src={StudentIcon} alt={'cubok'} />
                    <p className="card__text">
                        Teach game chips to others, make money on it or learn from the best yourself and develop
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards;