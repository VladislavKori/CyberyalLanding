import React, { useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import LinkedinIcon from '@/public/team/linkedin.svg';
import CrunchBaseIcon from "@/public/socials/Crunchbase.svg";
import TelegramIcon from "@/public/socials/telegram.svg";
import { members, commonLinkedin } from "@/data/team";
import SliderArrow from "@/public/assets/SliderArrow.svg";

// for slider
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
          <Image
            src={LinkedinIcon}
            alt="linkedin"
            className="ourteam__linkedin"
          />
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
          // .filter(
          //   (membr) => membr.name !== process.env.NEXT_PUBLIC_ALEXANDER_CARD
          // )
          .map((member, index) => (
            <React.Fragment key={index}>
              <SwiperSlide className="ourteam__slide">
                <div className="ourteam__avatar">
                  <Image src={member.photo} alt={member.name} />
                </div>
                <h2 className="ourteam__name">{member.name}</h2>
                <h2 className="ourteam__post">{member.post}</h2>
                <p className="ourteam__description">{member.description}</p>

                <a
                  className="ourteam__link"
                  href={member.linkedin}
                  target="_blank"
                >
                  <Image
                    src={
                      member.name === "Roma Kogan"
                        ? TelegramIcon
                        : member.name === "Yexela Sirin"
                        ? CrunchBaseIcon
                        : LinkedinIcon
                    }
                    alt="linkedin"
                    className="ourteam__linkedin"
                  />
                </a>
              </SwiperSlide>
            </React.Fragment>
          ))}
      </Swiper>
      <div className="ourteam__slider-controllers">
        <button id="switch-prev" className="ourteam__switch">
          <Image src={SliderArrow} alt="arrow" className="ourteam__arrow" />
        </button>
        <button id="switch-next" className="ourteam__switch">
          <Image
            src={SliderArrow}
            alt="arrow"
            className="ourteam__arrow ourteam__arrow_reverse"
          />
        </button>
      </div>
    </div>
  );
}
