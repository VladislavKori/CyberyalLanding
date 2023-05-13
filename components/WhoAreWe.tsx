import React from 'react'
import Board from './Board'
import InfoPlate from './InfoPlate'
import Image from 'next/image'

import CupIcon from '@/public/assets/CupIcon.svg'
import RoomImg from "@/public/assets/room.png";
import AccountIcon from "@/public/assets/account.svg";
import marker from "../public/assets/marker.svg";

import UserPageImg from "@/public/assets/Страница пользователя.png";
import BigPict from '@/public/assets/1vs1 eng.png';

import { motion } from "framer-motion";

const benefitsList = [
  {
    text: "Affordable earnings via tournaments (with your or with on the platform existing teammates), educational sessions, if you have enough experience to teach and coach",
  },
  {
    text: "To get some new experience and knowledge in interested game",
  },
  {
    text: "To connect and communicate with your favorite blogger or streamer",
  },
  {
    text: "To try a new opportunity of a gameplay",
  },
  {
    text: "Security and quality support",
  },
];

function WhoAreWe() {
  return (
    <div className="whoarewe">
      <div className="whoarewe__background"></div>
      <div className="content">
        <div className="whoarewe__inside">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.4,
              delay: 0.2,
            }}
            className="board_gamer"
          >
            <div className="board_gamer_gamepad"></div>
            <div>
              <h1 className="board__title" style={{ marginBottom: "30px" }}>
                Gamer, benefit for U
              </h1>
              <div className="board_gamer_text">
                {benefitsList.map((el) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      marginBottom: "15px",
                      gap: "10px",
                    }}
                  >
                    <Image src={marker} width={8} height={8} alt={""} />
                    <p style={{ opacity: "0.5" }}>{el.text}</p>
                  </div>
                ))}
              </div>
              <p
                style={{
                  color: " #288BFF",
                  fontWeight: "500",
                  fontSize: "18px",
                  marginTop: "40px",
                }}
              >
                We're waiting just you and we promise - your gaming experience
                will change forever.
              </p>
            </div>
          </motion.div>

          <InfoPlate
            icon={CupIcon}
            title="More about tournaments"
            text={`The "Tournament" feature allows users of our site to create their own tournaments of any size and format. With this feature you can create 1v1, 5v5 or even 1v100 tournaments by choosing from our wide list of supported games.
            With this feature, you can participate in tournaments that other players participate in and win prize money. All tournaments are held using a secure payment system, which ensures the safety of your financial transactions.
            In addition, you can customize various tournament settings, such as game rules, prize pool, tournament duration, and more. You can choose any game mode you want to use in your tournament.
            Thus, the "Create a Tournament" feature is the perfect tool for those who want to enjoy competitive play at a high level and earn some money in the process.`}
            img={BigPict}
            imgClassName="whoarewe__img1 whoarewe__img_blue"
          />

          <InfoPlate
            icon={AccountIcon}
            direction="right"
            title="Personal account"
            text={`The user's personal account is a personal account on the platform, which is designed to manage their personal data and activities on the site. 
            Usually on the profile page, the account owner can change their own nickname, banner, avatar and other data. Also, the account owner can add links to their social networks such as Facebook, Discord, Twitch, etc. to share their activities with friends and followers.
            In addition, the account owner can list their favorite game and showcase their stream on the Twitch platform to show off their gaming skills and share their experience with their viewers. Also on the profile page, the user's rating on the site can be indicated, which displays the level of activity and interaction with other participants.`}
            img={UserPageImg}
            imgClassName="whoarewe__img2 whoarewe__img_pink"
          />
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe