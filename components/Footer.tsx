import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.svg';

function Footer() {
  return (
    <footer className="footer" style={{ marginTop: "100px" }}>
      <Link className="footer__link" href={"/"}>
        <div className="footer__logo">
          <Image className="footer__logo-img" src={Logo} alt="logo" />
        </div>
      </Link>
      {/* <Link className="footer__link" href={"/"}>
        Home
      </Link> */}
      <Link className="footer__link" href={"/about"}>
        About
      </Link>
      <Link className="footer__link" href={"/privacy"}>
        Privacy Policy
      </Link>
      <Link className="footer__link" href={"/termsofuse"}>
        Terms Of Use
      </Link>
    </footer>
  );
}

export default Footer