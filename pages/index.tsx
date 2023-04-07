import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Socials from "@/components/Socials";
import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const HeaderWithNoSSR = dynamic(() => import("@/components/Header"), {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

        <link rel="canonical" href="http://cyberyal.com" key="canonical" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="wrapper">
        <HeaderWithNoSSR />
        <div className="content">
          <Hero />
          <Socials />
          <ComingSoon />
        </div>
        <Footer />
      </main>
    </>
  );
}
