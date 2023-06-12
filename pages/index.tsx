import Header from "@/components/Elements/Header";
import Footer from "@/components/Elements/Footer";
import Head from "next/head";
import Image from "next/image";
import Socials from "@/components/Elements/Socials";
import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Home/Hero";
import dynamic from "next/dynamic";

import Comments from "@/components/Home/Comments";
import Games from "@/components/Home/Games";
import Features from "@/components/Home/Features";
import Affiliate from "@/components/Home/Affilate";
import InfoPlate from "@/components/Home/InfoPlate";

// images
import InfoPlateImage1 from '@/public/infoplate/img1.png';
import InfoPlateImage2 from '@/public/infoplate/img2.png';
import InfoPlateImage3 from '@/public/infoplate/img3.png';

const HeaderWithNoSSR = dynamic(() => import("@/components/Elements/Header"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyberyal | Take your gaming to the next level</title>
        <meta
          name="description"
          content="Boost your gaming skills on our esports platform! Participate in tournaments, complete engaging tasks, and become a part of our active gaming community. Join now!"
        />

        <meta property="og:url" content="https://cyberyal.com" />
        <meta property="og:site_name" content="Cyberyal" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Cyberyal | Take your gaming to the next level"
        />
        <meta
          property="og:description"
          content="Cyberyal.com | Boost your gaming skills on our esports platform! Participate in tournaments, complete engaging tasks, and become a part of our active gaming community. Join now!"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?export=view&id=1xe97s0ePX0YWbxzsmGwNry2iST57HghY"
        />
        <meta
          property="og:image:secure_url"
          content="https://drive.google.com/uc?export=view&id=1xe97s0ePX0YWbxzsmGwNry2iST57HghY"
        ></meta>

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content="https://www.twitter.com/PlaystarEU"
        />
        <meta
          name="twitter:creator"
          content="https://www.twitter.com/PlaystarEU"
        />
        <meta
          name="twitter:title"
          content="Cyberyal | Take your gaming to the next level"
        />
        <meta
          name="twitter:description"
          content="Cyberyal.com | Boost your gaming skills on our esports platform! Participate in tournaments, complete engaging tasks, and become a part of our active gaming community. Join now!"
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/uc?export=view&id=1xe97s0ePX0YWbxzsmGwNry2iST57HghY"
        />

        <link rel="canonical" href="https://cyberyal.com" key="canonical" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="wrapper">
        <div className="content">
          <HeaderWithNoSSR />
          <Hero />
          <Features />
          <Games />
          <InfoPlate 
            title="Tournament — intense gaming showdown"
            text={`Witness nail-biting battles, extraordinary strategies, and exceptional teamwork as players vie for the championship title.

Enter the thrilling arena of high-stakes gaming, where competitors showcase their skills in popular titles. With an exciting lineup of matches and expert commentary, immerse yourself in each heart-pounding moment. Are you ready for the challenge?`}
            img={InfoPlateImage1}
          />
          <InfoPlate 
            title="Couching — elevate your gaming skills"
            text={`Unlock your true potential with personalized coaching designed to elevate your gaming skills. 

Our expert coaches provide tailored strategies, in-depth analysis, and valuable insights to help you excel in your favorite games. Through focused sessions and constructive feedback, watch your abilities soar to new heights. Are you prepared to transform your gameplay?`}
            img={InfoPlateImage2}
            reverse={true}
          />
          <InfoPlate 
            title="PvP — Compete, Conquer, Claim Rewards"
            text={`Dive into exhilarating PvP action where you'll compete, conquer, and claim incredible rewards. 

Challenge players from around the globe in thrilling matches that test your skills and strategic prowess. Prove your dominance across a variety of popular games and climb the ranks to earn your spot among the elite. Are you ready to conquer the arena and claim your rewards?`}
            img={InfoPlateImage3}
          />
          <Comments />
          <Socials />
          <Affiliate />
          <Footer />
        </div>
      </main>
    </>
  );
}
