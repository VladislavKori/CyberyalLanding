import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router'

import Footer from "@/components/Elements/Footer";
import Header from "@/components/Elements/Header";

import ArrowLeft from '@/public/common/ArrowLeft.svg';

export default function Privacy() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Cyberyal</title>
        <meta name="description" content="Privacy Policy" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="wrapper">
        <div className="privacy__wrapper">
          <Header />
          <div className="privacy__header">
            <button className="privacy__goback" onClick={() => router.back()}>
              <ArrowLeft className="privacy__goback-icon" />
              <h3 className="privacy__goback-text">Back</h3>
            </button>
          </div>
          <h1 className="privacy__title">
            PRIVACY NOTICE FOR PROCESSING PERSONAL DATA BY СYBERYAL
          </h1>
          <p className="privacy__default-text">Version 1 – 05.05.2023</p>
          <p className="privacy__default-text">
            Playstar Platform OÜ, address Harju maakond, Tallinn, Artelli tn 19,
            10621, registry code 16306741 (hereinafter “Cyberyal”) processes
            personal data of individuals who use the information society service
            сyberyal.com.
          </p>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">1. GENERAL PROVISIONS</h2>
            <p className="privacy__default-text">
              1.1 Cyberyal ensures that the processing of personal data is in
              accordance with the legislation regarding the protection and
              security of personal data (including the General Data Protection
              Regulation of the European Union, hereinafter, “GDPR”), other
              personal data protection legislation, and good business practices.
            </p>
            <p className="privacy__default-text">
              1.2 Cyberyal considers the privacy of individuals and the
              protection of their data important and makes the best efforts to
              ensure the security and protection of the information system and
              other data carriers.
            </p>
            <p className="privacy__default-text">
              1.3 Please note that the cyberyal.com Platform is used in
              different countries. Personal data processing conditions may
              differ from country to country, and the corresponding data
              processing notice can be found on localised versions of the
              Platform.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">2. DEFINITIONS</h2>
            <p className="privacy__default-text">
              2.1 User means a person who signs up for the Platform or uses the
              services provided by Cyberyal.
            </p>
            <p className="privacy__default-text">
              2.2 Processing of personal data means viewing, collecting, saving,
              storing, altering, transmitting, or receiving personal data and
              other activities related to personal data.
            </p>
            <p className="privacy__default-text">
              2.3 Platform means Software as a Service, including the website{" "}
              <a className="privacy__default-text" href="https://Cyberyal.com/">
                https://Cyberyal.com/
              </a>{" "}
              and the mobile applications through which the services of the
              Cyberyal are available.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">
              3. PURPOSE OF THE PROCESSING OF PERSONAL DATA AND ITS LEGAL BASIS
            </h2>
            <p className="privacy__default-text">
              3.1 Cyberyal processes personal data necessary for the management
              of the accounts of the Users and for the collection of data
              regarding the object of the services, for example, user content,
              payments and competitions.
            </p>
            <p className="privacy__default-text">
              3.2 In general, the legal basis for such a purpose is carried out
              in accordance with Article 6(1)(b) of the GDPR. Such processing is
              necessary for the performance of a contract to which the User is a
              party or in order to take such steps at the specific request of
              the User prior to entering into a contract. Sometimes the
              processing of data is necessary for legitimate interests under
              Article 6(1)(f) of the GDPR provided those interests are not
              outweighed by the Users’ rights and interests.
            </p>
            <p className="privacy__default-text">
              3.3 Cyberyal is operating a Platform which provides several
              functions for data processing activities.
            </p>

            <div className="privacy__table-container">
              <table className="privacy__table">
                <thead>
                  <tr className="privacy__tr">
                    <td className="privacy__head-td">
                      Processing activity (controller)
                    </td>
                    <td className="privacy__head-td">Data categories</td>
                    <td className="privacy__head-td">Purpose</td>
                    <td className="privacy__head-td">Legal basis</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Creating accounts</td>
                    <td className="privacy__body-td">
                      Full name, address, telephone number, email address, date
                      of birth, billing type, residential address.
                    </td>
                    <td className="privacy__body-td">
                      Providing the Platform,wallet and conducting the necessary
                      payments for the Users
                    </td>
                    <td className="privacy__body-td">Contract</td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">
                      AML Checks (if applied)
                    </td>
                    <td className="privacy__body-td">
                      Taxpayer identification number, Government identification
                      number, source of funds, government issued documents,
                      marital status, title, gender, residential address,
                      nationality.
                    </td>
                    <td className="privacy__body-td">
                      Fulfilling legal obligation
                    </td>
                    <td className="privacy__body-td">Contract</td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Platform usage</td>
                    <td className="privacy__body-td">
                      Helpdesk requests, alerts, and account logs, in-game Data
                      and Performance Metrics, user-generated Content (e.g.
                      chats, forums, reviews),  usage and interaction Data
                    </td>
                    <td className="privacy__body-td">
                      Customer support for Users, provision of the service
                    </td>
                    <td className="privacy__body-td">
                      Contract, legitimate interest
                    </td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Service updates</td>
                    <td className="privacy__body-td">Name, e-mail address</td>
                    <td className="privacy__body-td">
                      Customer support for Users
                    </td>
                    <td className="privacy__body-td">Legitimate interest</td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Newsletters</td>
                    <td className="privacy__body-td">Name, e-mail address</td>
                    <td className="privacy__body-td">Marketing</td>
                    <td className="privacy__body-td">Consent</td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">
                      Reminders and notifications
                    </td>
                    <td className="privacy__body-td">Name, e-mail address</td>
                    <td className="privacy__body-td">Notification</td>
                    <td className="privacy__body-td">Legitimate interest</td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Payment data</td>
                    <td className="privacy__body-td">
                      The bank account number, payment data, invoice or payment
                      notification data and other payment data
                    </td>
                    <td className="privacy__body-td">
                      Payment management for users
                    </td>
                    <td className="privacy__body-td">Contract</td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">
                      Processing the data received from supported games
                    </td>
                    <td className="privacy__body-td">
                      Data collected by the supported games and delivered to the
                      Platform to aggregate the data. The scope of collected
                      data is determined by the respective game.
                    </td>
                    <td className="privacy__body-td">Providing the service</td>
                    <td className="privacy__body-td">
                      DPA provided by the supported games
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">
              4. HOW CYBERYAL COLLECTS PERSONAL DATA
            </h2>
            <p className="privacy__default-text">
              4.1 Cyberyal collects personal information on the Platform
              directly when:
            </p>
            <p className="privacy__default-text">
              4.1.1 the User enters the data necessary for creating an account
              on the Platform;
            </p>
            <p className="privacy__default-text">
              4.1.2 the User authorises Cyberyal to make inquiries for the
              collection of activity from the supported games and other
              integrated services, e.g. usage activity data or match results
              from a supported game. Cyberyal performs queries in an automated
              form (API solution) or by making individual requests.
            </p>
            <p className="privacy__default-text">
              4.1.3 the User authorises Cyberyal to make inquiries for the
              collection of activity from the supported games and other
              integrated services, e.g. usage activity data or match results
              from a supported game. Cyberyal performs queries in an automated
              form (API solution) or by making individual requests.
            </p>
            <p className="privacy__default-text">
              4.2 Cyberyal collects indirectly personal information on the
              Platform when providing IT infrastructure (Platform) for provision
              of goods or services, specifically when:
            </p>
            <p className="privacy__default-text">
              4.2.1 the User enters into a contract with another user;
            </p>
            <p className="privacy__default-text">
              4.2.2 the Users exchange information related to the goods or
              services;
            </p>
            <p className="privacy__default-text">
              4.2.3 the User provides their account information for the purposes
              of fulfilling an order or handling competitions.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">
              5. TRANSMISSION OF THE PERSONAL DATA
            </h2>
            <p className="privacy__default-text">
              5.1 Cyberyal processes personal data in the European Union (EU)
              and within the European Economic Area (EEA). Cyberyal receives,
              transmits, and processes personal data only digitally.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">
              6. DISCLOSURE OF PERSONAL DATA
            </h2>
            <p className="privacy__default-text">
              6.1 Cyberyal will disclose the User´s personal data to third
              parties (e.g. other users), if the services are requested between
              users.
            </p>
            <p className="privacy__default-text">
              6.2 Cyberyal engages third-party service providers to perform
              functions on our behalf, such as payment processing, data
              analysis, marketing, and customer support. These service providers
              have access to your personal data only to the extent necessary to
              perform their services, and they are contractually obligated to
              maintain the confidentiality and security of your information.{" "}
            </p>
            <p className="privacy__default-text">
              6.3 In order to provide in-game training, coaching, and
              assistance, we may share your relevant personal data, such as your
              account information, in-game performance metrics, and
              communication preferences, with the professional players and
              experts you choose to connect with on the platform.
            </p>
            <p className="privacy__default-text">
              6.4 When you participate in the platform's community features,
              such as forums, reviews, or chat rooms, your username, profile
              picture, and any content you submit may be visible to other users.
            </p>
            <p className="privacy__default-text">
              6.5 We may disclose your personal data if required to do so by law
              or in good faith belief that such action is necessary to comply
              with legal obligations, such as platform exchange of tax
              information or anti-money laundering obligations.
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">
              7. RETENTION AND DELETION OF PERSONAL DATA
            </h2>
            <p className="privacy__default-text">
              7.1 The storage period of personal data depends on the legal
              obligations to store data (i.e. accounting regulations),
              contractual obligations, and legitimate interest or consent to
              provide the best services.
            </p>
            <div className="privacy__table-container">
              <table className="privacy__table">
                <thead>
                  <tr className="privacy__tr">
                    <td className="privacy__head-td">Data Type</td>
                    <td className="privacy__head-td">Purpose</td>
                    <td className="privacy__head-td">Retention Time</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Account information</td>
                    <td className="privacy__body-td">
                      We will retain your account information for the duration
                      of your account's active status. If you choose to delete
                      or deactivate your account, we will retain some of your
                      personal data as necessary to comply with our legal
                      obligations, resolve disputes, and enforce our agreements.
                      Personal data will not be deleted if there is a dispute
                      between the User(s) or Cyberyal.
                    </td>
                    <td className="privacy__body-td">
                      If the User deletes the account or has been inactive on
                      the Platform for the last 24 calendar months, the User's
                      personal data shall be deleted, except to the extent
                      allowed by the law or for a duration of up to 3 months
                      following the deletion.
                    </td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">User-generated Content</td>
                    <td className="privacy__body-td">
                      We will retain user-generated content, such as forum
                      posts, reviews, and chat logs, for as long as the
                      associated feature or service remains active, or as
                      required by legal obligations, dispute resolution, or
                      agreement enforcement.
                    </td>
                    <td className="privacy__body-td">
                      User-generated Content will be deleted only upon request.
                    </td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Account</td>
                    <td className="privacy__body-td">Account management</td>
                    <td className="privacy__body-td">
                      Account management If no purchases are made by the User,
                      the account will be deleted after 24 months from the first
                      sign-up
                    </td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">Payment data</td>
                    <td className="privacy__body-td">Accounting</td>
                    <td className="privacy__body-td">
                      Seven years since the payment is made
                    </td>
                  </tr>
                  <tr className="privacy__tr">
                    <td className="privacy__body-td">
                      Email address, newsletter consent
                    </td>
                    <td className="privacy__body-td">Marketing</td>
                    <td className="privacy__body-td">
                      Until withdrawal of consent
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">
              8. RIGHTS OF THE USER (DATA SUBJECT)
            </h2>
            <p className="privacy__default-text">
              8.1 The User (data subject) shall have the right at any time to
              request:
            </p>
            <p className="privacy__default-text">
              8.1.1 access to personal data (accessed via the Platform);
            </p>
            <p className="privacy__default-text">
              8.1.2 correction of inaccurate personal data (given when data is
              automatically collected from supported games, Cyberyal cannot
              correct activity data);
            </p>
            <p className="privacy__default-text">
              8.1.3 require the deletion of personal data (not applicable to
              supported games);
            </p>
            <p className="privacy__default-text">
              8.1.4 restriction of processing of personal data;
            </p>
            <p className="privacy__default-text">
              8.1.5 transfer personal data to the controller designated by the
              User (only applicable to data, which Cyberyal is the controller);
            </p>
            <p className="privacy__default-text">
              8.1.6 withdrawal of data-processing consent (applicable to
              requests made by the User).
            </p>
            <p className="privacy__default-text">
              8.2 In order to exercise these rights, the User must submit a
              declaration to support@cyberyal.com. The application shall be
              responded to within a maximum of 30 calendar days.
            </p>
            <p className="privacy__default-text">
              8.3 The User has the right to lodge a complaint against the
              processing of personal data with the supervisory authority, which
              is the Estonian Data Protection Inspectorate (www.aki.ee).
            </p>
          </div>

          <div className="privacy__text-block">
            <h2 className="privacy__min-title">9. CHANGES AND VALIDITY</h2>
            <p className="privacy__default-text">
              9.1 Cyberyal has the right to change the conditions for processing
              personal data. In the event, that there are substantial changes,
              Cyberyal will provide at least 1 (one) month’s notice in advance
              through the Platform before the substantial changes take effect.
            </p>
            <p className="privacy__default-text">
              9.2 The conditions for processing personal data are valid from
              2023.
            </p>
          </div>
        </div>
        <div className="privacy__footer-wrapper">
          <Footer />
        </div>
      </main>
    </>
  );
}