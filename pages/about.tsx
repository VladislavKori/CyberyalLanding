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

        <meta property="og:url" content="http://cyberyal.com" />
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
          content="http://cyberyal/assets/Cyberyal_open_graph1200x630.png"
        />
        <meta
          property="og:image:secure_url"
          content="http://cyberyal/assets/Cyberyal_open_graph1200x630.png"
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
          content="http://cyberyal/assets/Cyberyal_open_graph1200x630.png"
        />

        <link
          rel="canonical"
          href="http://cyberyal.com/about"
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
