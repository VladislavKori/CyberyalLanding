
// libs
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import Link from "next/link";

// utils
import apiClient from "@/api/apiClient";

// images 
import BrilliantImg from '@/public/hero/brilliant.png';
import TwitterLogo from '@/public/hero/TwitterLogo.svg';
import FacebookLogo from '@/public/hero/FacebookLogo.svg';
import ShareLogo from '@/public/hero/ShareLogo.svg';
import CubokIcon from '@/public/hero/cubok.svg';
import CloseIcon from '@/public/hero/close.svg';
import SocialLink from "../UI/SocialLink";

// data
import { socials } from "@/data/socials";
import Button from "../UI/Button";

// animation
import { smoothFromBottom, smoothFromLeft, smoothFromTop, smoothShow } from "@/data/animations";

function Hero() {
  const [notifyIsOpen, setNotifyOpen] = useState<boolean>(false);

  // check cookie previos page load
  useEffect(() => {
    const name = "notifyIsClosed"
    var match = Object.fromEntries(document.cookie.split('; ').map(v => v.split(/=(.*)/s).map(decodeURIComponent)))
    if (match.hasOwnProperty("notifyIsClosed") && match.notifyIsClosed) {
      setNotifyOpen(false)
    } else {
      setNotifyOpen(true)
    }
  }, [])

  // handler for close notification, also it set cookie
  const closeNotifyHandler = () => {
    document.cookie = "notifyIsClosed=true";
    setNotifyOpen(false)
  }

  return (
    <div className="hero">
      {notifyIsOpen ? (
        <motion.div {...smoothFromTop(1)} className="hero__notify">
          <div className="hero__notify-inner">
            <CubokIcon className="hero__notify-icon" />
            <div className="hero__notify-texts">
              <h2 className="hero__notify-title">
                Register for your welcome tournament right now
              </h2>
              <p className="hero__notify-subtitle">
                Join us now and be the first to know about new tournaments! Play
                and reach new heights with our platform.
              </p>
            </div>
            <button className="hero__notify-close" onClick={closeNotifyHandler}>
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      ) : null}

      <div className="hero__content">
        <div className="hero__left">
          <motion.h1 {...smoothFromBottom(0.8)} className="hero__title">
            Our mission
          </motion.h1>
          <motion.p
            {...smoothFromBottom(0.8, 0.3)}
            className="hero__text hero__subtitle"
          >
            is to give an opportunity to affordable monetization in gaming
            industry, available to everyone. We are changing the perception of
            gaming from a futile pastime, attracting new talent to eSports, and
            helping individuals unleash their potential who have not yet found
            their calling in other areas.
          </motion.p>
          <motion.div {...smoothFromBottom(0.8, 0.5)}>
            <Button className="hero__button" />
          </motion.div>
        </div>
        <motion.div {...smoothShow(0.8)} className="hero__right">
          <Image src={BrilliantImg} alt="BrilliantImg" />
        </motion.div>
      </div>

      <div className="hero__links">
        <motion.p {...smoothFromLeft(1)} className="hero__text">
          Compete in 1vs1 ranked matches with players all over the world
        </motion.p>
        <ul className="hero__link-list">
          <motion.div {...smoothFromLeft(0.5, 0.4)}>
            <SocialLink
              link={socials.filter((item) => item.title === "Twitter")[0].link}
              text="Tweet it"
              icon={TwitterLogo}
            />
          </motion.div>
          <motion.div {...smoothFromLeft(0.5, 0.2)}>
            <SocialLink
              link={socials.filter((item) => item.title === "Facebook")[0].link}
              text="Share it"
              icon={FacebookLogo}
            />
          </motion.div>
          <motion.div {...smoothFromLeft(0.5, 0)}>
            <SocialLink link="" text="Repost it" icon={ShareLogo} />
          </motion.div>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
