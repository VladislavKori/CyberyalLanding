import React, { useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import LinkedinIcon from '@/public/team/linkedin.svg';
import CrunchBaseIcon from "@/public/socials/Crunchbase.svg";
import TelegramIcon from "@/public/socials/Telegram.svg";
import { members, commonLinkedin } from "@/data/team";
import SliderArrow from "@/public/assets/SliderArrow.svg";

// images
import StarIcon from '@/public/assets/star.svg';

// data 
import { comments } from "@/data/comments";

// for sliders
const breakpoints = {
    320: {
        slidesPerView: 1.3,
        spaceBetween: 24,
    },
    740: {
        slidesPerView: 2.2,
        spaceBetween: 20,
    },
    815: {
        slidesPerView: 2.5,
        spaceBetween: 24,
    },
    1050: {
        slidesPerView: 2.5,
        spaceBetween: 30,
    },
    1350: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};

export default function Comments() {

    console.log(Array(5).fill(0))
    return (
        <div className="comments">
            <h1 className="comments__title">Learn how gamers use Cyberyal Platform</h1>
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
                className="comments__slider"
            >
                {comments
                    .map((comment, index) => (
                        <React.Fragment key={index}>
                            <SwiperSlide className="comments__slide">
                                <div className="comments__stars">
                                    {Array(5).fill(0).map(item => (<StarIcon className="comments__star" />))}
                                </div>
                                <h2 className="comments__slide-title">{comment.title}</h2>
                                <p className="comments__slide-text">{comment.text}</p>
                                <div className="comments__user">
                                    <div className="comments__avatar">
                                        <Image src={comment.user.avatar} width="100" height="100" alt="avatar" />
                                    </div>
                                    <div className="comments__userinfo">
                                        <h3 className="comments__name">{comment.user.name}</h3>
                                        <p className="comments__status">{comment.user.status}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </React.Fragment>
                    ))}
            </Swiper>
            <div className="ourteam__slider-controllers">
                <button id="switch-prev" className="ourteam__switch">
                    <SliderArrow className="ourteam__arrow" />
                </button>
                <button id="switch-next" className="ourteam__switch">
                    <SliderArrow className="ourteam__arrow ourteam__arrow_reverse" />
                </button>
            </div>
        </div>
    );
}
