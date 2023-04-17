import Image from "next/image";
import DiscordIcon from "@/public/socials/Discord.svg";
import TwitterIcon from "@/public/socials/Twitter.svg";
import YoutubeIcon from "@/public/socials/Youtube.svg";
import FacebookIcon from "@/public/socials/Facebook.svg";
import TwitchIcon from "@/public/socials/Twitch.svg";
import VkIcon from "@/public/socials/VK.svg";
import { motion } from 'framer-motion'

const socials = [
  {
    title: "Facebook",
    icon: FacebookIcon,
    text: "You can follow us on Facebook",
    link: "http://www.facebook.com/groups/cyberyalgaming/",
    social: "facebook",
  },
  {
    title: "Twitter",
    icon: TwitterIcon,
    text: "Follow the news on Twitter",
    link: "https://twitter.com/cyberyalgaming",
    social: "twitter",
  },
  {
    title: "Discord",
    icon: DiscordIcon,
    text: "Join our Discord channel",
    link: "https://discord.gg/chjDVWAbBU",
    social: "discord",
  },
  {
    title: "Twitch",
    icon: TwitchIcon,
    text: "Watch our streams on Twitch",
    link: "https://www.twitch.tv/cyberyal",
    social: "twitch",
  },
  {
    title: "Youtube",
    icon: YoutubeIcon,
    text: "Follow our channel on YouTube",
    link: "https://www.youtube.com/@CyberyalGaming",
    social: "youtube",
  },
  {
    title: "VK",
    icon: VkIcon,
    text: "Subscribe to the group in VK",
    link: "https://vk.com/cyberyalgaming",
    social: "vk",
  },
];

function SocialNetworks() {
  return (
    <div className="socialnet">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="socialnet__header_container">
        <h2 className="required__main_header">Our social networks</h2>
      </motion.div>
      <div className="socialnet__socicons_container">
        <ul className="socialnet__list">
          {socials.map((el, index) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.2 + (index / 10),
              }}
              className={`socialnet__list socials__item_${el.social}`}>
              <a className="socialnet__card" href={el.link} target="_blank">
                <Image className="socials__icon" src={el.icon} alt={el.title} />

                <div className="socials__card__info">
                  <h2 className="socials__card-title">{el.title}</h2>
                  <p className="socials__card-text">{el.text}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialNetworks;
