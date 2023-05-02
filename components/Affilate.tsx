import ArrowRight from "../public/assets/ArrowRight.svg";
import Image from "next/image";
import {motion} from 'framer-motion'
import { useRouter } from "next/router";
import Button from "./Button";

function Affilate() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    var element = document.getElementById("ref");
  }

  const isPrivacy = router.pathname === "/privacy";
  const isHome = router.pathname === "/home";
  const isLanding = router.pathname === "/";

  const handleClick = () => element?.scrollIntoView();

  const handleClickRoute = async () => {
    // Wait for route change before do anything
    await router.push("/");
    // Reload after routing
    // router.reload();
  };

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
      className="affilate"
    >
      <div className="affilate__container">
        <h2 className="affilate__header">Cyberyal Affilate program</h2>
        <p className="affilate__text">
          Complete simple tasks and receive rewards! Sign up, accomplish
          engaging and easy tasks, and then collect your well-deserved rewards.
          Start today and ensure your success.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button />
        </div>
      </div>
    </motion.div>
  );
}

export default Affilate;
