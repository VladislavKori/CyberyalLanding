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

  const handleClickRoute = async () => {
    // Wait for route change before do anything
    await router.push("/");
    // Reload after routing
    // router.reload();
  };
  
  const handleClick = () => element?.scrollIntoView();

  return (
    <>
      <header className="header">
        <div className="header__left">
          <div className="header__logo">
            <Image className="header__logo-img" src={Logo} alt="logo" />
          </div>
          <nav className="header__navbar">
            <div className="header__link" onClick={() => handleClickRoute()}>
              Home
            </div>
            <Link className="header__link" href="/about">
              About
            </Link>
            <Link className="header__link" href="/affiliate">
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