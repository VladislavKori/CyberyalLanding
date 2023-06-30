import Header from "@/components/Elements/Header";
import Footer from "@/components/Elements/Footer";
import Head from "next/head";
import Image from "next/image";
import Socials from "@/components/Elements/Socials";
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
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/api/supabaseClient";
import ProblemsWeSolve from "@/components/About/ProblemsWeSolve";

const HeaderWithNoSSR = dynamic(() => import("@/components/Elements/Header"), {
  ssr: false,
});

export default function Home() {

  const [loading, setLoading] = useState<boolean>(false)
  const [info, setInfo] = useState<Array<{ title: string, text: string, image: string }>>([])
  const getTexts = useCallback(async () => {
    try {
      const { data, status, error } = await supabase.from('infoplates').select('*');
      if (data && error == null) {
        setInfo(data)
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    getTexts()
  }, [])

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
          <ProblemsWeSolve />
          {loading ? (<p>Loading...</p>) : (
            <>
              {info.map((item, index) => (
                <InfoPlate
                  title={item.title}
                  text={item.text}
                  img={item.image}
                  reverse={index % 2 != 0}
                />
              ))}
            </>
          )}
          {/* <Comments /> */}
          <Socials />
          <Affiliate />
          <Footer />
        </div>
      </main>
    </>
  );
}
