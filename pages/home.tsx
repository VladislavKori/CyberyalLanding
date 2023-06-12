import Header from "@/components/Elements/Header";
import Footer from "@/components/Elements/Footer";
import Head from "next/head";
import Image from "next/image";
import Socials from "@/components/Elements/Socials";
import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import Games from "@/components/Home/Games";
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

        <link
          rel="canonical"
          href="https://cyberyal.com/home"
          key="canonical"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="wrapper">
        <HeaderWithNoSSR />
        <div className="content">
          <Hero
            modal_text={
              "You are successfully created an account to participate in the Cyberyal Affilate program. Complete simple tasks and receive rewards! accomplish engaging and easy tasks, and then collect your well-deserved rewards."
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
