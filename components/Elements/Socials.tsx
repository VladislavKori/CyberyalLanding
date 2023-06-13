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
          <motion.li
            {...smoothShow(0.5, index / 5)}
            className="socials__item socials__item_discord"
          >
            <Link
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="socials__card" style={{ padding: "16px" }}>
                <div
                // className={`socials__icon ${
                //   item.title === "Facebook"
                //     ? "facebook"
                //     : item.title === "Twitter"
                //     ? "twitter"
                //     : ""
                // }`}
                >
                  {item.icon()}
                </div>
                <div className="socials__card-info">
                  <h2 className="socials__card-title">{item.title}</h2>
                  <p className="socials__card-text">{item.text}</p>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Socials;
