import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import DiscordIcon from "@/public/socials/Discord.svg";
import TwitterIcon from "@/public/socials/Twitter.svg";
import YoutubeIcon from "@/public/socials/Youtube.svg";
import FacebookIcon from "@/public/socials/Facebook.svg";
import TwitchIcon from "@/public/socials/Twitch.svg";
import VkIcon from "@/public/socials/VK.svg";
import ShareIcon from "@/public/socials/Share.svg";
import { useRouter } from "next/router";

function Socials() {
  const router = useRouter();

  const isAbout = router.pathname === "/about";

  const [copySuccess, setCopySuccess] = useState("");

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    setCopySuccess("Copied");
    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
  }

  return (
    <div className="socials">
      <h1 className="socials__title">
        Create and share the Cyberyal on social media platforms
      </h1>
      <ul className="socials__list">
        <li className="socials__item socials__item_discord">
          <a
            className="socials__card"
            href="https://discord.gg/chjDVWAbBU"
            target="_blank"
          >
            <Image className="socials__icon" src={DiscordIcon} alt="discord" />

            <div className="socials__card__info">
              <h2 className="socials__card-title">Discord</h2>
              <p className="socials__card-text">Join our Discord channel</p>
            </div>
          </a>
        </li>
        <li className="socials__item socials__item_twitter">
          <a
            className="socials__card socials__card_discord"
            href="https://twitter.com/cyberyalgaming"
            target="_blank"
          >
            <Image className="socials__icon" src={TwitterIcon} alt="discord" />

            <div className="socials__card__info">
              <h2 className="socials__card-title">Twitter</h2>
              <p className="socials__card-text">Follow the news on Twitter</p>
            </div>
          </a>
        </li>
        <li className="socials__item socials__item_youtube">
          <a
            className="socials__card socials__card_discord"
            href="https://www.youtube.com/@CyberyalGaming"
            target="_blank"
          >
            <Image className="socials__icon" src={YoutubeIcon} alt="discord" />

            <div className="socials__card__info">
              <h2 className="socials__card-title">YouTube</h2>
              <p className="socials__card-text">
                Follow our channel on YouTube
              </p>
            </div>
          </a>
        </li>
        <li className="socials__item socials__item_facebook">
          <a
            className="socials__card socials__card_discord"
            href="http://www.facebook.com/groups/cyberyalgaming/"
            target="_blank"
          >
            <Image className="socials__icon" src={FacebookIcon} alt="discord" />

            <div className="socials__card__info">
              <h2 className="socials__card-title">Facebook</h2>
              <p className="socials__card-text">
                You can follow us on Facebook
              </p>
            </div>
          </a>
        </li>
        <li className="socials__item socials__item_twitch">
          <a
            className="socials__card socials__card_discord"
            href="https://www.twitch.tv/cyberyal"
            target="_blank"
          >
            <Image className="socials__icon" src={TwitchIcon} alt="discord" />

            <div className="socials__card__info">
              <h2 className="socials__card-title">Twitch</h2>
              <p className="socials__card-text">Watch our streams on Twitch</p>
            </div>
          </a>
        </li>

        <li className="socials__item socials__item_vk">
          <a
            className="socials__card socials__card_discord"
            href="https://vk.com/cyberyalgaming"
            target="_blank"
          >
            <Image className="socials__icon" src={VkIcon} alt="discord" />

            <div className="socials__card__info">
              <h2 className="socials__card-title">VK</h2>
              <p className="socials__card-text">Subscribe to the group in VK</p>
            </div>
          </a>
        </li>
        {isAbout ? (
          ""
        ) : (
          <li
            className="socials__item socials__item_share"
            onClick={() => copyToClip()}
            style={{ cursor: "pointer" }}
          >
            <a className="socials__card socials__card_discord">
              <Image className="socials__icon" src={ShareIcon} alt="share" />

              <div className="socials__card__info">
                <p className="socials__card-text" style={{ fontWeight: "700" }}>
                  {copySuccess}
                </p>
                <h2 className="socials__card-title">Share</h2>

                <p className="socials__card-text">
                  Share a link to our website
                </p>
              </div>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Socials;
