import ArrowRight from "../public/assets/ArrowRight.svg";
import Image from "next/image";
import RequiredCard from "./Required/RequiredCard";
import DiscordIcon from "@/public/socials/Discord.svg";
import TwitterIcon from "@/public/socials/Twitter.svg";
import ListIcon from "@/public/socials/CheckList.svg";
import FacebookIcon from "@/public/socials/Facebook.svg";
import { motion } from 'framer-motion'

const requiredInfo = [
  {
    title: "Facebook",
    icon: FacebookIcon,
    text: "On Facebook, you will need to subscribe to our group, leave a comment or like the post, maybe recommend to friends",
    social: "facebook",
  },
  {
    title: "Twitter",
    icon: TwitterIcon,
    text: "On Twitter, you will need to comment on our post and maybe repost it to yourself. Everything is simple and nothing complicated",
    social: "twitter",
  },
  {
    title: "Discord",
    icon: DiscordIcon,
    text: "Join our discord service and write a comment in the general chat, maybe you like it there and even want to chat with the developers",
    social: "discord",
  },
  {
    title: "More different tasks",
    icon: ListIcon,
    text: "And many more different tasks in different social networks or not only, join our bounty company and earn points",
    social: "list",
  },
];

function Required() {
  return (
    <div className="required">
      <div className="required__text">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.4
          }}
          viewport={{ once: true }}
          className="required__main_header"
          style={{ marginBottom: "20px" }}>
          What is required for beginners to start in an affiliate program?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.6
          }}
          viewport={{ once: true }}
          className="required__main_text">
          You can choose which tasks to complete in order to earn points in our
          company and then use them for various opportunities in your game. The
          tasks will be as simple as possible so that you can earn as much as
          possible.
        </motion.p>
      </div>
      <div className="required__cards">
        {requiredInfo.map((el, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.2 + (index / 10),
            }}>
            <RequiredCard {...el} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Required;
