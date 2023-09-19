import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

// icons
import Logo from '@/public/logo.svg';
import PhoneIcon from '@/public/footer/Phone.svg';
import MailIcon from '@/public/footer/mail.svg';
import VKIcon from '@/public/socials/VK.svg'

//data
import { socials } from '@/data/socials';
import { commonInfo } from '@/data/commonInfo';

function Footer() {

  const [footerInfo, setFooterInfo] = useState<{
    mail: string
    footer_text: string
  }>({
    mail: 'support@cyberyal.com',
    footer_text: 'Cyberyal is an independent entity that is not affiliated or endorsed by Blizzard Entertainment, Bungie, or Respawn Entertainment. The views and opinions expressed by Cyberyal do not reflect those of the aforementioned entities or anyone involved in managing their franchises. All trademarks belonging to the aforementioned entities are the property of their respective owners in the U.S.A and/or other countries. All submitted art content remains the copyright of its original copyright holder. Please note that Cyberyal does not sell in-game items; we only offer services to help players improve their in-game skills and provide gifts of in-game items.'
  })

  if (footerInfo.mail === '') {
    return null
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <a href={"/"}>
            <div className="footer__logo">
              <Logo />
            </div>
          </a>
          {/* <p className="footer__text-cursive">
            “All tools for boost your gaming skills”
          </p> */}
          <div className="footer__socials">
            <a
              className="footer__social"
              target="_blank"
              href={socials.filter((item) => item.title === "Discord")[0].link}
            >
              {socials.filter((item) => item.title === "Discord")[0].icon()}
            </a>
            <a
              className="footer__social"
              target="_blank"
              href={socials.filter((item) => item.title === "Twitter")[0].link}
            >
              {socials.filter((item) => item.title === "Twitter")[0].icon()}
            </a>
            <a
              className="footer__social"
              target="_blank"
              href={socials.filter((item) => item.title === "VK")[0].link}
            >
              <VKIcon />
            </a>
            <a
              className="footer__social"
              target="_blank"
              href={socials.filter((item) => item.title === "Facebook")[0].link}
            >
              {socials.filter((item) => item.title === "Facebook")[0].icon()}
            </a>
          </div>
        </div>
        <div className="footer__menu">
          <div className="footer__block">
            <p className="footer__menu-title">Product</p>
            <div className="footer__block-links">
              <Link className="footer__link" href={"/about"}>
                About
              </Link>
              <Link className="footer__link" href={"/affiliate"}>
                Affiliate
              </Link>
              {/* <Link className="footer__link" href={"/support"}>
                Support
              </Link> */}
              {/* <Link className="footer__link" href={"/promotion"}>
                Promotion
              </Link> */}
            </div>
          </div>
          {/* <div className="footer__block">
            <p className="footer__menu-title">Company</p>
            <div className="footer__block-links">
              <Link className="footer__link" href={"/branding"}>
                Branding
              </Link>
              <Link className="footer__link" href={"/partners"}>
                Partners
              </Link>
              <Link className="footer__link" href={"/contactus"}>
                Contact us
              </Link>
              <Link className="footer__link" href={"/career"}>
                Career
              </Link>
            </div>
          </div> */}
          <div className="footer__block">
            {/* <div className="footer__field">
              <div className="footer__field-header">
                <PhoneIcon className="footer__field-icon" />
                <p className="footer__menu-title">Phone</p>
              </div>
              <a
                href={`tel:${commonInfo.phone}`}
                className="footer__text_white"
              >
                {commonInfo.phone}
              </a>
            </div> */}
            <div className="footer__field">
              <div className="footer__field-header">
                <MailIcon className="footer__field-icon" />
                <p className="footer__menu-title">Mail</p>
              </div>
              <a
                href={`mailto:${footerInfo.mail}`}
                className="footer__text_white"
              >
                {footerInfo.mail}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        {/* <p className="footer__text_gray">
          * Our platform's services constitute 3 percent of the tournament prize
          pool. We provide flexible tournament conditions and are ready to work
          with you to make your tournament a success
        </p> */}
        <hr />
        <p className="footer__text_gray">
          {footerInfo.footer_text}
        </p>
        <div className="footer__rights">
          {/* <p className="footer__text_white">
            © 2023 All rights reserved CYBERYAL LTD 25 Martiou, 27 D. Michael
            Tower, flat/office 105A, Egkomi, 2408 Nicosia, Amsterdam Reg.No. ΗΕ
            416048
          </p> */}
          <div className="footer__bottom-links">
            <Link className="footer__link" href={"/privacy"}>
              Privacy Policy
            </Link>
            <Link className="footer__link" href={"/termsofuse"}>
              Terms Of Use
            </Link>
            <Link className="footer__link" href={"/competitionterms"}>
              Competition Terms
            </Link>
          </div>
        </div>
      </div>

      {/* <Link className="footer__link" href={"/"}>
        Home
      </Link> */}
    </footer>
  );
}

export default Footer
