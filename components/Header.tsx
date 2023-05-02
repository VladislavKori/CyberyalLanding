import React from "react";
import Image from "next/image";

import ArrowRight from "../public/assets/ArrowRight.svg";

import Logo from "@/public/logo.svg";

import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";


function Header() {

  const router = useRouter();
    if (typeof window !== "undefined") {
        var element = document.getElementById("ref");
    }

    const isPrivacy = router.pathname === "/privacy";
    const isHome = router.pathname === "/home";
    const isLanding = router.pathname === "/";


    const currentRoute = router.pathname;

    const handleClick = () => element?.scrollIntoView();

    return (
      <>
        <header className="header">
          <div className="header__left">
            <Link href={"/"}>
              <div className="header__logo">
                <Image className="header__logo-img" src={Logo} alt="logo" />
              </div>
            </Link>
            <nav className="header__navbar">
              <Link
                className={`header__link ${
                  currentRoute === "/" ? "active_link" : ""
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`header__link ${
                  currentRoute === "/about" ? "active_link" : ""
                }`}
                href="/about"
              >
                About
              </Link>
              <Link
                className={`header__link ${
                  currentRoute === "/affiliate" ? "active_link" : ""
                }`}
                href="/affiliate"
              >
                Affiliate
              </Link>
            </nav>
          </div>
          {isPrivacy ? (
            ""
          ) : isHome ? (
            <button className="header__btn" onClick={handleClick}>
              Subscribe
            </button>
          ) : (
            <Button />
          )}
        </header>
      </>
    );
}

export default Header;