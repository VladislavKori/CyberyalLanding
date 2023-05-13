import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Socials from "@/components/Socials";
import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import Features from "@/components/Features";
import AboutUs from "@/components/About/AboutUs";
import ProblemsWeSolve from "@/components/About/ProblemsWeSolve";
import OurTeam from "@/components/About/OurTeam";
import RoadMap from "@/components/About/RoadMap";
import BecomeAnInvestor from "@/components/About/BecomeAnInvestor";
import ContactUs from "@/components/About/ContactUs";
import Affilate from "@/components/Affilate";
const HeaderWithNoSSR = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function About() {
  return (
    <>
      <Head>
        <title>Cyberyal | Take your gaming to the next level</title>
        <meta
          name="description"
          content="Boost your gaming skills on our esports platform! Participate in tournaments, complete engaging tasks, and become a part of our active gaming community. Join now!"
        />

        <meta property="og:url" content="cyberyal.com/about" />
        <meta property="og:site_name" content="Cyberyal" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cyberyal Gaming Platform | About" />
        <meta
          property="og:description"
          content="Cyberyal is not just a gaming platform, it's a whole community of gamers. Here you will find everything you need to become a true champion: participate in exciting tournaments with players from all over the world, hone your skills with individual coaching, level up in PVP mode, and, of course, monetize your gaming achievements - all on one platform! Join Cyberyal and get the most out of your gaming experience."
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
        <meta name="twitter:title" content="Cyberyal Gaming Platform | About" />
        <meta
          name="twitter:description"
          content="Cyberyal is not just a gaming platform, it's a whole community of gamers. Here you will find everything you need to become a true champion: participate in exciting tournaments with players from all over the world, hone your skills with individual coaching, level up in PVP mode, and, of course, monetize your gaming achievements - all on one platform! Join Cyberyal and get the most out of your gaming experience."
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/uc?export=view&id=1xe97s0ePX0YWbxzsmGwNry2iST57HghY"
        />

        <link
          rel="canonical"
          href="https://cyberyal.com/about"
          key="canonical"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="wrapper">
        <HeaderWithNoSSR />
        <div className="content">
          <AboutUs />
          <div className="about__gradient"></div>
          <Features diraction="conversely" />
          <Socials />
          <ProblemsWeSolve />
          <OurTeam />
          <RoadMap />

          <BecomeAnInvestor />
          <ContactUs />
          <Affilate />
        </div>
        <Footer />
      </main>
    </>
  );
}
