import React from 'react'
import Head from 'next/head'

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Cyberyal</title>
        <meta name="description" content="Privacy Policy" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="wrapper">
        <Header />
        <div className="content"></div>
        <div className="privacy__wrapper">
          <h1 className="privacy__title">Privacy policy</h1>
          <p className="privacy__default-text">Last updated: 3 May, 2023</p>
          <p className="privacy__default-text">
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
            <br />
            <br />
            We provide this privacy statement explaining our online information
            practices, so that you can decide whether and how to interact with
            the Website and the Service. If we decide to change our privacy
            policy, we will post those changes on this page
          </p>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">Definitions</h2>
            <p className="privacy__default-text">
              For the purposes of this Cookies Policy:
            </p>
            <ul className="privacy__list">
              <li className="privacy__item">
                <p className="privacy__default-text">
                  Service (referred to as either "Website", "We", "Us" or "Our"
                  in this Cookies Policy) represents the “Cyberyal” website
                  accessible from https://cyberyal.com
                </p>
              </li>
              <li className="privacy__item">
                <p className="privacy__default-text">
                  You You means the individual accessing or using the Service,
                  or the Website, or any legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </p>
              </li>
            </ul>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">Collection of Personal Data</h2>
            <p className="privacy__default-text">
              When you visit the website, we may collect personal data about
              your website use such as the IP address, browser settings and
              pages visited to facilitate your use of the website and improve
              our offer. This data protection declaration tells you how data are
              collected and the particular purposes for which they are used.
              <br />
              <br />
              Where permitted in our legitimate interest or with your prior
              consent where required by law, we will use your personal
              information for marketing and to provide you with promotional
              update communications by email about our products/services.
              <br />
              <br />
              By submitting your information we obtain your consent for sending
              you advertising material or the Newsletter. Should you no longer
              wish to receive notifications from the Service, you may
              unsubscribe from our mailing list using the option provided at the
              bottom of our Newsletters.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">Disclosure of Personal Data</h2>
            <p className="privacy__default-text">
              We may disclose data to third parties if statutory provisions so
              require. In addition, we may pass personal data on to third party
              suppliers and service providers.
              <br />
              <br />
              We may allow the following companies to serve advertisements on
              our behalf across the Internet and in applications: Google
              AdWords, Google analytics, Marketo, Twitter, Facebook, Adroll,
              Quora, Bing ads, Linkedin, Terminus, Demand base, Instagram, and
              Reddit using email address and cookies that are collected.
              <br />
              <br />
              These entities may use technologies like cookies to collect
              information about your use of the Service and other Websites and
              applications, including your IP address. This information may be
              used by services providers to, among other things, analyze and
              track data, determine the popularity of certain content, deliver
              advertising and content targeted to your interests. For more
              information about cookies, please see Cookie Policy.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">Personal Data Storage</h2>
            <p className="privacy__default-text">
              The Service takes organisational measures to ensure data security,
              in particular to protect your personal data against loss,
              manipulation or unauthorised access. Unfortunately, transmission
              of information via the internet is not completely secure. Although
              we do our best to protect your personal information, we cannot
              guarantee the security of your personal information submitted to
              us.
              <br />
              <br />
              We process and store your personal data as long as that is
              necessary to provide our contractual services or for the duration
              prescribed by law. We may also store personal data for as long as
              we need such data to enforce claims or defend ourselves against
              claims. To the extent that your data are no longer needed for the
              above purposes, they will be deleted.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">Links to Other Websites</h2>
            <p className="privacy__default-text">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">Withdrawal of Consent</h2>
            <p className="privacy__default-text">
              You may withdraw consent given to us at any time by notifying us;
              such withdrawal will take effect for the future.
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
