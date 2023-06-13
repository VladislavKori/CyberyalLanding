import React from "react";
import Image from "next/image";

import ArrowRight from "../public/assets/ArrowRight.svg";

import Logo from "@/public/logo.svg";

import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/UI/Button";

// icons
import BurgerIcon from '@/public/header/burger.svg';
import CloseIcon from '@/public/assets/close_modal.svg';


function Header() {

  const router = useRouter();
  if (typeof window !== "undefined") {
    var element = document.getElementById("ref");
  }

  const isPrivacy = router.pathname === "/privacy";
  const isTermsOfUse = router.pathname === "/termsofuse";
  const isHome = router.pathname === "/home";
  const isLanding = router.pathname === "/";


  const currentRoute = router.pathname;

  const [burgerIsOpen, setBurgerOpen] = useState<boolean>(false);

  const handleClick = () => element?.scrollIntoView();

  return (
    <>
      <header className="header">
        <div className="header__left">
          <Link href={"/"}>
            <div className="header__logo">
              <Logo className="header__logo-img" />
            </div>
          </Link>
          <nav className="header__navbar">
            <Link
              className={`header__link ${currentRoute === "/about" ? "active_link" : ""
                }`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`header__link ${currentRoute === "/affiliate" ? "active_link" : ""
                }`}
              href="/affiliate"
            >
              Affiliate
            </Link>
          </nav>
        </div>
        {isPrivacy || isTermsOfUse ? (
          ""
        ) : isHome ? (
          <button className="header__btn" onClick={handleClick}>
            Subscribe
          </button>
        ) : (
          <div className="header__btns">
            {/* <button className="header__btn header__btn_empty">
              Login
            </button> */}
            <Button />
          </div>
        )}
        <button onClick={() => setBurgerOpen(!burgerIsOpen)} className="header__burger-btn">
          {burgerIsOpen ? <CloseIcon style={{stroke: "#fff"}} /> : <BurgerIcon />}
        </button>
      </header>
      <div className={burgerIsOpen ? "header__burger" : "header__burger header__burger_close"}>
        <div className="header__burger-inner content">
          <Link
            className={`header__link ${currentRoute === "/about" ? "active_link" : ""
              }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`header__link ${currentRoute === "/affiliate" ? "active_link" : ""
              }`}
            href="/affiliate"
          >
            Affiliate
          </Link>
          <Button className="header__burger-button" />
        </div>
      </div>
    </>
  );
}

export default Header;