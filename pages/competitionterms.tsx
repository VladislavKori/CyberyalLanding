import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router'

import Footer from "@/components/Elements/Footer";
import Header from "@/components/Elements/Header";

import ArrowLeft from '@/public/common/ArrowLeft.svg';

export default function CompetitionTerms() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Cyberyal</title>
        <meta name="description" content="Competition Terms" />
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
          <h1 className="privacy__title">Cyberial Competition Terms</h1>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">1. Eligibility</h2>
            <p className="privacy__default-text">
              open to all registered users of the platform. All participants must have valid and non-banned accounts on either Steam or Epic Games, and the account in the applicable game to take part in the organised competition.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">2. Registration</h2>
            <p className="privacy__default-text">
              to join a competition, players must first register for the specific event on the platform. Participants are responsible for keeping track of the schedule and participating in the games at the designated times.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">3. Competition Structure</h2>
            <p className="privacy__default-text">
              the competitions are organized by users on the platform. The structure, format, and rules of individual competitions are subject to the discretion of the competition organizer but must adhere to the general competition rules of the platform.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">4. Game Session Tracking</h2>
            <p className="privacy__default-text">
              the in-game statistics are acquired through the Steam and Epic Games APIs. However, the match points, which are the wins/loses within the round, are self-reported by the players. It's each player's responsibility to correctly report their match points after each round.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">5. Point System</h2>
            <p className="privacy__default-text">
              each competition uses intra-session match points to determine the winner. The player with the most match points at the end of the competition will be declared the winner. Specific point allocation per match win or lose should be outlined by the organizer at the start of each competition.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">6. Prize Amounts</h2>
            <p className="privacy__default-text">
              the prize pool for each competition will be set and announced by the competition organizer at the time of competition registration. Prize pool amounts may vary from competition to competition. This prize could be distributed across multiple top positions, or be awarded in full to the competition winner, as per the discretion of the competition organizer.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">7. Awarding of Prizes</h2>
            <p className="privacy__default-text">
              the prizes will be distributed to the winners immediately upon the end of the competition unless the results are disputed. The moderator shall resolve any disputes within 24 hours of the competition, unless a longer resolution period is reasonably necessary.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">8. Conflicts & Disputes</h2>
            <p className="privacy__default-text">
              if a conflict arises between players regarding match points or any other aspect of the competition, a moderator will intervene to settle the dispute. The moderator will request evidence from both parties involved in the conflict, and their decision will be final.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">9. Evidence Submission</h2>
            <p className="privacy__default-text">
              players are encouraged to record their games or take screenshots to serve as evidence in case of disputes. In the absence of conclusive evidence, the decision will be at the moderator's discretion.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">10. Code of Conduct</h2>
            <p className="privacy__default-text">
              all participants must abide by platform’s terms and conditions and any applicable code of conduct, including the code of conduct of the applicable game. Any form of harassment, cheating, or violation of the rules may result in immediate disqualification and potential banning from future competitions.
            </p>
          </div>
          <div className="privacy__text-block">
            <h2 className="privacy__min-title">11. Final Decision</h2>
            <p className="privacy__default-text">
              the platform reserves the right to modify these rules at any time. All decisions regarding the interpretation of these rules, player eligibility, scheduling and staging of the competition, and penalties for misconduct, lie solely with the platform, the decisions of which are final.
            </p>
          </div>
          <div className="privacy__text-block">
            <p className="privacy__default-text">Please note: The platform is not directly connected to the competitions, nor does it have any affiliation with the games being played. The role of the platform is to provide a platform for users to organize and participate in gaming competitions. The platform does not assume responsibility for technical problems that occurred outside the boards on the user's side.</p>
          </div>

        </div>
        <div className="privacy__footer-wrapper">
          <Footer />
        </div>
      </main>
    </>
  );
}
