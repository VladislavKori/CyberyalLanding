import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <Image className="header__logo-img" src={Logo} alt="logo" />
        </div>
        <nav className="header__navbar">
          <Link className="header__link" href="/">Home</Link>
          <Link className="header__link" href="/about">About</Link>
        </nav>
      </div>
      <button className="header__btn">Subscribe</button>
    </header>

  )
}

export default Header