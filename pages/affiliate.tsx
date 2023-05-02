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
                <title>Cyberyal</title>
                <meta name="description" content="affiliate" />
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
                <FAQ />
                <div className="affiliate-container">
                    <Join />
                    <Socials />
                </div>
                <Footer />
            </main>
        </>
    )
}