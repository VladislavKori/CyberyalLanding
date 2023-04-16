import ArrowRight from "../public/assets/ArrowRight.svg";
import Image from "next/image";
import {motion} from 'framer-motion'

function Affilate() {
  if (typeof window !== "undefined") {
    var element = document.getElementById("ref");
  }

  const handleClick = () => element?.scrollIntoView();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.2,
      }}
      className="affilate">
      <div className="affilate__container">
        <h2 className="affilate__header">Cyberyal Affilate program</h2>
        <p className="affilate__text">
          Complete simple tasks and receive rewards! Sign up, accomplish
          engaging and easy tasks, and then collect your well-deserved rewards.
          Start today and ensure your success.
        </p>
        <button className="affilate__button" onClick={handleClick}>
          Create Cyberyal ID <Image src={ArrowRight} alt="ArrowRight" />
        </button>
      </div>
    </motion.div>
  );
}

export default Affilate;
