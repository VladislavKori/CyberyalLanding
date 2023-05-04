import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from '@/components/Affiliate/Hero';
import Socials from '@/components/Socials';
import Join from '@/components/Affiliate/Join';
import FAQ from '@/components/Affiliate/FAQ';
import InfoPlate from '@/components/InfoPlate';

import PartnerConditions from '@/components/Affiliate/PartnerConditions';
import HowAffiliateWorks from '@/components/Affiliate/HowAffiliateWorks';
import AboutAffiliate from '@/components/Affiliate/AboutAffiliate';

export default function Affiliate() {
    return (
      <>
        <Head>
          <title>Cyberyal | Take your gaming to the next level</title>
          <meta
            name="description"
            content="Boost your gaming skills on our esports platform! Participate in tournaments, complete engaging tasks, and become a part of our active gaming community. Join now!"
          />

          <meta property="og:url" content="cyberyal.com/affiliate" />
          <meta property="og:site_name" content="Cyberyal" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Cyberyal Gaming Platform | Affiliate Program"
          />
          <meta
            property="og:description"
            content="Want to monetize your passion for gaming? Join Cyberyal's affiliate program and earn commissions for each new user you refer. We'll provide any promotional materials to help you succeed in promoting the platform. Join Cyberyal's affiliate program and start earning today!"
          />
          <meta
            property="og:image"
            content="https://cyberyal.com/_next/static/media/Cyberyal_open_graph1200x630.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://cyberyal.com/_next/static/media/Cyberyal_open_graph1200x630.png"
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
            content="Cyberyal Gaming Platform | Affiliate Program"
          />
          <meta
            name="twitter:description"
            content="Want to monetize your passion for gaming? Join Cyberyal's affiliate program and earn commissions for each new user you refer. We'll provide any promotional materials to help you succeed in promoting the platform. Join Cyberyal's affiliate program and start earning today!"
          />
          <meta
            name="twitter:image"
            content="https://cyberyal.com/_next/static/media/Cyberyal_open_graph1200x630.png"
          />

          <link
            rel="canonical"
            href="https://cyberyal.com/affiliate"
            key="canonical"
          />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <main className="wrapper">
          <Header />
          <Hero />

          <div className="affiliate__container-for-shy">
            <div className="affiliate__bg-shy"></div>
            <HowAffiliateWorks />
            <PartnerConditions />
          </div>
          <AboutAffiliate />
          {/* <FAQ /> */}
          <div className="affiliate-container">
            <Join />
            <Socials />
          </div>
          <Footer />
        </main>
      </>
    );
}