import ArrowRight from "../public/assets/ArrowRight.svg";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useRouter } from "next/router";
import Button from "@/components/UI/Button";
import { smoothShow } from "@/data/animations";

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
      {...smoothShow(1)}
      className="affilate"
    >
      <div className="affilate__container">
        <h2 className="affilate__header">Cyberyal Affilate program</h2>
        <p className="affilate__text">
          Join the ranks of those who are the first to discover opportunities Cyberyal - join our affililiate compaign, complete tasks and get bonuses
        </p>
        <Button />
      </div>
    </motion.div>
  );
}

export default Affilate;
