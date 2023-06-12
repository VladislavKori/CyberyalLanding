import GameController from "@/public/assets/GameController.svg";
import ArrowRight from "@/public/assets/ArrowRight.svg";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import close_modal from "@/public/assets/close_modal.svg";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import apiClient from "@/api/apiClient";
import { motion } from 'framer-motion'
import Link from "next/link";

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

function Hero({ modal_text, form_header, form_text, form_button }: any) {
  const [utmParams, setUtmParams] = useState<any>({});

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        const getParam = (param: any) => {
          const urlParams = new URL(window.location.toString()).searchParams;
          return urlParams.get(param) || "";
        };

        const utmSource = getParam("utm_source");
        const utmMedium = getParam("utm_medium");
        const utmCampaign = getParam("utm_campaign");
        const utmContent = getParam("utm_content");
        const utmTerm = getParam("utm_term");
        const utmSky = getParam("utm_sky");

        setUtmParams({
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_content: utmContent,
          utm_term: utmTerm,
          utm_sky: utmSky,
        });
      }
    };
  }, []);

  // console.log("utmParams", utmParams);

  const validationSchema = z.object({
    email: z.string().min(1, { message: "Please write your email" }).email({
      message: "You entered your email incorrectly",
    }),
    privacy: z.literal(true, {
      errorMap: () => ({ message: "You must accept Privacy Policy" }),
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  // const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
  //   // console.log(data);
  //   apiClient
  //     .post(`api/v1/cyberyal/set`, {
  //       utm: utmParams,
  //       email: data.email,
  //     })
  //     .then((response: any) => {
  //       setIsOpen(true);
  //     })
  //     .catch((error: any) => {
  //       console.log(error.message);
  //     });
  // };

  const [notifyIsOpen, setNotifyOpen] = useState<boolean>(false);

  useEffect(() => {
    const name = "notifyIsClosed"
    var match = Object.fromEntries(document.cookie.split('; ').map(v => v.split(/=(.*)/s).map(decodeURIComponent)))
    if (match.hasOwnProperty("notifyIsClosed") && match.notifyIsClosed) {
      setNotifyOpen(false)
    } else {
      setNotifyOpen(true)
    }
  }, [])

  const closeNotifyHandler = () => {
    document.cookie = "notifyIsClosed=true";
    setNotifyOpen(false)
  }

  return (
    <div className="hero">

      {notifyIsOpen ? (
        <div className="hero__notify">
          <div className="hero__notify-inner">
            <Image src={CubokIcon} alt="CubokIcon" />
            <div className="hero__notify-texts">
              <h2 className="hero__notify-title">Register for your welcome tournament right now</h2>
              <p className="hero__notify-subtitle">Join us now and be the first to know about new tournaments! Play and reach new heights with our platform.</p>
            </div>
            <button className="hero__notify-close" onClick={closeNotifyHandler}>
              <Image src={CloseIcon} alt="CloseIcon" />
            </button>
          </div>
        </div>
      ) : null}

      <div className="hero__content">
        <div className="hero__left">
          <h1 className="hero__title">Play competitive games and unlock rewards</h1>
          <p className="hero__text hero__subtitle">Boost your gaming on our platform, offering top games, a lively community, & skill growth. Join thrilling online contests & tackle exhilarating challenges!</p>
          <button className="hero__button">Create Cyberyal ID</button>
        </div>
        <div className="hero__right">
          <Image src={BrilliantImg} alt="BrilliantImg" />
        </div>
      </div>

      <div className="hero__links">
        <p className="hero__text">Compete in 1vs1 ranked matches with players all over the world</p>
        <ul className="hero__link-list">
          <SocialLink 
            link={socials.filter(item => item.title === "Twitter" )[0].link}
            text="Tweet it"
            icon={TwitterLogo}
          />
          <SocialLink
            link={socials.filter(item => item.title === "Facebook" )[0].link}
            text="Share it"
            icon={FacebookLogo}
          />
          <SocialLink link="" text="Repost it" icon={ShareLogo} />
        </ul>
      </div>
    </div>
  );
}

export default Hero;
