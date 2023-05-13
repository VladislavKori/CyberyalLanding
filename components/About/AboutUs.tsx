import Image from "next/image";
import About from "../../public/assets/about.webp";
import { motion } from "framer-motion";
import GridBg from "../../public/assets/grid.png"

const animation = (delay: number = 0) => {
  const result = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      ease: "easeInOut",
      duration: 0.6,
      delay: 0.2 + delay,
    }
  }
  return result;
}

function AboutUs() {
  return (
    <div className="about">
      <div className="about__bg-container">
        <Image className="about__bg" src={GridBg} alt="grid" />
      </div>
      <div className="about__text">
        <motion.h1 {...animation(0.1)} className="about__text__title">
          About us
        </motion.h1>
        <motion.p {...animation(0.2)} className="about__text__desc">
          Cyberyal is an online platform for eSports tournaments, challenges and
          educational events. Users can participate for free, on a paid basis,
          and create their own tournaments with a variety of mechanics and
          tournament regulations. Apart from organizing matches, Cyberyal
          provides mediation in educational services.
        </motion.p>
      </div>
      <motion.div {...animation()} className="about__image">
        <div
          style={{
            background: `url('${About.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="about__image__inner"
        ></div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
