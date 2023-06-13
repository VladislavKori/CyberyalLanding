import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { socials } from "@/data/socials";
import {motion} from 'framer-motion';
import { smoothShow } from "@/data/animations";

function Socials() {
  return (
    <div className="socials">
      <h1 className="socials__title">Our social networks</h1>
      <ul className="socials__list">
        {socials.map((item, index) => (
          <motion.li {...smoothShow(0.5, index / 5)} className="socials__item socials__item_discord">
            <a
              className="socials__card"
              href="https://discord.gg/chjDVWAbBU"
              target="_blank"
            >
              {item.icon()}
              <div className="socials__card-info">
                <h2 className="socials__card-title">{item.title}</h2>
                <p className="socials__card-text">{item.text}</p>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Socials;
