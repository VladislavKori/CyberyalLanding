import React, { useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import LinkedinIcon from '@/public/socials/linkedin.svg';
import CrunchBaseIcon from "@/public/socials/Crunchbase.svg";
import TelegramIcon from "@/public/socials/Telegram.svg";
import { members, commonLinkedin } from "@/data/team";
import SliderArrow from "@/public/assets/SliderArrow.svg";

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
    slidesPerView: 3.2,
    spaceBetween: 30,
  },
  1350: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

export default function OurTeam() {
  return (
    <div className="ourteam">
      <header className="ourteam__header">
        <h2 className="ourteam__title">Our team</h2>
        <a className="ourteam__link" href={commonLinkedin} target="_blank">
          <LinkedinIcon className="ourteam__linkedin" />
        </a>
      </header>
      <Swiper
        slidesPerView={4}
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
        className="ourteam__slider"
      >
        {members
          .map((member, index) => {

            const isTg = member.hasOwnProperty('telegram');
            const isLinkedin = member.hasOwnProperty('linkedin');
            const isCrunchbase = member.hasOwnProperty('crunchbase')

            return (
              <React.Fragment key={index}>
                <SwiperSlide className="ourteam__slide">
                  <div className="ourteam__avatar">
                    <Image src={member.photo} alt={member.name} />
                  </div>
                  <h2 className="ourteam__name">{member.name}</h2>
                  <h2 className="ourteam__post">{member.post}</h2>
                  <p className="ourteam__description">{member.description}</p>

                  <div className="ourteam__links">
                    {isTg ? (<a className="ourteam__link" href={member.telegram} target="_blank"><TelegramIcon /></a>) : null}
                    {isLinkedin ? (<a className="ourteam__link" href={member.linkedin} target="_blank"><LinkedinIcon /></a>) : null}
                    {isCrunchbase ? (<a className="ourteam__link" href={member.crunchbase} target="_blank"><CrunchBaseIcon /></a>) : null}
                  </div>
                </SwiperSlide>
              </React.Fragment>
            )
          })}
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
