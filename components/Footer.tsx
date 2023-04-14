import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Image className="footer__logo-img" src={Logo} alt="logo" />
      </div>
      {/* <Link className="footer__link" href={"/"}>
        Home
      </Link>
      <Link className="footer__link" href={"/about"}>
        About
      </Link> */}
      <Link
        style={{ marginLeft: "auto" }}
        className="footer__link"
        href={"/privacy"}
      >
        Privacy Policy
      </Link>
    </footer>
  );
}

export default Footer