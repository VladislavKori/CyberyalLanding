import React from "react";
import Image from "next/image";

import Bg from "@/public/assets/comingsoonbg.webp";
import Cards from "./Cards";

function ComingSoon() {
  return (
    <div className="comingsoon">
      <h1 className="comingsoon__title">Coming soon</h1>
      <p className="comingsoon__subtitle">At the end of the Q2 2023</p>

      <div className="comingsoon__bottom">
        <div className="comingsoon__blackout"></div>
        <Cards />
      </div>
    </div>
  );
}

export default ComingSoon;
