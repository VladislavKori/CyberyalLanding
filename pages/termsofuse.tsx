import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router'

import Footer from "@/components/Elements/Footer";
import Header from "@/components/Elements/Header";

import ArrowLeft from '@/public/common/ArrowLeft.svg';

export default function TermsOfUse() {

    const router = useRouter()

    return (
      <>
        <Head>
          <title>Cyberyal</title>
          <meta name="description" content="Terms of Use" />
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
            <h1 className="privacy__title">Terms of Use</h1>
            {/* <p className="privacy__default-text">Last revised: 1.04., 2023</p> */}

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">1. Introduction</h2>
              <p className="privacy__default-text">
                This document sets out the terms and conditions on which
                PlayStar Platform OÜ (referred to as "Company") will provide
                services and products to you through the website cyberyal.com
                (hereinafter the "Platform").
              </p>
              <p className="privacy__default-text">
                In this document, references to we/our/us are to Company. Any
                references to Customer/you/your are references to you as a
                customer of Company and user of our services and product.
              </p>
              <p className="privacy__default-text">
                By signing up to use an account through the Platform or any of
                our associated websites, you agree that you have read,
                understood, and accept all of the terms and conditions contained
                in this Agreement and you have familiarized yourself with our
                Privacy and Cookie Policies. This Agreement will govern the use
                of the services and the products provided by the Company. By
                using the Platform, you agree to be bound by the terms and
                conditions set out on herein (the "Agreement"). This Agreement
                will come into effect when you confirm that you agree to it.
              </p>
              <p className="privacy__default-text">
                IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, AS WELL AS
                THE TERMS OF USE, YOU MAY NOT USE ANY SERVICE ON THE PLATFORM.
              </p>
              <p className="privacy__default-text">
                The Platform integrates various third-party games (“Supported
                Games”) within its interface. The list of supported games is
                available here{" "}
                <a className="privacy__default-text privacy__link" href="/">
                  Cyberyal | Take your gaming to the next level
                </a>
                . You acknowledge and agree that each Supported Game is governed
                by its own separate terms and conditions, as established by the
                respective game developers or publishers. By accessing and
                playing any of the Supported Games, you are bound to comply with
                the applicable terms and conditions. The Platform is not
                responsible for the content, functionality, or any aspect of the
                Supported Games.
              </p>
              <p className="privacy__default-text">
                Supported Games are skill-based. They either have no
                randomisation or they utilize a Pseudo Random Number Generator
                (pRNG) to ensure the randomness of certain game elements, where
                applicable. This pRNG is specifically designed to provide a fair
                and skill-based gaming experience, consistent with the
                non-random nature of the Supported Games.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">2. User Content</h2>
              <p className="privacy__default-text">
                To be eligible to use any of the services and products on the
                Platform, you must be at least 18 years old, have the capacity
                to enter into legally binding contracts and reside in a country
                in which the relevant services and products are available or you
                must be at least 14 years old and you perform the transactions
                by means granted by your legal representative for use on the
                Platform or for free use. Your access to certain Supported
                Games, services or products may be limited based on the age
                rating of the Supported Game as applicable in your country.
              </p>
              <p className="privacy__default-text">
                You can access the Platform through commonly used web browsers
                on your personal computers, laptops, or mobile devices,
                including but not limited to Google Chrome, Mozilla Firefox,
                Apple Safari, and Microsoft Edge. You must ensure that the
                browser is compatible with the Platform's technical requirements
                and is updated to the latest version to ensure optimal
                performance and security. The Company does not guarantee that
                the Platform will be accessible or function optimally on all
                browsers or devices.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">3. Eligibility</h2>
              <p className="privacy__default-text">
                By submitting, posting, or displaying any text, images, videos,
                or other materials (collectively, "User Content") on or through
                the Platform, you grant us a perpetual, non-exclusive,
                worldwide, royalty-free, sublicensable, and transferable license
                to use, reproduce, modify, adapt, publish, distribute, publicly
                display, and perform the User Content in connection with the
                operation of the Platform and the Company's (and its successors'
                and affiliates') business, including for promoting and
                redistributing part or all of the Platform.{" "}
              </p>
              <p className="privacy__default-text">
                You acknowledge and agree that interactions taking place through
                the Platform may be distributed live or as on-demand content. We
                may use and display information including your in-game name,
                rank, profile picture, stream-captured video and other data that
                we deem relevant to improve the available content, advertise
                your products and services, and improve interactions within the
                Platform.
              </p>
              <p className="privacy__default-text">
                You can delete individual content that you share, post and
                upload at any time. In addition, all content posted to your
                personal account will be deleted if you delete your account. To
                delete your account, please follow the procedure described in
                the Privacy Policy.{" "}
              </p>
              <p className="privacy__default-text">
                You grant us the right to utilize any ideas or concepts
                contained within User Content for any purpose, including but not
                limited to, product and service development, manufacturing,
                marketing, or generating informational articles, without
                providing any compensation to you. To the maximum extent
                permitted by law, you waive any moral rights you may possess in
                your submitted User Content.
              </p>
              <p className="privacy__default-text">
                You agree not to submit, post, or display any User Content on
                the Platform that infringes upon or violates the copyright,
                trademark, or other intellectual property rights of any third
                party. By submitting User Content, you represent and warrant
                that you have the necessary rights, licenses, consents, and
                permissions to publish User Content and to grant the consents
                specified in these terms of use.
              </p>
              <p className="privacy__default-text">
                We are not required to host, display, or distribute, and may
                remove at any time, any User Content. If you believe that your
                copyright, trademark, or other intellectual property rights have
                been infringed upon, we encourage you to let us know. We reserve
                the right to permanently delete, modify or limit access to User
                Content that infringes upon copyright, trademark, or other
                intellectual property rights. We reserve the right to change the
                format, sizing, and any other specifications of User Content as
                we see fit.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                4. Customer Registration Process
              </h2>
              <p className="privacy__default-text">
                To use the Platform and before publishing any User Content or
                making any monetary transactions, you will need to register for
                an account by providing your identification information and
                accepting the terms of these Terms. By using the Platform, you
                agree and represent that you will use the Platform only for
                yourself, and not on behalf of any third party. You are fully
                responsible for all activity that occurs under your account. The
                Company may, in our sole discretion, refuse to open an account
                for you, or limit the number of accounts that you may hold or
                suspend or terminate any account.
              </p>
              <p className="privacy__default-text">
                The list of authorisation methods is available at the Platform.
              </p>
              <p className="privacy__default-text">
                To become a customer, in order to execute your transaction or in
                other cases, you may also be required to provide the information
                necessary to verify your identity and for the detection of
                anti-money laundering, terrorist financing, fraud, or any other
                financial crime. Failure to provide any information that Company
                reasonably requests from you after you have become a Customer
                shall be grounds for the suspension of the provision of Services
                to you (including access to your account) and/or the termination
                of this Agreement.
              </p>
              <p className="privacy__default-text">
                The information we request may include certain personal
                information including, but not limited to, your full name,
                address, telephone number, email address, date of birth,
                taxpayer identification number, government identification
                number, billing type, source of funds, government issued
                documents, marital status, title, gender, residential address,
                nationality and other requested details. The nature and extent
                of the information you are required to provide may differ, for
                example, based on the services provided to you under this
                Agreement and/or the means of payment you use. In providing us
                with this or any other information that may be required, you
                confirm that the information is accurate and correct and you
                agree to keep us updated if any of the information you provide
                changes. We will treat this information in accordance with the
                data protection provisions of this Agreement.
              </p>
              <p className="privacy__default-text">
                You authorize us to make enquiries directly or through third
                parties, that we consider necessary to verify your identity or
                protect you and/or us against fraud or other financial crime,
                and to take action we reasonably deem necessary based on the
                results of such inquiries. When we carry out these enquiries,
                you acknowledge and agree that your personal information may be
                disclosed to credit reference and fraud prevention or financial
                crime agencies. Additionally, we may require you to wait some
                amount of time after completion of a transaction before
                permitting you to use further Company services and/or before
                permitting you to engage in transactions beyond certain volume
                limits.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                5. User-Organized Competitions
              </h2>
              <p className="privacy__default-text">
                The Platform allows users to organize and participate in
                competitions involving Supported Games. Users may create
                competitions that involve two or more participants, with the
                option of establishing prize pools for the winners.{" "}
              </p>
              <p className="privacy__default-text">
                The specific terms and conditions for each user-organized
                competition, including the rules of the competition, eligibility
                criteria for participants, prize pool amounts and distribution,
                and any applicable fees or charges, shall be displayed
                separately on the Platform ("Competition Terms"). Users
                organizing and participating in such competitions are
                responsible for understanding and adhering to the Competition
                Terms.
              </p>
              <p className="privacy__default-text">
                By organizing or participating in a user-organized competition,
                users agree to abide by the Competition Terms and any additional
                guidelines, rules, or requirements set forth by the Company. The
                Company reserves the right to modify or remove any
                user-organized competition that violates these Terms of Use, the
                Platform's rules and guidelines, or any applicable laws or
                regulations.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                6. Placing Orders, Payment, Relationship between Service
                Provider and Client
              </h2>
              <p className="privacy__default-text">
                You will then be able to browse, select and, if applicable,
                purchase various services, including but not limited to,
                tournaments, training sessions, consultations, challenges, and
                boosts organised by other customers (“Service Providers”) or the
                Company.
              </p>
              <p className="privacy__default-text">
                To purchase a service at the Platform you need to click the
                “order” button. Please check the accuracy of the provided data
                during the order.
              </p>
              <p className="privacy__default-text">
                The price and availability of the services will be shown during
                the order process. The pricing shown and valid at the time of
                the order shall apply. Fees may be charged for our services and
                for the Service Providers, which will be clearly displayed to
                users prior to completing a purchase. By placing an order, you
                agree to pay all applicable fees and taxes. The full amount will
                be charged at the time of execution of the order.
              </p>
              <p className="privacy__default-text">
                The prices are listed in Euro or your local currency, if
                supported.
              </p>
              <p className="privacy__default-text">
                The Company accepts Visa, Mastercard and other payment methods
                (including Xsolla, Google Pay, Apple Pay) for payments (EUR).
                The list of available payment methods and supported payment
                gateways is available at the Platform.
              </p>
              <p className="privacy__default-text">
                If the payment of a due amount is not received or in case of
                irregular payment, the Company reserves the right, after taking
                your order, to suspend or cancel the order.{" "}
              </p>
              <p className="privacy__default-text">
                Where applicable, the Platform acts as an intermediary between
                Service Providers and clients, facilitating the purchase and
                delivery of services. In such case, the Platform does not itself
                provide the services offered on the Platform and is not
                responsible for the quality or outcome of any service provided.
                The relationship between the Service Provider and the client is
                that of an independent contractor. The Platform is not a party
                to this agreement and assumes no responsibility for the
                performance of either party under the agreement.{" "}
              </p>
              <p className="privacy__default-text">
                Service providers are independent contractors and not employees,
                partners, or agents of the Company. We do not endorse,
                guarantee, or assume responsibility for any service provided by
                a Service Provider.
              </p>
              <p className="privacy__default-text">
                We may be obligated to report transactions made by you as a
                Service Provider through the Platform to applicable local tax
                board or authority. You agree that the information related to
                the transaction and the information from your account may be
                provided to the extent necessary for fulfilment of our
                obligations to tax authorities.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                7. Cancellations And Refunds
              </h2>
              <p className="privacy__default-text">
                Once an order to buy or sell has been made it cannot be
                cancelled or recalled.
              </p>
              <p className="privacy__default-text">
                All orders are final and cannot be refunded once the order has
                been sent or fulfilled in accordance with the order description.
              </p>
              <p className="privacy__default-text">
                You hereby agree that upon delivery, you will not be entitled to
                any credit or refund and all purchases are final. The Company's
                obligation towards you will be absolutely discharged upon
                delivery of the product or service to you or intermediation to
                the Service Provider and you shall have no claim or right
                against the Company upon such delivery.
              </p>
              <p className="privacy__default-text">
                This no-refund policy shall apply at all times regardless of any
                reason whatsoever. The product or service are not delivered on a
                tangible medium (disk, package or otherwise) and the delivery
                begins after your express consent and acknowledgement that you
                loose the right of withdrawal.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                8. Suspension, termination and cancellation
              </h2>
              <p className="privacy__default-text">
                The Company may: (a) refuse to complete, or block or cancel you
                have authorized, (b) suspend, restrict, or terminate your access
                to any or all of the services, and/or (c) deactivate or cancel
                your account with immediate effect for any reason, including but
                not limited to where:
              </p>
              <ul style={{ marginLeft: "1rem" }}>
                <li>
                  <p className="privacy__default-text">
                    there is a reason to suspect that you are acting in breach
                    of this Agreement or applicable legislation;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    your User Content is identified to be in breach of
                    third-party copyright or other rights;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    we have identified a threat to security of your account,
                    including for prevention of data leaks;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    we have a reason to suspect that Platform is being used for
                    the purposes of fraud or in breach of this Agreement;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    use of your account is subject to any pending litigation,
                    investigation, or government proceeding;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    we perceive a heightened risk of legal non-compliance
                    associated with your account activity;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    use of any of the features for gambling purposes, including
                    but not limited to, placing bets or wagers on the outcome of
                    any game or event;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    you fail to provide on request documents or information as
                    reasonably required in order to comply with obligations
                    under applicable laws.
                  </p>
                </li>
              </ul>
              <p className="privacy__default-text">
                In the event of any termination, whether by you or us, these
                Terms of Service will continue in full force and effect,
                including our right to use User Content. In the case any of the
                above become applicable, the Company shall make reasonable
                efforts to inform you about the withholding or suspension.
              </p>
              <p className="privacy__default-text">
                The Company shall not be liable for any losses you may suffer as
                a result of any reasonable action taken in accordance with this
                clause.
              </p>
              <p className="privacy__default-text">
                Where the circumstances described in this clause cease to exist,
                the Company may, at its discretion, either reinstate access to
                the account and the services and/or issue you with new account
                details and reserves the right to ask you to repeat the account
                opening procedure in part or in full as outlined in this
                Agreement and to resolve any open issues with your account
                before a restriction is removed.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">9. Fees</h2>
              <p className="privacy__default-text">
                The Platform uses third-party services to process any payments
                and transactions between you, the Company and other users. All
                of your interactions with third parties and the services they
                provide are regulated by different terms, conditions and
                policies, and to which you expressly and independently agree
                whenever you execute third party agreements and conduct
                with/through them.
              </p>
              <p className="privacy__default-text">
                All fees payable under this Agreement, including taxes are
                displayed during the operation flow and shall be paid in
                currency displayed at the Platform.
              </p>
              <p className="privacy__default-text">
                The Company reserves the right to pursue any financial losses
                suffered due to you filing a chargeback procedure with your bank
                or payment provider. These can include administration fees
                levied by the card acquirer and card schemes.
              </p>
              <p className="privacy__default-text">
                In the case of intermediation between the customer and a Service
                Provider, the Company acts as a commercial agent with a
                contractual right to negotiate the sale or purchase of services
                or to enter into contracts for the sale or purchase of services
                on behalf of only the Service Provider.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                10. Wallet Use and Prepayment for Services
              </h2>
              <p className="privacy__default-text">
                You agree to comply with the terms governing the platform's
                built-in wallet feature. The wallet is used to deposit funds
                securely on our account in a payment service provider before
                final purchase of the respective services. You must ensure that
                you have sufficient funds in the wallet to initiate transactions
                and obtain services within the platform. All payments are
                subject to applicable fees and conversion rates, as determined
                at the time of transaction. You will not be entitled to
                additional rewards, bonuses or payments for the funds held in
                the wallet.
              </p>
              <p className="privacy__default-text">
                You acknowledge and agree that all prepayments are final and
                non-refundable, except in cases where the platform, at its sole
                discretion, determines that a refund is warranted. The platform
                reserves the right to suspend, limit, or terminate your access
                to the wallet feature in the event of any violations of these
                terms of use or any applicable laws and regulations. In case
                your account is deleted or in other cases upon clicking on the
                “withdraw” button, the amounts held in the wallet will be
                returned to the original account from which the transaction was
                made, unless there is a legal obligation restricting our right
                to make the transaction. You shall be solely responsible for
                indicating the account to which repayments will be made.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">11. Data Protection</h2>
              <p className="privacy__default-text">
                The Company shall ensure the protection of your data, including
                your personal data, and the use of the data in line with the
                procedure prescribed by the terms of the Privacy Policy
                available at the Platform.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">12. Liability</h2>
              <p className="privacy__default-text">
                This clause sets out the entire financial liability for any
                acts, representations, misrepresentations, omissions or tortious
                acts of the Company, its employees, agents and subcontractors
                with respect to and arising from this Agreement or the use of
                the Platform
              </p>
              <p className="privacy__default-text">
                All warranties, representations, conditions and all other terms
                of any kind whatsoever implied by law are excluded from this
                Agreement to the fullest extent permitted by applicable law.
              </p>
              <p className="privacy__default-text">
                The Company shall not be held liable for any disputes, claims,
                or issues that may arise from user-organized competitions,
                including but not limited to, the enforcement of the Competition
                Terms, the distribution of prize pools, or the conduct of
                participants. Users organizing and participating in competitions
                do so at their own risk and agree to indemnify and hold harmless
                the Company from any claims, damages, or losses resulting from
                their involvement in user-organized competitions.
              </p>
              <p className="privacy__default-text">
                You agree not to hold the Company responsible for any disputes,
                claims, losses, injuries, or damages arising from or relating to
                the services provided by Service Providers, or the conduct of
                customers or Service Providers.
              </p>
              <p className="privacy__default-text">
                You are solely responsible for all tax liability associated with
                payments received from other customers and through the Platform.
                We will not withhold any taxes from any payments unless legally
                required to. In such case, the witholding will be indicated to
                you. By using the Platform and offering any services we do not
                offer or provide an expectation of you getting any liability,
                health, (un)employment, disability, pension, or other insurance
                ore benefit needed, desired, or required by law from the
                Company.
              </p>
              <p className="privacy__default-text">
                You agree to promptly cooperate with us and provide the
                documents necessary, as may be reasonably requested, for
                purposes tax audit, including but not limited to records showing
                you is engaging in an independent business operated through the
                Platform. You acknowledge that you must comply with your
                obligations under income tax provisions in your jurisdiction.
              </p>
              <p className="privacy__default-text">
                The Platform is provided on an “as is” and “as available” basis
                without warranties of any kind. The Company disclaims all
                warranties, including warranties of non-infringement,
                marketability and fitness for a particular purpose. The Company
                shall not be liable for any pecuniary damages, loss of profits,
                cost of substitute goods or services, loss of data, loss of
                goodwill, work stoppage, computer and/or device or technology
                failure or malfunction, or for any form of direct or indirect
                damages, legal action whatsoever related to any service or
                product available on the Platform, any technology used by the
                Company or related parties. You accept the inherent security
                risks of providing information and dealing online over the
                internet and agree that we have no liability or responsibility
                for any breach of security unless it is due to our gross
                negligence. If applicable law does not allow all or any part of
                the above limitation of liability to apply to you, the
                limitations will apply to you only to the extent permitted by
                applicable law.
              </p>
              <p className="privacy__default-text">
                You agree that this limitation of liability is applicable to any
                event, to the maximum extent permitted by applicable law, the
                company’s total aggregate liability shall not exceed ten percent
                (10%) of the total sum paid directly by you to the Company.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                13. Warranties and Representations
              </h2>
              <p className="privacy__default-text">
                By agreeing to this Agreement, you represent and warrant to us
                that:
              </p>
              <ul style={{ marginLeft: "1rem" }}>
                <li>
                  <p className="privacy__default-text">
                    you have the legal capacity to enter into this Agreement;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    you are entering into this on behalf of any third party;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    if applicable, you have acquired independent legal or other
                    advice on the suitability and appropriateness of Platform
                    for your needs;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    you will not violate any applicable laws by entering into
                    this Agreement or receiving the services provided under it;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    the information and documents you provided to the Company is
                    true, complete, accurate, up to date and is provided in good
                    faith.
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    you will not provide false, misleading or inaccurate
                    information;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    you will not use any means to directly or indirectly damage,
                    corrupt, disrupt, misuse or gain unauthorized access to any
                    data, system information or the services;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    you will not use an anonymizing proxy, automatic devices or
                    programmes to copy or monitor the Platform;
                  </p>
                </li>
                <li>
                  <p className="privacy__default-text">
                    you understand and acknowledge that we cannot always warrant
                    and guarantee, to the accuracy or completeness of all the
                    information provided on Platform.
                  </p>
                </li>
              </ul>
              <p className="privacy__default-text">
                The Company warrants, represents and undertakes that it shall
                provide the Services with reasonable care and skill.
              </p>
              <p className="privacy__default-text">
                Company makes no representation or warranty that the services
                are applicable or appropriate for use by customers in all
                jurisdictions and it is your responsibility to ensure compliance
                with the laws of any relevant jurisdiction of your residence.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">14. Term</h2>
              <p className="privacy__default-text">
                This Agreement will continue unless either party notifies the
                other of termination, in writing, in accordance with this
                Agreement.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">15. Complaints</h2>
              <p className="privacy__default-text">
                For any complaint relating to the services, disputes, unexpected
                payments from the Company for various reasons, including
                suspected fraud, or charges more than you expected, and not
                receiving the good or service, you are advised to contact us
                help@cyberyal.com
              </p>
              <p className="privacy__default-text">
                More information about dispute and consumer protection
                provisions are described in clause 16 of the Agreement.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">16. General</h2>
              <p className="privacy__default-text">
                We grant you a limited, non-exclusive, non-transferable license,
                subject to the terms of this Agreement, to access and use the
                Platform, and related content, materials, information
                (collectively, the "Content") solely for approved purposes as
                permitted by us from time to time. Any other use of the Platform
                or Content is expressly prohibited and all other rights, titles,
                and interests in the Platform or Content is exclusively the
                property of Company and its licensors. You agree not to copy,
                transmit, distribute, sell, license, reverse engineer, modify,
                publish, or participate in the transfer or sale of, create
                derivative works from, or in any other way exploit any of the
                Content, in whole or in part.
              </p>
              <p className="privacy__default-text">
                The logos and trademarks displayed on the Platform are
                registered marks and intellectual property rights of the
                Company. You may not copy, imitate or use them without our prior
                written consent or any third party's copyright, trade secret,
                patent or other intellectual property rights, or rights of
                publicity or privacy.
              </p>
              <p className="privacy__default-text">
                We may periodically update these terms of this Agreement. The
                changes will be deemed to have been accepted if you continue to
                use the Platform. If you do not accept the change, you must
                contact us to terminate the Agreement. You may terminate the
                Agreement immediately and free of charge with effect at any
                time.
              </p>
              <p className="privacy__default-text">
                We may make all other amendments to the Agreement by posting the
                revised Terms (Agreement) on the Platform, indicating when the
                revised Agreement becomes effective. Although we will endeavour
                to provide you with advance notice where possible, where lawful
                we may indicate that the revised Agreement shall be effective
                immediately and if you do not agree with any such modification,
                you should close your account and cease using the Platform.
              </p>
              <p className="privacy__default-text">
                Any information acquired about other customers through the
                Platform should be treated as confidential and only used it in
                connection with the Platform. Such information may only be used
                to the extent reasonably necessary to carry out a transaction
                and other functions reasonably incidental thereto such as
                support, reconciliation and accounting unless you receive the
                other customer’s express consent to do so. You may not send
                unsolicited communications to another customer through the
                Platform, unless expressly allowed by the other customer.
              </p>
              <p className="privacy__default-text">
                This Agreement comprises the entire understanding and agreement
                between you and Company as to the subject matter hereof, and it
                supersedes any and all prior discussions, agreements and
                understandings of any kind (including without limitation any
                prior versions of this Agreement) between you and the Company.
              </p>
              <p className="privacy__default-text">
                Section headings in this Agreement are for convenience only and
                shall not govern the meaning or interpretation of any provision
                of this Agreement.
              </p>
              <p className="privacy__default-text">
                If any provision of this Agreement is determined to be invalid
                or unenforceable under any applicable law, this will not affect
                the validity of any other provision. If any provision is found
                unenforceable, the unenforceable provision will be severed, and
                the remaining provisions will be enforced.
              </p>
              <p className="privacy__default-text">
                We may not always strictly enforce our rights under this
                Agreement. If we do choose not to enforce our rights at any
                time, it shall not be seen as renouncement of such right.
              </p>
              <p className="privacy__default-text">
                All provisions of this Agreement which by their nature extend
                beyond the expiration or termination of this Agreement will
                continue to be binding and operate after the termination or
                expiration of this Agreement.
              </p>
            </div>

            <div className="privacy__text-block">
              <h2 className="privacy__min-title">
                16. Governing law and Legal disputes
              </h2>
              <p className="privacy__default-text">
                Any matters arising from this Agreement shall be governed by and
                interpreted in accordance with the substantive laws of Estonia.
              </p>
              <p className="privacy__default-text">
                If a dispute arises between you and the Company, you are
                strongly encouraged to first contact us directly to seek a
                resolution.
              </p>
              <p className="privacy__default-text">
                In case of failure to settle any dispute through negotiations,
                any disputes which may arise out of or in connection with this
                Agreement shall be settled by the Harju County Court.
              </p>
              <p className="privacy__default-text">
                All private customers are entitled to address a competent
                supervisory authority, which is the Consumer Protection and
                Technical Regulatory Authority at Endla 10A, 10122 Tallinn,
                e-mail: info@ttja.ee.
              </p>
              <p className="privacy__default-text">
                In order to resolve disputes, you, as a private customer, may
                address the Consumer Disputes Committee. The Consumer Disputes
                Committee is authorized to resolve disputes arising from
                contracts entered into between purchasers and sellers that the
                parties have failed to resolve by way of negotiations. Further
                information on the resolution of complaints is available at{" "}
                <a
                  className="privacy__default-text privacy__link"
                  href="https://ttja.ee/en/consumer-disputes-committee"
                >
                  https://ttja.ee/en/consumer-disputes-committee
                </a>
                .
              </p>
              <p className="privacy__default-text">
                To protect you in case of fraudulent authorisation of your
                credit card or in other cases you are in duly justified cases of
                breaches of your consumer rights you can initiate a formal
                payment dispute with your bank or payment service provider
                (chargeback). You will need to contact your bank or payment
                service provider for more details on how their particular
                process works.
              </p>
              <p className="privacy__default-text">
                When a chargeback procedure is started, the Company is no longer
                able to resolve the dispute with you directly, and any refund
                you receive will come from your bank or payment service provider
                and not from the Company.
              </p>
              <p className="privacy__default-text">
                If you act as a legal person or a sole proprietor, the
                provisions relating to special consumer rights shall not apply
                to the purchase contract (the so-called consumer protection
                provisions).
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