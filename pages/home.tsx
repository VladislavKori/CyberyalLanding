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

        <link rel="canonical" href="http://cyberyal.com/home" key="canonical" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="wrapper">
        <HeaderWithNoSSR />
        <div className="content">
          <Hero
            modal_text={
              "You have successfully subscribed to our email newsletter, news, promotions and notifications will be sent to the email address you specified."
            }
            form_header={"Subscribe to our newsletter "}
            form_text={
              "Join the number of those who will be the first to know about our launch - subscribe to our email newsletter and do not miss the chance to get nice bonuses"
            }
            form_button={"Subscribe"}
          />
          <Socials />
          <ComingSoon />
        </div>
        <Footer />
      </main>
    </>
  );
}
