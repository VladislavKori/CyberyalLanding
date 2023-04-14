import Image from "next/image";
import About from "../../public/assets/about.png";

function AboutUs() {
  return (
    <div>
      <div className="about">
        <div className="about__text">
          <h1 className="about__text__title">About us</h1>
          <p className="about__text__desc">
            Cyberyal is an online platform for eSports tournaments, challenges
            and educational events. Users can participate for free, on a paid
            basis, and create their own tournaments with a variety of mechanics
            and tournament regulations. Apart from organizing matches, Cyberyal
            provides mediation of educational services.
          </p>
        </div>
        <div className="about__image">
          <div
            style={{
              background: `url('${About.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="about__image__inner"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
