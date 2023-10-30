// libs
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Modal from "react-modal";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// images
import BrilliantImg from "@/public/hero/brilliant.png";
import TwitterLogo from "@/public/hero/TwitterLogo.svg";
import FacebookLogo from "@/public/hero/FacebookLogo.svg";
import ShareLogo from "@/public/hero/ShareLogo.svg";
import CubokIcon from "@/public/hero/cubok.svg";
import CloseIcon from "@/public/hero/close.svg";
import SocialLink from "../UI/SocialLink";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

// data
import { socials } from "@/data/socials";
import Button from "../UI/Button";

// animation
import {
  smoothFromBottom,
  smoothFromLeft,
  smoothFromTop,
  smoothShow,
} from "@/data/animations";

// components
import FormForCreateId from "../Elements/FormForCreateId";
import MarkdownContainer from "../Elements/MarkDownContainer";

function Hero() {
  const [notifyIsOpen, setNotifyOpen] = useState<boolean>(false);
  const [texts, setTexts] = useState({
    notification_text: "Join us now and be the first to know about new tournaments! Play and reach new heights with our platform.",
    notification_title: "Register for your welcome tournament right now",
    subtitle: `- Cyberyal provides an easy and affordable way to monetize the gaming
- Attract new talents to eSports
- Make eSports available to everyone 
- Change the perception of gaming from a futile pastime
- Help to unleash potential to individuals who have not yet found their calling in other areas.`,
    title: "Play competitive games and unlock rewards"
  })

  // check cookie previos page load
  useEffect(() => {
    const name = "notifyIsClosed";
    var match = Object.fromEntries(
      document.cookie
        .split("; ")
        .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
    );
    if (match.hasOwnProperty("notifyIsClosed") && match.notifyIsClosed) {
      setNotifyOpen(false);
    } else {
      setNotifyOpen(true);
    }
  }, []);

  // handler for close notification, also it set cookie
  const closeNotifyHandler = () => {
    document.cookie = "notifyIsClosed=true";
    setNotifyOpen(false);
  };

  const [copySuccess, setCopySuccess] = useState("");
  // const textAreaRef = useRef(null);

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    setCopySuccess("Copied");
    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
  }

  return (
    <div className="hero">
      {notifyIsOpen ? (
        <motion.div {...smoothFromTop(1)} className="hero__notify">
          <div className="hero__notify-inner">
            <CubokIcon className="hero__notify-icon" />
            <div className="hero__notify-texts">
              <h2 className="hero__notify-title">{texts.notification_title}</h2>
              <p className="hero__notify-subtitle">{texts.notification_text}</p>
            </div>
            <button className="hero__notify-close" onClick={closeNotifyHandler}>
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      ) : null}

      <div className="hero__content">
        <div className="hero__left">
          <motion.h1 {...smoothFromBottom(0.8)} className="hero__title">{texts.title}</motion.h1>
          <motion.div
            {...smoothFromBottom(0.8, 0.3)}
            className="hero__text hero__subtitle"
          >
            {texts.subtitle ? <MarkdownContainer text={texts.subtitle} /> : null}
          </motion.div>
        </div>
        <motion.div {...smoothShow(0.8)} className="hero__right">
          <FormForCreateId />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
