import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.svg";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    var element = document.getElementById("ref");
  }

  const isPrivacy = router.pathname === "/privacy";

  const handleClick = () => element?.scrollIntoView();

  const handleClickRoute = async () => {
    // Wait for route change before do anything
    await router.push("/");
    // Reload after routing
    router.reload();
  };

  return (
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
        </nav>
      </div>
      {isPrivacy ? (
        ""
      ) : (
        <button className="header__btn" onClick={handleClick}>
          Subscribe
        </button>
      )}
    </header>
  );
}

export default Header;