import React from 'react'
import Image from 'next/image'
import Button from '../UI/Button'
import { motion } from 'framer-motion';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// icons 
import SliderArrow from "@/public/assets/SliderArrow.svg";

// data
import { games } from '@/data/games'

// animations
import { smoothFromBottom, smoothShow } from '@/data/animations';

// for slider 
const breakpoints = {
    320: {
        slidesPerView: 1.2,
        spaceBetween: 24,
    },
    740: {
        slidesPerView: 1.8,
        spaceBetween: 20,
    },
    815: {
        slidesPerView: 2,
        spaceBetween: 24,
    },
};

function Games() {
    return (
        <>
            <div className="games">
                <h1 className="games__title">Play your favorite games</h1>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: "#switch-next",
                        prevEl: "#switch-prev",
                    }}
                    breakpoints={breakpoints}
                    modules={[Navigation]}
                    className="games__slider"
                >
                    {games.map((game, index) => (
                            <React.Fragment key={game.id}>
                                <SwiperSlide className="games__slide">
                                    <Image src={game.img} alt="game" />
                                </SwiperSlide>
                            </React.Fragment>
                        ))}
                </Swiper>
                <div className="games__slider-controllers">
                    <button id="switch-prev" className="games__switch">
                        <SliderArrow className="games__arrow" />
                    </button>
                    <button id="switch-next" className="games__switch">
                        <SliderArrow className="games__arrow games__arrow_reverse" />
                    </button>
                </div>

                <div className="games__list">
                    {games.map((item, index) => (
                        <motion.div {...smoothShow(0.8, index / 5)} className="games__item" key={`${index}`}>
                            <Image src={item.img} alt="game" />
                        </motion.div>
                    ))}
                </div>
                <div className="games__proposal">
                    <p className="games__proposal-text">Find others to play with in seconds! You’ll get matched with equally ranked and like-minded gamers to improve your skill and learn from the best.</p>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Games