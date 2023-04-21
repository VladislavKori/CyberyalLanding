import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

// components
import Board from "./Board";

// imgs
import FeaturesImg from "@/public/assets/Features.webp";
import BarbellIcon from "@/public/assets/BarbellIcon.svg";
import CupIcon from "@/public/assets/CupIcon.svg";
import HandshakeIcon from "@/public/assets/HandshakeIcon.svg";
import UsersIcon from "@/public/assets/UsersIcon.svg";

const featuresContent = [
  {
    icon: UsersIcon,
    title: "PvP challenges",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: CupIcon,
    title: "Tournaments",
    text: "Start a championship or join an existing one. Challenge your friends or strangers to prove that you are the most skilled player among all.",
  },
  {
    icon: HandshakeIcon,
    title: "Boosting",
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: BarbellIcon,
    title: "Coaching",
    text: "Improves skills, overcomes plateaus, enhances time management & mindset, boosts teamwork, provides game knowledge, and offers e-sports career guidance",
  },
];

function Features() {
  return (
    <div className="features">
      <Board
        overtitle="A little about the possibilities"
        title="Mechanics"
        text="Daily personalized fitness, sleep, and recovery data delivered to you in real time with Untitled. We’re changing how you move."
      />

      <div className="features__container">
        <div className="features__info">
          {featuresContent.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.2 + index / 10,
                }}
                className="features__text-block"
              >
                <Image
                  className="features__icon"
                  src={item.icon}
                  alt={item.title + "-icon"}
                />
                <h1 className="features__title">{item.title}</h1>
                <p className="features__text">{item.text}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          style={{
            background: `url('${FeaturesImg.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "465px",
          }}
          className="features__img-container"
        ></motion.div>
      </div>
    </div>
  );
}

export default Features